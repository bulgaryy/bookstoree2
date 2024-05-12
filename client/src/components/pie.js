export function createPieChart(containerId, students, admin, books) {
    return {
        chart: {
            type: 'pie',
            backgroundColor: 'transparent',
        },
        title: {
            text: '<span style="color: #334155;">Number of Students, Admins, and Books</span>'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            pie: {
                cursor: "pointer",
                innerSize: '80%',
                borderWidth: 10,
                borderColor: '#fff',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y}',
                }
            }
        },
        series: [{
            name: 'Data',
            data: [
                { name: 'Students', y: students },
                { name: 'Admins', y: admin },
                { name: 'Books', y: books }
            ]
        }]
    };
}
