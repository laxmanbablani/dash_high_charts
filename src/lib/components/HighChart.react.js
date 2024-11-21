import React from 'react';
import PropTypes from 'prop-types';
import { HighChart as RealComponent } from '../LazyLoader';


/**
 * HighChart renders Highcharts.js JSON
 */
const HighChart = (props) => {
    return (
        <React.Suspense fallback={null}>
            <RealComponent {...props}/>
        </React.Suspense>
    );
};

HighChart.defaultProps = {};
HighChart.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
    * The className of the div
     */
    className: PropTypes.string,
    /**
     * 'chart', 'stockChart', 'mapChart', 'ganttChart'
     */
    constructorType: PropTypes.string,
    /**
     * The highcharts chart description
     */
    options: PropTypes.object,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default HighChart;

export const defaultProps = HighChart.defaultProps;
export const propTypes = HighChart.propTypes;
export const apiGetters  = {};


const _get = (flavor) => (id) => {
    // optional chaining so before the fragment exists it'll just return undefined
    // which does the right thing because clearly no grid is initialized yet!
    const api = apiGetters[flavor]?.(id);
    if (api) {
        return api;
    }
    throw new Error(
        `no chart found, or chart is not initialized yet, with id: ${id}`
    );
};

const _getAsync = (flavor) => async (id) => {
    // optional chaining so before the fragment exists it'll just return undefined
    // which does the right thing because clearly no grid is initialized yet!
    let api = apiGetters[flavor]?.(id);
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const startTime = Date.now();
    const maxDelay = 120000;
    const maxIncrement = 1000;
    let pause = 1;
    const increase = 1.5;
    while (!api) {
        await delay(pause);
        pause *= increase;
        pause = Math.min(pause, maxIncrement);
        api = apiGetters[flavor]?.(id);
        if (Date.now() > startTime + maxDelay) {
            break;
        }
    }
    if (api) {
        return api;
    }
    throw new Error(
        `no chart found, or chart is not initialized yet, with id: ${id}`
    );
};
export const getApi = _get('getApi');
export const getApiAsync = _getAsync('getApi');