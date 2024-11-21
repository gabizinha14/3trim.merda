// Gráfico de Linhas
const lineChartContext = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(lineChartContext, {
    type: 'line',
    data: {
        labels: ['semana 1', 'semana 2', 'semana 3', 'semana 4', 'semana 5'],
        datasets: [{
            label: 'Flores semanais',
            data: [100, 40, 65, 150, 28],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Gráfico de Barras
const barChartContext = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barChartContext, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [{
            label: 'flores mensais',
            data: [1500, 796, 1718, 954, 1271],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});