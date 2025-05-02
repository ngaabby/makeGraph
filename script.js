// Data storage
let chartData = [];
let pieChart = null;

// DOM Elements
const chartTitleInput = document.getElementById('chartTitle');
const labelInput = document.getElementById('label');
const valueInput = document.getElementById('value');
const saveBtn = document.getElementById('saveBtn');
const createChartBtn = document.getElementById('createChartBtn');
const resetBtn = document.getElementById('resetBtn');
const chartCanvas = document.getElementById('pieChart');
const labelsList = document.getElementById('labelsList');
const downloadChartBtn = document.getElementById('downloadChartBtn');

// Event Listeners
saveBtn.addEventListener('click', saveData);
createChartBtn.addEventListener('click', createChart);
resetBtn.addEventListener('click', resetAll);
downloadChartBtn.addEventListener('click', downloadChartImage);

// Function to update saved labels display
function updateLabelsDisplay() {
    labelsList.innerHTML = '';
    chartData.forEach(item => {
        const labelElement = document.createElement('span');
        labelElement.className = 'px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm';
        labelElement.textContent = item.label;
        labelsList.appendChild(labelElement);
    });
}

// Function to save data
function saveData() {
    const label = labelInput.value.trim();
    const value = parseFloat(valueInput.value);

    if (!label || isNaN(value)) {
        alert('Mohon isi label dan nilai dengan benar!');
        return;
    }

    // Add data to array
    chartData.push({
        label: label,
        value: value
    });

    // Clear inputs
    labelInput.value = '';
    valueInput.value = '';

    // Update labels display
    updateLabelsDisplay();
}

// Function to create chart
function createChart() {
    if (chartData.length === 0) {
        alert('Mohon masukkan data terlebih dahulu!');
        return;
    }

    // Destroy existing chart if any
    if (pieChart) {
        pieChart.destroy();
    }

    // Prepare data for Chart.js
    const labels = chartData.map(item => item.label);
    const values = chartData.map(item => item.value);
    const total = values.reduce((a, b) => a + b, 0);

    // Generate random colors for each data point
    const backgroundColors = chartData.map(() => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgba(${r}, ${g}, ${b}, 0.7)`;
    });

    // Create chart
    const ctx = chartCanvas.getContext('2d');
    pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: backgroundColors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        generateLabels: function(chart) {
                            const data = chart.data;
                            if (data.labels.length && data.datasets.length) {
                                return data.labels.map((label, i) => {
                                    const value = data.datasets[0].data[i];
                                    const percentage = ((value / total) * 100).toFixed(1);
                                    return {
                                        text: `${label} (${percentage}%)`,
                                        fillStyle: data.datasets[0].backgroundColor[i],
                                        strokeStyle: data.datasets[0].backgroundColor[i],
                                        index: i
                                    };
                                });
                            }
                            return [];
                        }
                    }
                },
                title: {
                    display: true,
                    text: chartTitleInput.value || 'Pie Chart',
                    font: {
                        size: 16
                    }
                },
                datalabels: {
                    color: '#444',
                    font: {
                        weight: 'bold',
                        size: 14
                    },
                    formatter: function(value, context) {
                        const sum = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                        const percentage = ((value / sum) * 100).toFixed(1) + '%';
                        return percentage;
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });

    // Show download button
    downloadChartBtn.style.display = 'block';
}

// Function to reset everything
function resetAll() {
    if (confirm('Apakah Anda yakin ingin menghapus semua data?')) {
        // Clear data
        chartData = [];
        
        // Clear inputs
        chartTitleInput.value = '';
        labelInput.value = '';
        valueInput.value = '';
        
        // Clear labels display
        labelsList.innerHTML = '';
        
        // Destroy chart if exists
        if (pieChart) {
            pieChart.destroy();
            pieChart = null;
        }
        // Hide download button
        downloadChartBtn.style.display = 'none';
    }
}

function downloadChartImage() {
    if (!pieChart) {
        alert('Grafik belum dibuat!');
        return;
    }
    const link = document.createElement('a');
    link.href = pieChart.toBase64Image();
    link.download = (chartTitleInput.value || 'pie_chart') + '.png';
    link.click();
} 