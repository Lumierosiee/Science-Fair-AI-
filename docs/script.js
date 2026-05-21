// ===========================
// Simulation State & Variables
// ===========================

let simulationState = {
    isRunning: false,
    isPaused: false,
    time: 0,
    energy: 0, // kWh
    emissions: 0, // metric tons CO2
    temperature: 0, // °C
    waterLevel: 0, // percentage
    warningLevel: 0 // 0-4
};

let simulationSpeed = 1;
let animationFrameId = null;

// Energy consumption rate (kWh per second)
const energyRate = 5;

// Carbon emission rate varies by energy source
// Average global: 0.4 kg CO2/kWh
// Renewable: 0.05 kg CO2/kWh
// Fossil fuels: 0.8 kg CO2/kWh
const carbonIntensity = 0.4; // kg CO2 per kWh

// Chart instance
let impactChart = null;
const chartData = {
    labels: [],
    energyData: [],
    emissionsData: []
};

const rotatingFactMessages = [
    'Carbon Emissions Increasing',
    'Data Center Energy Usage Rising',
    'Arctic Ice Melting',
    'Renewable Energy Reduces CO₂',
    'Climate Change Affects Wildlife'
];

let factIndex = 0;

// ===========================
// Chart Initialization
// ===========================

function initializeChart() {
    const ctx = document.getElementById('impactChart').getContext('2d');
    
    impactChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartData.labels,
            datasets: [
                {
                    label: 'Energy Consumption (kWh)',
                    data: chartData.energyData,
                    borderColor: '#ff8c42',
                    backgroundColor: 'rgba(255, 140, 66, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: '#ff8c42',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    yAxisID: 'y'
                },
                {
                    label: 'Carbon Emissions (metric tons CO₂)',
                    data: chartData.emissionsData,
                    borderColor: '#ff6b6b',
                    backgroundColor: 'rgba(255, 107, 107, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: '#ff6b6b',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff',
                        font: { size: 12, weight: 'bold' },
                        padding: 20
                    }
                },
                title: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(0, 212, 255, 0.1)'
                    },
                    ticks: {
                        color: '#b0b8d4'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    grid: {
                        color: 'rgba(0, 212, 255, 0.1)'
                    },
                    ticks: {
                        color: '#ff8c42'
                    },
                    title: {
                        display: true,
                        text: 'kWh',
                        color: '#ff8c42',
                        font: { weight: 'bold' }
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        color: '#ff6b6b'
                    },
                    title: {
                        display: true,
                        text: 'Metric Tons CO₂',
                        color: '#ff6b6b',
                        font: { weight: 'bold' }
                    }
                }
            }
        }
    });
}

// ===========================
// UI Update Functions
// ===========================

function updateCounters() {
    const energyDisplay = document.getElementById('energyCounter');
    const emissionsDisplay = document.getElementById('emissionsCounter');
    const ratioDisplay = document.getElementById('ratioCounter');

    energyDisplay.textContent = simulationState.energy.toFixed(1);
    emissionsDisplay.textContent = simulationState.emissions.toFixed(2);
    ratioDisplay.textContent = carbonIntensity.toFixed(2);

    // Add animation effect
    energyDisplay.style.animation = 'none';
    emissionsDisplay.style.animation = 'none';
    
    setTimeout(() => {
        energyDisplay.style.animation = 'pulse 0.3s ease';
        emissionsDisplay.style.animation = 'pulse 0.3s ease';
    }, 10);

    updateFactDescription();
} 

function updateChart() {
    const timeLabel = `${simulationState.time}s`;
    
    chartData.labels.push(timeLabel);
    chartData.energyData.push(simulationState.energy);
    chartData.emissionsData.push(simulationState.emissions);

    // Keep only last 30 data points for performance
    if (chartData.labels.length > 30) {
        chartData.labels.shift();
        chartData.energyData.shift();
        chartData.emissionsData.shift();
    }

    if (impactChart) {
        impactChart.update('none'); // Update without animation
    }
}

// ===========================
// Animation Functions
// ===========================

function updateHeatWaves() {
    const heatWavesContainer = document.getElementById('heatWaves');
    const dataCenter = document.querySelector('.building');
    
    // Remove old heat waves
    heatWavesContainer.innerHTML = '';

    // Create heat waves based on energy consumption
    const waveCount = Math.min(5, Math.ceil(simulationState.energy / 500) + 1);
    
    for (let i = 0; i < waveCount; i++) {
        const wave = document.createElement('div');
        wave.className = 'heat-wave';
        wave.style.animationDelay = `${i * 0.4}s`;
        heatWavesContainer.appendChild(wave);
    }
}

function initializeFactTicker() {
    const factTicker = document.getElementById('factTicker');
    if (!factTicker) return;

    factTicker.textContent = rotatingFactMessages[factIndex];
    setInterval(() => {
        factIndex = (factIndex + 1) % rotatingFactMessages.length;
        factTicker.classList.remove('fade-in');
        void factTicker.offsetWidth;
        factTicker.textContent = rotatingFactMessages[factIndex];
        factTicker.classList.add('fade-in');
    }, 3600);
}

function updateFactDescription() {
    const detailMessage = document.getElementById('detailMessage');
    if (!detailMessage) return;

    const emissionValue = simulationState.emissions;
    let message = 'AI training requires massive data centers filled with GPUs and servers that consume huge amounts of electricity.';

    if (emissionValue >= 0.005 && emissionValue < 0.015) {
        message = 'Fossil fuel energy sources increase carbon emissions, while renewable energy sources like solar and wind reduce environmental damage.';
    } else if (emissionValue >= 0.015) {
        message = 'Training one large AI model can produce emissions equal to around 8–9 average cars over their lifetimes.';
    }

    detailMessage.textContent = message;
}

