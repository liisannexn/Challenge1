var lijndiagram   = document.getElementById('myChart').getContext('2d');
var chart = new Chart(lijndiagram, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['0','5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'],
        datasets: [{
            label: 'Afstand afleg over tijd',
            borderDashOffset:0.0,
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderCapStyle:'round',
            borderColor: '#7464D0',
            borderJoinStyle:'bevel',
            lineTension:'0',
            data: [{
              x:0,y:0}, {x:1,y:1}, {x:2,y:1.5}, {x:3,y:3},
              {x:4,y:2},{x:5,y:2.5},{x:6,y:4},{x:7,y:5},
              {x:8,y:3}, {x:9,y:4}, {x:10,y:5.5}, {x:11,y:5.2},
              {x:12,y:7
            }],
            pointStyle:'circle',

        }]
    },

    // Configuration options go here
    options: {
      maintainAspectRatio:true,
      responsiveAnimationDuration:0,
    }
});
//
// var cirkeldiagram   = document.getElementById('pieChart').getContext('2d');
// var myPieChart = new Chart(cirkeldiagram, {
//     type: 'pie',
//     datasets: [{
//         data: [10, 20, 30]
//     }],
//     // These labels appear in the legend and in the tooltips when hovering different arcs
//     labels: [
//         'Red',
//         'Yellow',
//         'Blue'
//     ],
//     cutoutPercentage: 0,
//     options: {}
// });
