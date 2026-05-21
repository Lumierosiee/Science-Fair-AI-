<!-- Quick Start Guide for AI Training & Climate Impact Project -->

# QUICK START GUIDE

## How to Use the Application

### 1. Opening the Project
- Simply open `index.html` in your web browser
- No installation or setup required
- Works offline (after page loads)

### 2. Starting the Simulation
- Click **"▶ Start Simulation"** button
- Or press **Spacebar**
- Watch the real-time counters and animations update

### 3. Controlling the Simulation
- **▶ Start**: Begin the simulation
- **⏸ Pause**: Pause/Resume the simulation
- **🔄 Reset**: Clear all data and restart
- **Speed Slider**: Adjust simulation speed (0.5x to 3x)

### 4. Understanding the Displays

#### Top Counters (Statistics)
- **⚡ Energy Consumption**: Total kWh used (increases continuously)
- **💨 Carbon Emissions**: Total metric tons of CO₂ released
- **📊 CO₂/kWh Ratio**: Carbon intensity of energy source (0.4 = global average)

#### Real-Time Graph
- Orange line = Energy consumption (measured in kWh)
- Red line = Carbon emissions (measured in metric tons CO₂)
- Both lines rise together as simulation progresses

#### Visual Animations
- **Data Center**: Shows heat waves increasing with energy use
- **Smoke**: Rising CO₂ particles being emitted
- **Thermometer**: Temperature rise due to greenhouse gases
- **Arctic Ice**: Melting ice and rising water level
- **Warning Bars**: Alert level (Low → Moderate → High → Critical)

### 5. Interactive Tips
- Try different simulation speeds to see the impact
- Pause and observe the numbers at different time points
- Reset and start fresh to compare runs
- Use keyboard shortcuts (Space, P, R) for quick control

---

## CUSTOMIZATION EXAMPLES

### Change Energy Consumption Rate

**File**: `script.js` (around line 40)

**Current**:
```javascript
const energyRate = 5; // kWh per second
```

**Try These Values**:
- `2` - Slower, more realistic for actual AI training
- `5` - Default - Good for demonstration
- `10` - Faster, shows impact more quickly

### Change Carbon Intensity

**File**: `script.js` (around line 46)

**Current**:
```javascript
const carbonIntensity = 0.4; // kg CO2 per kWh (global average)
```

**Try These Values**:
- `0.05` - Renewable energy (very clean)
- `0.2` - Mixed energy sources
- `0.4` - Global average
- `0.8` - Coal-heavy energy mix

### Change Color Scheme

**File**: `styles.css` (lines 8-16)

**Current Theme** (Dark, Modern):
```css
--primary-color: #00d4ff;      /* Cyan - Technology */
--secondary-color: #ff6b6b;    /* Red - Danger */
--tertiary-color: #51cf66;     /* Green - Solutions */
--dark-bg: #0a0e27;            /* Very dark blue */
--card-bg: #1a1f3a;            /* Dark blue-purple */
```

**Eco-Friendly Theme**:
```css
--primary-color: #2ecc71;      /* Bright green */
--secondary-color: #e74c3c;    /* Red */
--tertiary-color: #27ae60;     /* Dark green */
--dark-bg: #0e4620;            /* Dark green */
--card-bg: #1a6b34;            /* Medium green */
```

**Tech Blue Theme**:
```css
--primary-color: #3498db;      /* Bright blue */
--secondary-color: #e74c3c;    /* Red */
--tertiary-color: #1abc9c;     /* Turquoise */
--dark-bg: #0c1e2e;            /* Dark blue */
--card-bg: #1a2a3a;            /* Medium blue */
```

### Adjust Temperature Sensitivity

**File**: `script.js` (around line 90)

**Current** (Simplified Model):
```javascript
simulationState.temperature = simulationState.emissions * 0.05;
```

**Options**:
- `* 0.02` - Temperature increases more slowly
- `* 0.05` - Default
- `* 0.1` - Temperature increases faster

### Modify Ice Melting Rate

**File**: `script.js` (around line 99)

**Current**:
```javascript
simulationState.waterLevel = Math.min(simulationState.temperature * 2, 100);
```

