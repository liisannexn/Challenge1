var lijndiagram   = document.getElementById('myChart').getContext('2d');
// lijndiagram.height(1000);
Chart.defaults.global.defaultFontColor = 'black';
var chart = new Chart(lijndiagram, {
    type: 'line',

    data: {
        labels: ['0','5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55','60'],
        defaultFontColor:'black',
        datasets: [{
            label: 'Tijd in miljoenen km',
            borderDashOffset:0.0,
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderCapStyle:'round',
            borderColor: '#7464D0',
            borderJoinStyle:'bevel',
            lineTension:'0',
            data: [0, 1, 1.5, 3, 2, 3.5, 6.1, 5, 6, 4, 3.5],
            pointStyle:'circle',

        }]
    },

    options: {
      maintainAspectRatio:false,
      responsiveAnimationDuration:0,
      responsive:true,
      title: {
            display: true,
            text: 'Afstand afleg over tijd',
            fontSize:20,
            padding:10,
        },
        legend:{
          display:false,
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 10,
                bottom: 10,
            },
        }
    }
});

new Chart(document.getElementById("pieChart"), {
    type: 'pie',
    data: {
        labels: [
          '3,772 m/s^2',
        ],
        datasets: [{
          label: 'Zwaartekracht',
          data: [3.772, 9.789],
          backgroundColor: ["#7464D0", "white"],
          color:'black',
          boderWidth:'1px',
          borderColor: 'black',
        }]},
    options: {
      maintainAspectRatio:false,
      responsiveAnimationDuration:0,
      responsive:true,
      title: {
            display: true,
            text: 'Zwaartekracht',
            fontSize:20,
            position:'top',
            padding:5,
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top:25,
                bottom: 35,
            }
        }
    }
});

var s = 50;

document.getElementById('balk').style.width = s+'%';

document.getElementById('ververs').onclick = function(){
  s += 8;
  if (s > 100){
    s = 100;
  }
    document.getElementById('balk').style.width = s+'%';
};
