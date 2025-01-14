let myChart;

function calculateBandwidth() {
    // Get input values
    const kbSec = parseFloat(document.getElementById("kbSec").value);
    const compressionFactor = parseInt(document.getElementById("compression").value);

    // Validate input
    if (isNaN(kbSec) || kbSec <= 0) {
        alert("Please enter a valid KB/sec value.");
        return;
    }

    // Formula: WAN Mb/sec = (KB/sec * 8) / 1024 / compressionFactor
    let mbSec = (kbSec * 8) / 1024 / compressionFactor;

    // Add 5 Mb/sec to the result
    mbSec += 5;

    // Display result
    document.getElementById("result").innerHTML = `Estimated WAN Bandwidth: ${mbSec.toFixed(2)} Mb/sec`;

    // Update chart with the calculated value
    updateChart(mbSec);
}

function updateChart(bandwidth) {
    const ctx = document.getElementById('myChart').getContext('2d');

    if (myChart) {
        myChart.destroy();  // Destroy the previous chart to avoid overlapping
    }

    myChart = new Chart(ctx, {
        type: 'pie',  // Change to pie chart
        data: {
            labels: ['Estimated WAN Bandwidth'],  // Only one label
            datasets: [{
                label: 'Bandwidth Usage',
                data: [bandwidth],  // Only the WAN bandwidth value
                backgroundColor: ['#4CAF50'],  // Green for bandwidth
                borderColor: ['#4CAF50'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,  // Allow chart to resize without maintaining aspect ratio
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `${context.label}: ${context.raw.toFixed(2)} Mb/sec`;
                        }
                    }
                },
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Estimated WAN Bandwidth Usage'
                }
            },
            aspectRatio: 1  // Ensure the chart remains square even when resizing
        }
    });
}

// Initialize with default bandwidth of 5 Mb/sec
window.onload = function () {
    calculateBandwidth();
};
