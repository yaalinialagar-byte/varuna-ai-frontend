import React from "react";
import {
  Bell,
  AlertTriangle,
  CloudRain,
  Waves,
  ShieldAlert,
  Users,
} from "lucide-react";

function EmergencyAlerts() {
  return (
    <div className="page-container">

      {/* HEADER */}
      <div className="page-header">

        <div>
          <h1>Emergency Alerts</h1>

          <p>
            Monitor and manage active disaster warning notifications
          </p>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          Alert System Active
        </div>

      </div>


      {/* ALERT STATISTICS */}
      <div className="rescue-grid">

        <div className="rescue-card">

          <div className="rescue-icon">
            <Bell size={24} />
          </div>

          <span>Active Alerts</span>

          <h2>08</h2>

          <small>Currently active</small>

        </div>


        <div className="rescue-card">

          <div className="rescue-icon">
            <AlertTriangle size={24} />
          </div>

          <span>Critical Alerts</span>

          <h2>03</h2>

          <small>Immediate attention</small>

        </div>


        <div className="rescue-card">

          <div className="rescue-icon">
            <CloudRain size={24} />
          </div>

          <span>Weather Alerts</span>

          <h2>04</h2>

          <small>Rainfall warnings</small>

        </div>


        <div className="rescue-card">

          <div className="rescue-icon">
            <Waves size={24} />
          </div>

          <span>Flood Alerts</span>

          <h2>05</h2>

          <small>Flood warnings</small>

        </div>

      </div>


      {/* ACTIVE ALERTS */}
      <div className="panel">

        <div className="panel-header">

          <div>
            <h2>Active Emergency Alerts</h2>

            <p className="chart-subtitle">
              Real-time disaster warning notifications
            </p>
          </div>

          <span>LIVE</span>

        </div>


        <div className="rescue-operation">

          <div className="operation-icon">
            <ShieldAlert size={22} />
          </div>

          <div className="operation-info">

            <strong>High Flood Risk Alert</strong>

            <p>
              River water level rising rapidly in Zone A
            </p>

          </div>

          <div className="operation-status">
            Critical
          </div>

        </div>


        <div className="rescue-operation">

          <div className="operation-icon">
            <CloudRain size={22} />
          </div>

          <div className="operation-info">

            <strong>Heavy Rainfall Warning</strong>

            <p>
              Continuous rainfall expected for the next 6 hours
            </p>

          </div>

          <div className="operation-status">
            Active
          </div>

        </div>


        <div className="rescue-operation">

          <div className="operation-icon">
            <Waves size={22} />
          </div>

          <div className="operation-info">

            <strong>River Level Warning</strong>

            <p>
              Water level approaching danger mark
            </p>

          </div>

          <div className="operation-status">
            Active
          </div>

        </div>


        <div className="rescue-operation">

          <div className="operation-icon">
            <Users size={22} />
          </div>

          <div className="operation-info">

            <strong>Evacuation Advisory</strong>

            <p>
              Residents in vulnerable areas advised to move to relief camps
            </p>

          </div>

          <div className="operation-status">
            Active
          </div>

        </div>

      </div>


      {/* ALERT ANALYSIS */}
      <div className="panel">

        <div className="panel-header">

          <div>
            <h2>AI Alert Analysis</h2>

            <p className="chart-subtitle">
              Intelligent disaster warning assessment
            </p>
          </div>

          <span>AI POWERED</span>

        </div>


        <div className="flood-message">

          <AlertTriangle size={30} />

          <div>

            <h3>Critical Alert Priority Detected</h3>

            <p>
              Current river levels, rainfall intensity and
              affected population indicate that Zone A requires
              immediate emergency response attention.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EmergencyAlerts;