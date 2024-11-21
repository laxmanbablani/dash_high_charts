import React, {Component} from 'react';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';
import {defaultProps as _defaultProps, propTypes as _propTypes, apiGetters} from '../components/HighChart.react';
import {memoizeWith} from 'ramda';

// d3 imports
import * as d3Format from 'd3-format';
import * as d3Time from 'd3-time';
import * as d3TimeFormat from 'd3-time-format';

const d3 = {...d3Format, ...d3Time, ...d3TimeFormat};

export const customFunctions = {
    Math: Math, Number: Number, log: function() {
        console.log('you are logging from an AG grid function', ...arguments);
    },
};

const dash_clientside = window.dash_clientside || {};
const highChartsRefs = {};
apiGetters.getApi = (id) => highChartsRefs[stringifyId(id)]?.chart;

function stringifyId(id) {
    if (typeof id !== 'object') {
        return id;
    }
    const stringifyVal = (v) => (v && v.wild) || JSON.stringify(v);
    const parts = Object.keys(id)
        .sort()
        .map((k) => JSON.stringify(k) + ':' + stringifyVal(id[k]));
    return '{' + parts.join(',') + '}';
}

const eventBus = {
    listeners: {},
    on(id, targetId, callback) {
        if (!(id in eventBus.listeners)) {
            eventBus.listeners[id] = {};
        }
        eventBus.listeners[id][targetId] = callback;
    },
    dispatch(targetId) {
        for (const id in eventBus.listeners) {
            if (targetId in eventBus.listeners[id]) {
                eventBus.listeners[id][targetId]();
            }
        }
    },
    remove(id) {
        delete eventBus.listeners[id];
    },
};

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class HighChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...this.props.parentState,
            chartRef: null,
        };
        this.buildArray = this.buildArray.bind(this);
        this.chartRef = React.createRef();
    }

    parseFunction = memoizeWith(String, (funcString) => {
        const context = {
            d3,
            dash_clientside,
            ...customFunctions,
            ...window.highChartsFunctions,
        };
        let parsedFunction;
        if (typeof context[funcString] === 'function') {
            // If funcString is a function name in context, use it directly
            parsedFunction = context[funcString].bind(context);
        } else {
            // Create a new function with 'params' as an argument
            parsedFunction = new Function('params', `
                with (this) {
                    ${funcString}
                }
            `).bind(context);
        }
        return parsedFunction;
    });
    applyConvertFunction = (obj) => {
        const traverseAndConvert = (obj) => {
            if (typeof obj !== 'object' || obj === null) {
                return obj;
            }
            return Object.keys(obj).reduce((acc, key) => {
                if (key === 'function') {
                    const parsedFunction = this.parseFunction(obj[key]);
                    // Replace the entire object with the parsed function
                    return parsedFunction;
                } else {

                    acc[key] = traverseAndConvert(obj[key]);
                    return acc;
                }
            }, Array.isArray(obj) ? [] : {});
        };

        const result = traverseAndConvert(obj);
        return result;
    };

    buildArray(arr1, arr2) {
        if (arr1) {
            if (!arr1.includes(arr2)) {
                return [...arr1, arr2];
            }
            return arr1;
        }
        return [JSON.parse(JSON.stringify(arr2))];
    }

    componentDidMount() {
        const {id} = this.props;
        if (id) {
            highChartsRefs[id] = this.chartRef.current;
            eventBus.dispatch(id);
        }
        this.chartRef.current.chart.redraw();
    }

    componentWillUnmount() {
        if (this.props.id) {
            delete highChartsRefs[this.props.id];
            eventBus.remove(this.props.id);
        }
        this.chartRef.current.chart.destroy();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.chartRef.current.chart.redraw();
    }

    render() {
        const {id, className, constructorType, options} = this.props;
        const convertedOptions = this.applyConvertFunction(options);

        return (<div id={id}
                     className={className}>
            <HighchartsReact
                highcharts={window.Highcharts}
                options={convertedOptions}
                constructorType={constructorType}
                ref={this.chartRef}
            />
        </div>);
    }
}

HighChart.defaultProps = _defaultProps;
HighChart.propTypes = {parentState: PropTypes.any, ..._propTypes};

export const propTypes = HighChart.propTypes;
export const defaultProps = HighChart.defaultProps;