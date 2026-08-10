import React from "react";
import { useNavigate } from "react-router-dom";

import {
  CloudRain,
  Waves,
  Users,
  Bell,
  Droplets,
  Wind,
  Thermometer,
  ShieldAlert,
  ArrowUpRight,
  MapPin,
  Activity,
  Radio,
} from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">

      {/* PAGE HEADER */}
      <div className="dashboard-hero">

        <div className="dashboard-hero-content">

          <div className="dashboard-eyebrow">
            <Activity size={14} />
            <span>LIVE DISASTER INTELLIGENCE</span>
          </div>

          <h1>Disaster Response Dashboard</h1>

          <p>
            Real-time monitoring, AI-powered risk prediction
            and emergency response intelligence.
          </p>

        </div>

        <div className="dashboard-location">

          <MapPin size={17} />

          <div>
            <span>Monitoring Region</span>
            <strong>Tamil Nadu</strong>
          </div>

        </div>

      </div>

      {/* SITUATION OVERVIEW */}
      <div className="dashboard-section-label">

        <div>
          <h2>Situation Overview</h2>
          <p>Current disaster response indicators</p>
        </div>

        <div className="live-indicator">
          <span></span>
          LIVE DATA
        </div>

      </div>

      {/* STAT CARDS */}
      <div className="stats-grid">

        {/* WEATHER */}
        <div
          className="stat-card"
          onClick={() => navigate("/weather")}
        >

          <div className="stat-card-top">

            <div className="stat-icon blue">
              <CloudRain size={24} />
            </div>

            <ArrowUpRight
              size={18}
              className="stat-arrow"
            />

          </div>

          <div className="stat-info">

            <span>Weather Status</span>

            <h2>Heavy Rain</h2>

            <p>
              <span className="positive-dot"></span>
              Live monitoring
            </p>

          </div>

        </div>

        {/* FLOOD */}
        <div
          className="stat-card danger-card"
          onClick={() => navigate("/flood-monitoring")}
        >

          <div className="stat-card-top">

            <div className="stat-icon red">
              <Waves size={24} />
            </div>

            <ArrowUpRight
              size={18}
              className="stat-arrow"
            />

          </div>

          <div className="stat-info">

            <span>Flood Risk</span>

            <h2>High</h2>

            <p>
              <span className="danger-dot"></span>
              AI prediction
            </p>

          </div>

        </div>

        {/* RELIEF CAMPS */}
        <div
          className="stat-card"
          onClick={() => navigate("/relief-camps")}
        >

          <div className="stat-card-top">

            <div className="stat-icon green">
              <Users size={24} />
            </div>

            <ArrowUpRight
              size={18}
              className="stat-arrow"
            />

          </div>

          <div className="stat-info">

            <span>Relief Camps</span>

            <h2>24</h2>

            <p>
              <span className="positive-dot"></span>
              Active camps
            </p>

          </div>

        </div>

        {/* EMERGENCY ALERTS */}
        <div
          className="stat-card"
          onClick={() => navigate("/emergency-alerts")}
        >

          <div className="stat-card-top">

            <div className="stat-icon cyan">
              <Bell size={24} />
            </div>

            <ArrowUpRight
              size={18}
              className="stat-arrow"
            />

          </div>

          <div className="stat-info">

            <span>Emergency Alerts</span>

            <h2>08</h2>

            <p>
              <span className="danger-dot"></span>
              Active alerts
            </p>

          </div>

        </div>

      </div>

      {/* ENVIRONMENTAL CONDITIONS */}
      <div className="dashboard-section-label">

        <div>
          <h2>Environmental Conditions</h2>
          <p>Live atmospheric monitoring</p>
        </div>

        <button
          type="button"
          className="text-action"
          onClick={() => navigate("/weather")}
        >
          <span>View Weather</span>
          <ArrowUpRight size={15} />
        </button>

      </div>

      {/* WEATHER CARDS */}
      <div className="weather-grid dashboard-weather-grid">

        <div className="weather-card">

          <div className="weather-card-icon">
            <CloudRain size={22} />
          </div>

          <div>
            <span>Rainfall</span>
            <h3>64 mm</h3>
            <small>Last 24 hours</small>
          </div>

        </div>

        <div className="weather-card">

          <div className="weather-card-icon">
            <Droplets size={22} />
          </div>

          <div>
            <span>Humidity</span>
            <h3>86%</h3>
            <small>Current level</small>
          </div>

        </div>

        <div className="weather-card">

          <div className="weather-card-icon">
            <Wind size={22} />
          </div>

          <div>
            <span>Wind Speed</span>
            <h3>28 km/h</h3>
            <small>Current wind</small>
          </div>

        </div>

        <div className="weather-card">

          <div className="weather-card-icon">
            <Thermometer size={22} />
          </div>

          <div>
            <span>Temperature</span>
            <h3>27°C</h3>
            <small>Current temperature</small>
          </div>

        </div>

      </div>

      {/* EMERGENCY COMMAND CENTER */}
      <div className="dashboard-section-label command-title">

        <div>
          <h2>Emergency Command Center</h2>
          <p>AI risk assessment and response operations</p>
        </div>

        <div className="command-status">
          <Radio size={14} />
          <span>RESPONSE ACTIVE</span>
        </div>

      </div>

      {/* COMMAND PANELS */}
      <div className="dashboard-columns">

        {/* FLOOD RISK PANEL */}
        <div className="dashboard-panel risk-dashboard-panel">

          <div className="panel-heading">

            <div>

              <div className="panel-heading-label">
                <span className="panel-status-dot"></span>
                <span>AI RISK ENGINE</span>
              </div>

              <h2>Flood Risk Overview</h2>

              <p>
                Current AI-based flood probability assessment
              </p>

            </div>

            <span className="badge high">
              HIGH
            </span>

          </div>

          <div className="risk-box">

            <div className="risk-circle">

              <div>
                <strong>78</strong>
                <span>%</span>
              </div>

              <small>RISK</small>

            </div>

            <div className="risk-content">

              <h3>High Flood Risk</h3>

              <p>
                Increased flood probability detected
                across vulnerable monitoring zones.
              </p>

              <div className="risk-progress">

                <div
                  className="risk-progress-value"
                  style={{ width: "78%" }}
                ></div>

              </div>

              <small>
                Prediction confidence: 91%
              </small>

            </div>

          </div>

          <button
            type="button"
            className="panel-button"
            onClick={() => navigate("/flood-monitoring")}
          >
            <span>Open Flood Monitoring</span>
            <ArrowUpRight size={16} />
          </button>

        </div>

        {/* EMERGENCY STATUS PANEL */}
        <div className="dashboard-panel">

          <div className="panel-heading">

            <div>

              <div className="panel-heading-label">
                <span className="panel-status-dot green"></span>
                <span>RESPONSE OPERATIONS</span>
              </div>

              <h2>Emergency Status</h2>

              <p>
                Current field response activities
              </p>

            </div>

            <span className="badge active">
              ACTIVE
            </span>

          </div>

          {/* EMERGENCY ITEM 1 */}
          <div className="emergency-item">

            <div className="emergency-icon">
              <ShieldAlert size={20} />
            </div>

            <div className="emergency-item-content">

              <h3>High Flood Risk</h3>

              <p>
                River water level rising
              </p>

            </div>

            <span className="emergency-time">
              NOW
            </span>

          </div>

          {/* EMERGENCY ITEM 2 */}
          <div className="emergency-item">

            <div className="emergency-icon">
              <CloudRain size={20} />
            </div>

            <div className="emergency-item-content">

              <h3>Heavy Rainfall</h3>

              <p>
                Continuous rainfall detected
              </p>

            </div>

            <span className="emergency-time">
              5m
            </span>

          </div>

          {/* EMERGENCY ITEM 3 */}
          <div className="emergency-item">

            <div className="emergency-icon">
              <Users size={20} />
            </div>

            <div className="emergency-item-content">

              <h3>Rescue Teams</h3>

              <p>
                12 teams currently active
              </p>

            </div>

            <span className="emergency-time">
              LIVE
            </span>

          </div>

          <button
            type="button"
            className="panel-button secondary-button"
            onClick={() => navigate("/rescue-management")}
          >
            <span>Open Rescue Management</span>
            <ArrowUpRight size={16} />
          </button>

        </div>

      </div>

      {/* FOOTER STATUS */}
      <div className="dashboard-footer">

        <div>
          <span className="footer-dot"></span>
          <span>VARUNA AI Intelligence Engine</span>
        </div>

        <span>
          Monitoring active • Data synchronized
        </span>

      </div>

    </div>
  );
}

export default Dashboard;