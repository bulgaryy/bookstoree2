// line.js

export function createLineGraph(containerId) {
    return {
        chart: {
            type: 'line',
            backgroundColor: 'transparent', 
            margin: [50, 50, 50, 50],
            width: 600, // Set width
            height: 400

        },
        title: {
            text: '<span style="color: #334155;">Users Activity</span>', 
            style: {
                color: '#334155' 
            }
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] 
        },
        yAxis: {
            title: {
                text: '<span style="color: #334155;">Number of Users</span>' 
            }
        },
        credits: {
            enabled: false 
        },
        series: [{
            name: '<span style="color: #334155;">Months</span>', 
            data: [10, 5, 3, 5, 5, 1, 8, 8, 9, 10, 11, 12] 
        }]
        

    };
}
