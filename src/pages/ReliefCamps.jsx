import React from "react";
import {
  Tent,
  Users,
  BedDouble,
  MapPin,
  Utensils,
  ShieldCheck,
} from "lucide-react";

function ReliefCamps() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Relief Camps</h1>
          <p>
            Monitor relief camps, capacity and displaced population
          </p>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          Camps Operational
        </div>
      </div>

      <div className="rescue-grid">
        <div className="rescue-card">
          <div className="rescue-icon">
            <Tent size={24} />
          </div>
          <span>Active Camps</span>
          <h2>24</h2>
          <small>Currently operational</small>
        </div>

        <div className="rescue-card">
          <div className="rescue-icon">
            <Users size={24} />
          </div>
          <span>People Sheltered</span>
          <h2>8,420</h2>
          <small>Currently accommodated</small>
        </div>

        <div className="rescue-card">
          <div className="rescue-icon">
            <BedDouble size={24} />
          </div>
          <span>Available Beds</span>
          <h2>2,180</h2>
          <small>Remaining capacity</small>
        </div>

        <div className="rescue-card">
          <div className="rescue-icon">
            <Utensils size={24} />
          </div>
          <span>Food Stock</span>
          <h2>18,600</h2>
          <small>Meals available</small>
        </div>
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h2>Active Relief Camps</h2>
            <p className="chart-subtitle">
              Current camp capacity and operational status
            </p>
          </div>
          <span>LIVE</span>
        </div>

        <div className="rescue-operation">
          <div className="operation-icon">
            <MapPin size={22} />
          </div>

          <div className="operation-info">
            <strong>Government School Relief Camp</strong>
            <p>
              Zone A • 840 / 1,000 people • 160 beds available
            </p>
          </div>

          <div className="operation-status">
            Active
          </div>
        </div>

        <div className="rescue-operation">
          <div className="operation-icon">
            <MapPin size={22} />
          </div>

          <div className="operation-info">
            <strong>Community Hall Relief Camp</strong>
            <p>
              Zone B • 520 / 750 people • 230 beds available
            </p>
          </div>

          <div className="operation-status">
            Active
          </div>
        </div>

        <div className="rescue-operation">
          <div className="operation-icon">
            <MapPin size={22} />
          </div>

          <div className="operation-info">
            <strong>Municipal Relief Centre</strong>
            <p>
              Zone C • 310 / 600 people • 290 beds available
            </p>
          </div>

          <div className="operation-status">
            Available
          </div>
        </div>
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h2>Camp Services</h2>
            <p className="chart-subtitle">
              Essential services availability
            </p>
          </div>
          <span>MONITORING</span>
        </div>

        <div className="weather-grid">
          <div className="weather-card">
            <Utensils size={22} />
            <div>
              <span>Food Distribution</span>
              <h3>Operational</h3>
            </div>
          </div>

          <div className="weather-card">
            <BedDouble size={22} />
            <div>
              <span>Accommodation</span>
              <h3>82% Capacity</h3>
            </div>
          </div>

          <div className="weather-card">
            <ShieldCheck size={22} />
            <div>
              <span>Medical Support</span>
              <h3>Available</h3>
            </div>
          </div>

          <div className="weather-card">
            <Users size={22} />
            <div>
              <span>Volunteers</span>
              <h3>146 Active</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h2>AI Camp Recommendation</h2>
            <p className="chart-subtitle">
              Intelligent shelter capacity prediction
            </p>
          </div>
          <span>AI POWERED</span>
        </div>

        <div className="flood-message">
          <Tent size={30} />

          <div>
            <h3>Additional Capacity Recommended</h3>
            <p>
              Based on current flood risk and evacuation trends,
              additional shelter capacity may be required in
              Zone A during the next response period.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReliefCamps;