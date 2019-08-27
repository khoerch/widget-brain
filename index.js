Vue.component('torque-chart', {
    props: {
    },
    data: function() {
        return {
            data: {}
        }
    },
    created() {
        fetch('http://wb-predictivemaintenance-api.prsp7vkew2.eu-central-1.elasticbeanstalk.com/api/TorqueValues')
            .then(function(response) {
                console.log(response)
            })
    },
    template: `<div>
            <canvas id="myChart"></canvas>
        </div>`,
});

new Vue({
    el: '#app',
})

const ctx = document.getElementById('myChart');
const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});