**Options**:
- `* 1` - Slower melting
- `* 2` - Default
- `* 4` - Faster melting

### Change Warning Thresholds

**File**: `script.js` (around line 110)

**Current**:
```javascript
if (simulationState.emissions > 0.001) newLevel = 1;  // Low
if (simulationState.emissions > 0.005) newLevel = 2;  // Moderate
if (simulationState.emissions > 0.01) newLevel = 3;   // High
if (simulationState.emissions > 0.02) newLevel = 4;   // Critical
```

**More Sensitive** (alerts trigger sooner):
```javascript
if (simulationState.emissions > 0.0005) newLevel = 1;
if (simulationState.emissions > 0.002) newLevel = 2;
if (simulationState.emissions > 0.005) newLevel = 3;
if (simulationState.emissions > 0.01) newLevel = 4;
```

### Modify Chart Update Frequency

**File**: `script.js` (around line 78)

**Current**:
```javascript
// Keep only last 30 data points
if (chartData.labels.length > 30) {
```

**Options**:
- `> 15` - Show fewer data points (zoomed view)
- `> 30` - Default
- `> 60` - Show more history

---

## SCIENCE FAIR DEMONSTRATION TIPS

### Setup
1. Open the application on your presentation device
2. Test controls work smoothly
3. Have talking points ready

### Presentation Flow
1. **Introduction** (1 min)
   - Explain what AI training is
   - Why we care about energy and emissions

2. **Live Demo** (5-10 min)
   - Start simulation at 1x speed
   - Let audience see real-time changes
   - Point out animations and their meanings

3. **Interactive Discussion** (5 min)
   - Ask audience about energy sources
   - Discuss renewable energy benefits
   - Show 2x and 3x speed to impact visualization

4. **Conclusion** (2 min)
   - Summarize key learnings
   - Discuss solutions and sustainability

### Talking Points
- **Energy**: "Data centers consume massive electricity to train AI models"
- **Emissions**: "Every kWh of energy produces CO₂ based on the energy source"
- **Climate**: "CO₂ traps heat in the atmosphere, causing global warming"
- **Solution**: "Using renewable energy can reduce environmental impact"
- **Impact**: "One AI model can produce as much CO₂ as one human in a lifetime"

### Make It Engaging
- Let visitors click buttons and adjust speed
- Ask "What happens if we use more renewable energy?"
- Show the numbers growing and discuss real-world implications
- Compare emissions to familiar things (car trips, flights, etc.)

---

## TROUBLESHOOTING

### Simulation doesn't start
- Click "Reset" first, then "Start"
- Check browser console for errors (F12)
- Ensure JavaScript is enabled

### Graph not showing
- Wait for simulation to run for a few seconds
- Check browser compatibility (Chrome, Firefox, Safari work best)
- Refresh the page

### Animations not visible
- Check if pause button was clicked
- Adjust speed slider to see changes faster
- Look at the warning bars - they update based on emissions

### Colors look different
- This is normal - monitor brightness and color calibration vary
- Colors are designed for readability in any lighting

---

## ADVANCED CUSTOMIZATION

### Add Multiple Simulations
Create scenarios with different carbon intensities to compare:

**Scenario A**: Renewable energy (0.05 kg CO₂/kWh)
**Scenario B**: Natural gas (0.4 kg CO₂/kWh)
**Scenario C**: Coal (0.8 kg CO₂/kWh)

### Extend the Graph
Show more data points or add more visualization elements

### Add Data Export
Save simulation results for analysis

### Create Comparisons
Show real-world emissions comparisons (cars, flights, people)

---

## FILES REFERENCE

| File | Purpose |
|------|---------|
| `index.html` | Main interface and structure |
| `styles.css` | Visual design and animations |
| `script.js` | Simulation logic and interactivity |
| `README.md` | Full documentation |
| `QUICKSTART.md` | This file - quick reference |

---

## KEYBOARD SHORTCUTS

| Key | Action |
|-----|--------|
| `Space` | Start simulation |
| `P` | Pause/Resume |
| `R` | Reset simulation |

---

**Enjoy the project! 🌍**

For more detailed information, see `README.md`
