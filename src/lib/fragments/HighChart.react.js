import React, {Component} from 'react';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';
import {defaultProps as _defaultProps, propTypes as _propTypes, apiGetters   } from '../components/HighChart.react';

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

    render() {
        const {id, className, constructorType, options} = this.props;

        return (<div id={id}
                className={className}>
                <HighchartsReact
                    highcharts={window.Highcharts}
                    options={options}
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