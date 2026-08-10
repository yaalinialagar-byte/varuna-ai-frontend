import React from "react";
import {
  CloudRain,
  Droplets,
  Wind,
  Thermometer,
  Cloud,
  Sun,
  AlertTriangle,
  Gauge,
} from "lucide-react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const rainfallData = [
  { time: "6 AM", rainfall: 12 },
  { time: "9 AM", rainfall: 24 },
  { time: "12 PM", rainfall: 38 },
  { time: "3 PM", rainfall: 52 },
  { time: "6 PM", rainfall: 64 },
  { time: "9 PM", rainfall: 58 },
];

function Weather() {
  return (
    <div className="weather-page">

      {/* HEADER */}
      <div className="page-header">
        <div>
          <h1>Weather Monitoring</h1>
          <p>
            Real-time weather conditions and rainfall analysis
          </p>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          Live Weather
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="rescue-grid">

        <div className="rescue-card">
          <div className="rescue-icon">
            <Thermometer size={24} />
          </div>
          <div>
            <span>Temperature</span>
            <h2>27°C</h2>
            <small>Current temperature</small>
          </div>
        </div>

        <div className="rescue-card">
          <div className="rescue-icon">
            <Droplets size={24} />
          </div>
          <div>
            <span>Humidity</span>
            <h2>86%</h2>
            <small>Current humidity</small>
          </div>
        </div>

        <div className="rescue-card">
          <div className="rescue-icon">
            <CloudRain size={24} />
          </div>
          <div>
            <span>Rainfall</span>
            <h2>64 mm</h2>
            <small>Last 24 hours</small>
          </div>
        </div>

        <div className="rescue-card">
          <div className="rescue-icon">
            <Wind size={24} />
          </div>
          <div>
            <span>Wind Speed</span>
            <h2>28 km/h</h2>
            <small>Current wind</small>
          </div>
        </div>

      </div>

      {/* CURRENT WEATHER */}
      <div className="panel">

        <div className="panel-header">
          <div>
            <h2>Current Weather</h2>
            <p className="chart-subtitle">
              Live atmospheric conditions
            </p>
          </div>

          <span>LIVE</span>
        </div>

        <div className="weather-grid">

          <div className="weather-card">
            <CloudRain size={24} />
            <div>
              <span>Condition</span>
              <h3>Heavy Rain</h3>
            </div>
          </div>

          <div className="weather-card">
            <Droplets size={24} />
            <div>
              <span>Precipitation</span>
              <h3>85%</h3>
            </div>
          </div>

          <div className="weather-card">
            <Wind size={24} />
            <div>
              <span>Wind Direction</span>
              <h3>NE</h3>
            </div>
          </div>

          <div className="weather-card">
            <Gauge size={24} />
            <div>
              <span>Pressure</span>
              <h3>1008 hPa</h3>
            </div>
          </div>

        </div>

      </div>

      {/* RAINFALL ANALYSIS */}
      <div className="panel">

        <div className="panel-header">
          <div>
            <h2>Rainfall Analysis</h2>
            <p className="chart-subtitle">
              Recent rainfall intensity
            </p>
          </div>

          <span>LIVE DATA</span>
        </div>

        <div style={{ width: "100%", height: 320 }}>

          <ResponsiveContainer width="100%" height="100%">

            <AreaChart data={rainfallData}>

              <CartesianGrid
                strokeDasharray="3 3"
                opacity={0.2}
              />

              <XAxis dataKey="time" />

              <YAxis />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="rainfall"
                stroke="#38bdf8"
                fill="#164e63"
                strokeWidth={3}
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* WEATHER ALERT */}
      <div className="panel">

        <div className="panel-header">
          <div>
            <h2>Weather Alert</h2>
            <p className="chart-subtitle">
              Current weather risk notification
            </p>
          </div>

          <span className="weather-alert-badge">
            ALERT
          </span>
        </div>

        <div className="weather-alert">

          <div className="weather-alert-icon">
            <AlertTriangle size={28} />
          </div>

          <div>
            <h3>Heavy Rainfall Detected</h3>

            <p>
              Continuous rainfall has been detected in
              monitored areas. Flood monitoring teams should
              remain on standby.
            </p>
          </div>

        </div>

      </div>

      {/* WEATHER OUTLOOK */}
      <div className="panel">

        <div className="panel-header">
          <div>
            <h2>Weather Outlook</h2>
            <p className="chart-subtitle">
              Expected weather conditions
            </p>
          </div>

          <span>FORECAST</span>
        </div>

        <div className="weather-grid">

          <div className="weather-card">
            <CloudRain size={24} />
            <div>
              <span>Next 3 Hours</span>
              <h3>Rain</h3>
            </div>
          </div>

          <div className="weather-card">
            <Cloud size={24} />
            <div>
              <span>Next 6 Hours</span>
              <h3>Cloudy</h3>
            </div>
          </div>

          <div className="weather-card">
            <Sun size={24} />
            <div>
              <span>Tomorrow</span>
              <h3>Partly Cloudy</h3>
            </div>
          </div>

          <div className="weather-card">
            <Thermometer size={24} />
            <div>
              <span>Expected Temp</span>
              <h3>29°C</h3>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Weather;