const test = async (n) => {
    if (n) {
        console.log('running');
        const chartAPI = await dash_high_charts.getApiAsync('X');
        chartAPI.setTitle({ text: 'Hello Test' });
    }
};

// Assuming dash_high_charts is defined or imported correctly
test(5);