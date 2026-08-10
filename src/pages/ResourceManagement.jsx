import React from "react";
import {
  Package,
  Droplets,
  Utensils,
  HeartPulse,
  Truck,
  AlertTriangle,
  CheckCircle,
  Activity,
  Boxes,
  ShieldCheck,
} from "lucide-react";

function ResourceManagement() {
  return (
    <div>

      {/* HEADER */}
      <div className="page-header">

        <div>
          <h1>Resource Management</h1>

          <p>
            Monitor emergency resources, supplies and field distribution
          </p>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          Resources Operational
        </div>

      </div>


      {/* RESOURCE STATISTICS */}
      <div className="rescue-grid">

        <div className="rescue-card">

          <div className="rescue-icon">
            <Package size={24} />
          </div>

          <span>Total Resources</span>

          <h2>18,640</h2>

          <small>Items currently tracked</small>

        </div>


        <div className="rescue-card">

          <div className="rescue-icon">
            <Droplets size={24} />
          </div>

          <span>Water Supply</span>

          <h2>12,800</h2>

          <small>Litres available</small>

        </div>


        <div className="rescue-card">

          <div className="rescue-icon">
            <Utensils size={24} />
          </div>

          <span>Food Stock</span>

          <h2>18,600</h2>

          <small>Meals available</small>

        </div>


        <div className="rescue-card">

          <div className="rescue-icon">
            <HeartPulse size={24} />
          </div>

          <span>Medical Supplies</span>

          <h2>4,280</h2>

          <small>Items available</small>

        </div>

      </div>


      {/* RESOURCE INVENTORY */}
      <div className="panel">

        <div className="panel-header">

          <div>

            <h2>Resource Inventory</h2>

            <p className="chart-subtitle">
              Current emergency stock levels
            </p>

          </div>

          <span>LIVE</span>

        </div>


        <div className="weather-grid">

          <div className="weather-card">

            <Droplets size={22} />

            <div>

              <span>Drinking Water</span>

              <h3>12,800 L</h3>

            </div>

          </div>


          <div className="weather-card">

            <Utensils size={22} />

            <div>

              <span>Food Packages</span>

              <h3>18,600</h3>

            </div>

          </div>


          <div className="weather-card">

            <HeartPulse size={22} />

            <div>

              <span>Medical Kits</span>

              <h3>4,280</h3>

            </div>

          </div>


          <div className="weather-card">

            <Boxes size={22} />

            <div>

              <span>Emergency Kits</span>

              <h3>2,940</h3>

            </div>

          </div>


          <div className="weather-card">

            <Truck size={22} />

            <div>

              <span>Transport Units</span>

              <h3>28 Ready</h3>

            </div>

          </div>


          <div className="weather-card">

            <ShieldCheck size={22} />

            <div>

              <span>Safety Equipment</span>

              <h3>1,820</h3>

            </div>

          </div>

        </div>

      </div>


      {/* DISTRIBUTION STATUS */}
      <div className="panel">

        <div className="panel-header">

          <div>

            <h2>Resource Distribution</h2>

            <p className="chart-subtitle">
              Current emergency resource allocation
            </p>

          </div>

          <span>MONITORING</span>

        </div>


        <div className="rescue-operation">

          <div className="operation-icon">
            <Truck size={22} />
          </div>

          <div className="operation-info">

            <strong>Zone A Distribution</strong>

            <p>
              Water, food and medical supplies • 82% delivered
            </p>

          </div>

          <div className="operation-status">
            Active
          </div>

        </div>


        <div className="rescue-operation">

          <div className="operation-icon">
            <Truck size={22} />
          </div>

          <div className="operation-info">

            <strong>Zone B Distribution</strong>

            <p>
              Emergency kits and food packages • 68% delivered
            </p>

          </div>

          <div className="operation-status">
            Active
          </div>

        </div>


        <div className="rescue-operation">

          <div className="operation-icon">
            <CheckCircle size={22} />
          </div>

          <div className="operation-info">

            <strong>Zone C Distribution</strong>

            <p>
              Medical supplies and drinking water • 100% delivered
            </p>

          </div>

          <div className="operation-status">
            Completed
          </div>

        </div>

      </div>


      {/* LOW STOCK ALERTS */}
      <div className="panel">

        <div className="panel-header">

          <div>

            <h2>Low Stock Alerts</h2>

            <p className="chart-subtitle">
              Resources requiring immediate replenishment
            </p>

          </div>

          <span>ALERTS</span>

        </div>


        <div className="flood-message">

          <AlertTriangle size={30} />

          <div>

            <h3>Medical Supplies Running Low</h3>

            <p>
              Medical kit availability has dropped below
              the recommended emergency threshold in Zone B.
              Additional supplies should be dispatched.
            </p>

          </div>

        </div>


        <div className="rescue-operation">

          <div className="operation-icon">
            <Droplets size={22} />
          </div>

          <div className="operation-info">

            <strong>Water Supply</strong>

            <p>
              Zone D • Stock level below 30%
            </p>

          </div>

          <div className="operation-status">
            Refill
          </div>

        </div>


        <div className="rescue-operation">

          <div className="operation-icon">
            <Boxes size={22} />
          </div>

          <div className="operation-info">

            <strong>Emergency Kits</strong>

            <p>
              Zone A • Stock level below recommended threshold
            </p>

          </div>

          <div className="operation-status">
            Refill
          </div>

        </div>

      </div>


      {/* AI RESOURCE ALLOCATION */}
      <div className="panel">

        <div className="panel-header">

          <div>

            <h2>AI Resource Allocation</h2>

            <p className="chart-subtitle">
              Intelligent emergency resource distribution recommendation
            </p>

          </div>

          <span>AI POWERED</span>

        </div>


        <div className="flood-message">

          <Activity size={30} />

          <div>

            <h3>Priority Allocation Recommended — Zone A</h3>

            <p>
              Based on flood risk, population density,
              active rescue operations and current stock levels,
              additional water, food and medical supplies
              should be prioritized for Zone A.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ResourceManagement;