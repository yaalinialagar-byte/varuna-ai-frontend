import React from "react";
import {
  ShieldAlert,
  Home,
  MapPin,
  Users,
  Package,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

function DamageAssessment() {
  return (
    <div className="page-container">

      {/* HEADER */}
      <div className="page-header">

        <div>
          <h1>Damage Assessment</h1>

          <p>
            AI-assisted disaster damage assessment and recovery monitoring
          </p>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          Assessment Active
        </div>

      </div>


      {/* DAMAGE STATISTICS */}
      <div className="rescue-grid">

        <div className="rescue-card">

          <div className="rescue-icon">
            <Home size={24} />
          </div>

          <span>Affected Buildings</span>

          <h2>186</h2>

          <small>Reported damages</small>

        </div>


        <div className="rescue-card">

          <div className="rescue-icon">
            <Users size={24} />
          </div>

          <span>Affected People</span>

          <h2>2,840</h2>

          <small>People impacted</small>

        </div>


        <div className="rescue-card">

          <div className="rescue-icon">
            <Package size={24} />
          </div>

          <span>Estimated Loss</span>

          <h2>₹18.4L</h2>

          <small>Current estimate</small>

        </div>


        <div className="rescue-card">

          <div className="rescue-icon">
            <AlertTriangle size={24} />
          </div>

          <span>Critical Areas</span>

          <h2>09</h2>

          <small>Immediate assessment</small>

        </div>

      </div>


      {/* DAMAGE REPORTS */}
      <div className="panel">

        <div className="panel-header">

          <div>
            <h2>Recent Damage Reports</h2>

            <p className="chart-subtitle">
              District-wise disaster damage assessment
            </p>
          </div>

          <span>LIVE</span>

        </div>


        <div className="rescue-operation">

          <div className="operation-icon">
            <MapPin size={22} />
          </div>

          <div className="operation-info">

            <strong>Zone A</strong>

            <p>
              64 buildings affected • 920 people impacted
            </p>

          </div>

          <div className="operation-status">
            Critical
          </div>

        </div>


        <div className="rescue-operation">

          <div className="operation-icon">
            <MapPin size={22} />
          </div>

          <div className="operation-info">

            <strong>Zone B</strong>

            <p>
              48 buildings affected • 680 people impacted
            </p>

          </div>

          <div className="operation-status">
            High
          </div>

        </div>


        <div className="rescue-operation">

          <div className="operation-icon">
            <MapPin size={22} />
          </div>

          <div className="operation-info">

            <strong>Zone C</strong>

            <p>
              31 buildings affected • 420 people impacted
            </p>

          </div>

          <div className="operation-status">
            Medium
          </div>

        </div>

      </div>


      {/* DAMAGE CATEGORIES */}
      <div className="panel">

        <div className="panel-header">

          <div>
            <h2>Damage Categories</h2>

            <p className="chart-subtitle">
              Current infrastructure impact
            </p>
          </div>

          <span>ASSESSMENT</span>

        </div>


        <div className="weather-grid">

          <div className="weather-card">

            <Home size={22} />

            <div>
              <span>Buildings</span>
              <h3>186 Affected</h3>
            </div>

          </div>


          <div className="weather-card">

            <Package size={22} />

            <div>
              <span>Infrastructure</span>
              <h3>42 Affected</h3>
            </div>

          </div>


          <div className="weather-card">

            <ShieldAlert size={22} />

            <div>
              <span>Critical Damage</span>
              <h3>38 Cases</h3>
            </div>

          </div>


          <div className="weather-card">

            <TrendingUp size={22} />

            <div>
              <span>Recovery Progress</span>
              <h3>34%</h3>
            </div>

          </div>

        </div>

      </div>


      {/* AI DAMAGE ANALYSIS */}
      <div className="panel">

        <div className="panel-header">

          <div>
            <h2>AI Damage Analysis</h2>

            <p className="chart-subtitle">
              Intelligent damage severity assessment
            </p>
          </div>

          <span>AI POWERED</span>

        </div>


        <div className="flood-message">

          <ShieldAlert size={30} />

          <div>

            <h3>High Impact Zone Detected</h3>

            <p>
              AI analysis indicates significant infrastructure
              damage in Zone A. Rescue operations and recovery
              resources should be prioritized for this area.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DamageAssessment;