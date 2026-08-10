import React from "react";
import {
  Map,
  MapPin,
  AlertTriangle,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* LEAFLET MARKER FIX */

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

/* RISK LOCATIONS */

const riskLocations = [
  {
    name: "Zone A",
    position: [10.7905, 78.7047],
    risk: "High",
    population: "48,200",
    rainfall: "82 mm",
    waterLevel: "8.4 m",
  },
  {
    name: "Zone B",
    position: [10.8505, 78.6928],
    risk: "Medium",
    population: "31,600",
    rainfall: "56 mm",
    waterLevel: "6.8 m",
  },
  {
    name: "Zone C",
    position: [10.9601, 78.0766],
    risk: "Low",
    population: "22,400",
    rainfall: "28 mm",
    waterLevel: "5.2 m",
  },
  {
    name: "Zone D",
    position: [11.0168, 76.9558],
    risk: "High",
    population: "52,100",
    rainfall: "91 mm",
    waterLevel: "8.7 m",
  },
];

/* COLORED MARKERS */

const createRiskIcon = (color) =>
  new L.DivIcon({
    className: "custom-risk-marker",
    html: `
      <div
        style="
          width:22px;
          height:22px;
          background:${color};
          border:3px solid white;
          border-radius:50%;
          box-shadow:0 2px 8px rgba(0,0,0,0.35);
        "
      ></div>
    `,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    popupAnchor: [0, -11],
  });

const riskIcons = {
  High: createRiskIcon("#dc2626"),
  Medium: createRiskIcon("#f59e0b"),
  Low: createRiskIcon("#16a34a"),
};

function RiskMap() {
  return (
    <div className="risk-map-page">

      {/* HEADER */}

      <div className="page-header">
        <div>
          <h1>Risk Map</h1>
          <p>
            District-wise disaster risk intelligence
            and vulnerability monitoring
          </p>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          Live Risk Data
        </div>
      </div>

      {/* RISK SUMMARY */}

      <div className="risk-summary-grid">

        <div className="risk-summary-card">
          <div className="risk-summary-icon high">
            <AlertTriangle size={24} />
          </div>

          <div>
            <span>High Risk Zones</span>
            <h2>09</h2>
            <small>Immediate attention</small>
          </div>
        </div>

        <div className="risk-summary-card">
          <div className="risk-summary-icon medium">
            <TrendingUp size={24} />
          </div>

          <div>
            <span>Medium Risk Zones</span>
            <h2>17</h2>
            <small>Under monitoring</small>
          </div>
        </div>

        <div className="risk-summary-card">
          <div className="risk-summary-icon safe">
            <ShieldCheck size={24} />
          </div>

          <div>
            <span>Low Risk Zones</span>
            <h2>26</h2>
            <small>Normal condition</small>
          </div>
        </div>

        <div className="risk-summary-card">
          <div className="risk-summary-icon">
            <Map size={24} />
          </div>

          <div>
            <span>Total Zones</span>
            <h2>52</h2>
            <small>Monitored areas</small>
          </div>
        </div>

      </div>

      {/* INTERACTIVE MAP */}

      <div className="risk-panel">

        <div className="risk-panel-header">
          <div>
            <h2>Live Disaster Risk Map</h2>
            <p>
              Click a marker to view district risk information
            </p>
          </div>

          <span>AI ANALYSIS</span>
        </div>

        <div className="risk-map-container">

          <MapContainer
            center={[10.8505, 78.6928]}
            zoom={7}
            scrollWheelZoom={true}
            style={{
              height: "100%",
              width: "100%",
            }}
          >

            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {riskLocations.map((location) => (
              <Marker
                key={location.name}
                position={location.position}
                icon={riskIcons[location.risk]}
              >
                <Popup>
                  <div className="risk-popup">

                    <h3>{location.name}</h3>

                    <p>
                      <strong>Risk:</strong>{" "}
                      {location.risk}
                    </p>

                    <p>
                      <strong>Population:</strong>{" "}
                      {location.population}
                    </p>

                    <p>
                      <strong>Rainfall:</strong>{" "}
                      {location.rainfall}
                    </p>

                    <p>
                      <strong>Water Level:</strong>{" "}
                      {location.waterLevel}
                    </p>

                  </div>
                </Popup>
              </Marker>
            ))}

          </MapContainer>

        </div>

        {/* LEGEND */}

        <div className="risk-map-legend">

          <strong>Risk Level</strong>

          <span>
            <i className="legend-dot high-dot"></i>
            High Risk
          </span>

          <span>
            <i className="legend-dot medium-dot"></i>
            Medium Risk
          </span>

          <span>
            <i className="legend-dot low-dot"></i>
            Low Risk
          </span>

        </div>

      </div>

      {/* DISTRICT RISK STATUS */}

      <div className="risk-panel">

        <div className="risk-panel-header">
          <div>
            <h2>District Risk Status</h2>
            <p>Current risk classification</p>
          </div>

          <span>LIVE</span>
        </div>

        <div className="district-risk-list">

          {riskLocations.map((location) => (
            <div
              className="district-risk-item"
              key={location.name}
            >

              <div className="district-risk-icon">
                <MapPin size={22} />
              </div>

              <div className="district-risk-info">
                <strong>{location.name}</strong>

                <p>
                  Flood Risk: {location.risk}
                  {" • "}
                  Population: {location.population}
                </p>
              </div>

              <div
                className={`district-risk-status ${location.risk.toLowerCase()}`}
              >
                {location.risk}
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* AI RISK PREDICTION */}

      <div className="risk-panel">

        <div className="risk-panel-header">
          <div>
            <h2>AI Risk Prediction</h2>
            <p>Predictive disaster intelligence</p>
          </div>

          <span>AI POWERED</span>
        </div>

        <div className="ai-risk-message">

          <div className="ai-risk-icon">
            <TrendingUp size={30} />
          </div>

          <div>
            <h3>Risk Increasing in Zone A</h3>

            <p>
              Current rainfall and river-level trends indicate
              that the flood risk may increase during the next
              monitoring period.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default RiskMap;