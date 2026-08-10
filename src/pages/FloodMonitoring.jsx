import React from "react";
import {
  Waves,
  Droplets,
  CloudRain,
  AlertTriangle,
  TrendingUp,
  MapPin,
} from "lucide-react";

function FloodMonitoring() {
  return (
    <div className="flood-page">

      {/* HEADER */}
      <div className="page-header">
        <div>
          <h1>Flood Monitoring</h1>
          <p>
            Real-time river levels, rainfall and flood risk monitoring
          </p>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          Live Monitoring
        </div>
      </div>

      {/* FLOOD STATISTICS */}
      <div className="flood-stats-grid">

        <div className="flood-stat-card">
          <div className="flood-stat-icon">
            <Waves size={24} />
          </div>

          <div>
            <span>River Water Level</span>
            <h2>8.4 m</h2>
            <small>Danger level: 9.0 m</small>
          </div>
        </div>

        <div className="flood-stat-card">
          <div className="flood-stat-icon">
            <CloudRain size={24} />
          </div>

          <div>
            <span>Rainfall</span>
            <h2>64 mm</h2>
            <small>Last 24 hours</small>
          </div>
        </div>

        <div className="flood-stat-card">
          <div className="flood-stat-icon">
            <TrendingUp size={24} />
          </div>

          <div>
            <span>Flood Risk</span>
            <h2>High</h2>
            <small>AI prediction</small>
          </div>
        </div>

        <div className="flood-stat-card">
          <div className="flood-stat-icon">
            <AlertTriangle size={24} />
          </div>

          <div>
            <span>Warning Level</span>
            <h2>Alert</h2>
            <small>Immediate monitoring</small>
          </div>
        </div>

      </div>

      {/* RIVER MONITORING */}
      <div className="flood-panel">

        <div className="flood-panel-header">
          <div>
            <h2>River Level Monitoring</h2>
            <p>
              Current water levels across monitored locations
            </p>
          </div>

          <span className="flood-live-badge">LIVE</span>
        </div>

        <div className="river-list">

          <div className="river-item">
            <div className="river-icon">
              <MapPin size={22} />
            </div>

            <div className="river-info">
              <strong>River Zone A</strong>
              <p>
                Current Level: 8.4 m • Danger Level: 9.0 m
              </p>
            </div>

            <div className="river-status high">
              High
            </div>
          </div>

          <div className="river-item">
            <div className="river-icon">
              <MapPin size={22} />
            </div>

            <div className="river-info">
              <strong>River Zone B</strong>
              <p>
                Current Level: 6.8 m • Danger Level: 8.0 m
              </p>
            </div>

            <div className="river-status normal">
              Normal
            </div>
          </div>

          <div className="river-item">
            <div className="river-icon">
              <MapPin size={22} />
            </div>

            <div className="river-info">
              <strong>River Zone C</strong>
              <p>
                Current Level: 7.6 m • Danger Level: 8.5 m
              </p>
            </div>

            <div className="river-status warning">
              Warning
            </div>
          </div>

        </div>
      </div>

      {/* AI FLOOD RISK */}
      <div className="flood-panel">

        <div className="flood-panel-header">
          <div>
            <h2>AI Flood Risk Analysis</h2>
            <p>
              Predictive flood intelligence
            </p>
          </div>

          <span className="flood-ai-badge">
            AI ANALYSIS
          </span>
        </div>

        <div className="flood-risk-message">

          <div className="flood-risk-icon">
            <TrendingUp size={30} />
          </div>

          <div>
            <h3>High Flood Risk Detected</h3>

            <p>
              Rising river levels combined with heavy rainfall
              indicate an increased probability of flooding.
              Emergency teams should remain on standby.
            </p>
          </div>

        </div>
      </div>

      {/* SENSOR STATUS */}
      <div className="flood-panel">

        <div className="flood-panel-header">
          <div>
            <h2>Monitoring Sensors</h2>
            <p>
              Live sensor connectivity
            </p>
          </div>

          <span className="flood-online-badge">
            ONLINE
          </span>
        </div>

        <div className="sensor-grid">

          <div className="sensor-card">
            <Waves size={22} />

            <div>
              <span>River Sensors</span>
              <h3>18 Online</h3>
            </div>
          </div>

          <div className="sensor-card">
            <Droplets size={22} />

            <div>
              <span>Water Sensors</span>
              <h3>24 Online</h3>
            </div>
          </div>

          <div className="sensor-card">
            <CloudRain size={22} />

            <div>
              <span>Rain Gauges</span>
              <h3>16 Online</h3>
            </div>
          </div>

          <div className="sensor-card">
            <AlertTriangle size={22} />

            <div>
              <span>Warning Sensors</span>
              <h3>12 Active</h3>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default FloodMonitoring;