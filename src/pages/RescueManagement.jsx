import React from "react";
import {
  Users,
  ShieldAlert,
  MapPin,
  Truck,
  Radio,
  CheckCircle,
} from "lucide-react";

const rescueTeams = [
  {
    name: "Team Alpha",
    location: "Dindigul",
    members: "12 Members",
    status: "Active",
    icon: Users,
  },
  {
    name: "Team Bravo",
    location: "Vedasandur",
    members: "8 Members",
    status: "Standby",
    icon: Users,
  },
  {
    name: "Team Charlie",
    location: "Palani",
    members: "10 Members",
    status: "Active",
    icon: Users,
  },
];

const operations = [
  {
    title: "Flood Evacuation",
    location: "Low-lying areas",
    team: "Team Alpha",
    status: "High Priority",
    statusClass: "high",
    icon: ShieldAlert,
  },
  {
    title: "Rescue Boat Deployment",
    location: "River monitoring zone",
    team: "Team Charlie",
    status: "In Progress",
    statusClass: "warning",
    icon: Truck,
  },
  {
    title: "Emergency Communication",
    location: "District Control Room",
    team: "Team Bravo",
    status: "Completed",
    statusClass: "normal",
    icon: Radio,
  },
];

function RescueManagement() {
  return (
    <div className="rescue-management-page">

      {/* HEADER */}
      <div className="page-header">
        <div>
          <h1>Rescue Management</h1>

          <p>
            Manage rescue teams, emergency operations and field response
          </p>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          Rescue Operations Active
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="rescue-grid">

        <div className="rescue-card">
          <div className="rescue-icon">
            <Users size={24} />
          </div>

          <div>
            <span>Active Teams</span>
            <h2>12</h2>
            <small>Teams deployed</small>
          </div>
        </div>

        <div className="rescue-card">
          <div className="rescue-icon">
            <ShieldAlert size={24} />
          </div>

          <div>
            <span>Active Operations</span>
            <h2>08</h2>
            <small>Current operations</small>
          </div>
        </div>

        <div className="rescue-card">
          <div className="rescue-icon">
            <MapPin size={24} />
          </div>

          <div>
            <span>Rescue Zones</span>
            <h2>06</h2>
            <small>Monitored zones</small>
          </div>
        </div>

        <div className="rescue-card">
          <div className="rescue-icon">
            <CheckCircle size={24} />
          </div>

          <div>
            <span>Completed</span>
            <h2>24</h2>
            <small>Successful operations</small>
          </div>
        </div>

      </div>

      {/* RESCUE TEAMS */}
      <div className="panel">

        <div className="panel-header">
          <div>
            <h2>Rescue Teams</h2>

            <p className="chart-subtitle">
              Current field deployment status
            </p>
          </div>

          <span>LIVE</span>
        </div>

        <div className="district-risk-list">

          {rescueTeams.map((team) => {
            const Icon = team.icon;

            return (
              <div className="district-risk-item" key={team.name}>

                <div className="district-risk-icon">
                  <Icon size={21} />
                </div>

                <div className="district-risk-info">
                  <strong>{team.name}</strong>

                  <p>
                    {team.location} • {team.members}
                  </p>
                </div>

                <div
                  className={`district-risk-status ${
                    team.status === "Active"
                      ? "low"
                      : "medium"
                  }`}
                >
                  {team.status}
                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* OPERATIONS */}
      <div className="panel">

        <div className="panel-header">
          <div>
            <h2>Emergency Operations</h2>

            <p className="chart-subtitle">
              Current rescue and response activities
            </p>
          </div>

          <span>OPERATIONS</span>
        </div>

        <div>

          {operations.map((operation) => {
            const Icon = operation.icon;

            return (
              <div
                className="rescue-operation"
                key={operation.title}
              >

                <div className="operation-icon">
                  <Icon size={21} />
                </div>

                <div className="operation-info">
                  <strong>{operation.title}</strong>

                  <p>
                    {operation.location} • {operation.team}
                  </p>
                </div>

                <div
                  className={`operation-status ${operation.statusClass}`}
                >
                  {operation.status}
                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* RESPONSE STATUS */}
      <div className="panel">

        <div className="panel-header">
          <div>
            <h2>Field Response Status</h2>

            <p className="chart-subtitle">
              Overall emergency response readiness
            </p>
          </div>

          <span>READY</span>
        </div>

        <div className="flood-message">

          <CheckCircle size={30} />

          <div>
            <h3>Response Teams Ready</h3>

            <p>
              Rescue teams are actively monitoring assigned zones.
              Emergency resources and communication channels are operational.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default RescueManagement;