import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  CloudRain,
  Waves,
  Map,
  Users,
  Tent,
  Package,
  Bell,
  ShieldAlert,
  LogOut,
  Activity,
  ChevronRight,
} from "lucide-react";

function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    {
      path: "/",
      label: "Dashboard",
      icon: LayoutDashboard,
      end: true,
    },
    {
      path: "/weather",
      label: "Weather",
      icon: CloudRain,
    },
    {
      path: "/flood-monitoring",
      label: "Flood Monitoring",
      icon: Waves,
    },
    {
      path: "/risk-map",
      label: "Risk Map",
      icon: Map,
    },
    {
      path: "/rescue-management",
      label: "Rescue Management",
      icon: Users,
    },
    {
      path: "/relief-camps",
      label: "Relief Camps",
      icon: Tent,
    },
    {
      path: "/resource-management",
      label: "Resource Management",
      icon: Package,
    },
    {
      path: "/emergency-alerts",
      label: "Emergency Alerts",
      icon: Bell,
    },
    {
      path: "/damage-assessment",
      label: "Damage Assessment",
      icon: ShieldAlert,
    },
  ];

  return (
    <aside className="sidebar">

      {/* BRAND */}
      <div className="sidebar-logo">

        <div className="sidebar-logo-box">
          <span>V</span>
        </div>

        <div className="sidebar-logo-text">
          <h2>VARUNA AI</h2>
          <span>DISASTER INTELLIGENCE</span>
        </div>

      </div>

      {/* NAVIGATION */}
      <nav className="sidebar-nav">

        <div className="nav-section-title">
          OPERATIONS
        </div>

        <div className="sidebar-menu">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >

                <div className="sidebar-link-icon">
                  <Icon
                    size={19}
                    strokeWidth={2}
                  />
                </div>

                <span className="sidebar-link-text">
                  {item.label}
                </span>

                <ChevronRight
                  className="sidebar-link-arrow"
                  size={15}
                  strokeWidth={2}
                />

              </NavLink>
            );
          })}

        </div>

      </nav>

      {/* SIDEBAR FOOTER */}
      <div className="sidebar-bottom">

        {/* SYSTEM HEALTH */}
        <div className="sidebar-system-status">

          <div className="system-status-icon">
            <Activity
              size={17}
              strokeWidth={2.2}
            />
          </div>

          <div className="system-status-text">
            <strong>System Health</strong>
            <small>All services operational</small>
          </div>

          <div className="system-status-dot"></div>

        </div>

        {/* LOGOUT */}
        <button
          type="button"
          className="sidebar-logout"
          onClick={() => navigate("/login")}
        >
          <LogOut
            size={18}
            strokeWidth={2}
          />

          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;