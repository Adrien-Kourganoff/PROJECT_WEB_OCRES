import Chart from 'chart.js';

export default function loaded() {
            var canvas = document.getElementById('chart');
            var ctx = canvas.getContext('2d');
            var gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, 'rgba(251,189,8, 0.1)');   
            gradient.addColorStop(1, 'rgba(251,189,8, 1)');

            const data = {
            labels: ["day1", "day2", "day3", "day4", "day5", "day6"],
            datasets: [
                {
                label: "Your BMI",
                data: [28.3, 28, 27, 27.6, 25, 25.6],
                backgroundColor : gradient,
                borderColor: "rgba(152,222,217,0.2)"
                }
            ]
            };

            var options = {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                stacked: true,
                gridLines: {
                    display: true,
                    color: "rgba(255,99,132,0.2)"
                }
                }],
                xAxes: [{
                gridLines: {
                    display: false
                }
                }]
            }
            };

            Chart.Line('chart', {
            options: options,
            data: data
            });


}