function updateTemperature() {
    const mercury = document.getElementById('mercury');
    const tempValue = document.getElementById('tempValue');
    
    // Temperature increases with emissions
    // 1 metric ton CO2 = 0.05°C rise (simplified model)
    simulationState.temperature = simulationState.emissions * 0.05;
    
    const maxHeight = 220; // pixels
    const height = Math.min((simulationState.temperature / 5) * maxHeight, maxHeight);
    
    mercury.style.height = height + 'px';
    tempValue.textContent = simulationState.temperature.toFixed(2) + '°C';
}

function updateWaterLevel() {
    const waterLevel = document.getElementById('waterLevel');
    
    // Water level rises with temperature (melting ice)
    // 1°C = 2% water level rise (simplified model)
    simulationState.waterLevel = Math.min(simulationState.temperature * 2, 100);
    
    waterLevel.style.setProperty('--water-level', simulationState.waterLevel + '%');
    waterLevel.style.height = simulationState.waterLevel + '%';
}

function updateWarningLevel() {
    // Determine warning level based on emissions
    let newLevel = 0;
    
    if (simulationState.emissions > 0.001) newLevel = 1;
    if (simulationState.emissions > 0.005) newLevel = 2;
    if (simulationState.emissions > 0.01) newLevel = 3;
    if (simulationState.emissions > 0.02) newLevel = 4;

    simulationState.warningLevel = newLevel;

    // Update warning bars
    for (let i = 1; i <= 4; i++) {
        const bar = document.getElementById(`warningBar${i}`);
        if (i <= newLevel) {
            bar.classList.add('active');
        } else {
            bar.classList.remove('active');
        }
    }
}

// ===========================
// Simulation Loop
// ===========================

function simulationTick() {
    if (!simulationState.isRunning) {
        animationFrameId = requestAnimationFrame(simulationTick);
        return;
    }

    // Increase energy consumption
    const deltaTime = 0.016 * simulationSpeed; // ~60fps
    simulationState.energy += energyRate * deltaTime;
    
    // Calculate emissions (metric tons CO2)
    simulationState.emissions = (simulationState.energy * carbonIntensity) / 1000;

    // Increment time
    simulationState.time += deltaTime;

    // Update all UI elements
    updateCounters();
    updateTemperature();
    updateWaterLevel();
    updateWarningLevel();
    updateHeatWaves();

    // Update chart every 1 second
    if (Math.floor(simulationState.time) % 1 === 0 && simulationState.time % 1 < 0.016 * simulationSpeed) {
        updateChart();
    }

    animationFrameId = requestAnimationFrame(simulationTick);
}

// ===========================
// Control Functions
// ===========================

function startSimulation() {
    simulationState.isRunning = true;
    simulationState.isPaused = false;
    document.getElementById('startBtn').textContent = '▶ Running';
    document.getElementById('startBtn').style.opacity = '0.5';
    document.getElementById('pauseBtn').textContent = '⏸ Pause';
}

function pauseSimulation() {
    simulationState.isRunning = !simulationState.isRunning;
    document.getElementById('pauseBtn').textContent = simulationState.isRunning ? '⏸ Pause' : '▶ Resume';
}

function resetSimulation() {
    simulationState = {
        isRunning: false,
        isPaused: false,
        time: 0,
        energy: 0,
        emissions: 0,
        temperature: 0,
        waterLevel: 0,
        warningLevel: 0
    };

    chartData.labels = [];
    chartData.energyData = [];
    chartData.emissionsData = [];

    if (impactChart) {
        impactChart.update();
    }

    updateCounters();
    updateTemperature();
    updateWaterLevel();
    updateWarningLevel();
    updateHeatWaves();

    // Reset UI
    document.getElementById('startBtn').textContent = '▶ Start Simulation';
    document.getElementById('startBtn').style.opacity = '1';
    document.getElementById('pauseBtn').textContent = '⏸ Pause';

    // Clear animations
    document.getElementById('heatWaves').innerHTML = '';
    document.getElementById('mercury').style.height = '0px';
    document.getElementById('waterLevel').style.height = '0%';
    
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`warningBar${i}`).classList.remove('active');
    }
}

function updateSimulationSpeed() {
    const speedSlider = document.getElementById('speedSlider');
    simulationSpeed = parseFloat(speedSlider.value);
    document.getElementById('speedDisplay').textContent = simulationSpeed + 'x';
}

// ===========================
// Event Listeners
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize chart
    initializeChart();
    initializeFactTicker();

    // Button event listeners
    document.getElementById('startBtn').addEventListener('click', startSimulation);
    document.getElementById('pauseBtn').addEventListener('click', pauseSimulation);
    document.getElementById('resetBtn').addEventListener('click', resetSimulation);

    // Speed slider
    document.getElementById('speedSlider').addEventListener('input', updateSimulationSpeed);

    // Start animation loop
    simulationTick();

    // Initial UI update
    updateCounters();
    updateChart();
});

// ===========================
// Additional Interactivity
// ===========================

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        e.preventDefault();
        startSimulation();
    } else if (e.key === 'p' || e.key === 'P') {
        pauseSimulation();
    } else if (e.key === 'r' || e.key === 'R') {
        resetSimulation();
    }
});

// Performance optimization: Update chart less frequently at higher speeds
setInterval(() => {
    if (simulationState.isRunning && simulationSpeed <= 1) {
        updateChart();
    }
}, 1000);
