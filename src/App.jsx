import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import {
  Sun,
  Moon,
  Settings,
  User,
  ShieldCheck,
} from "lucide-react";

import Sidebar from "./components/Sidebar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Weather from "./pages/Weather";
import FloodMonitoring from "./pages/FloodMonitoring";
import RiskMap from "./pages/RiskMap";
import RescueManagement from "./pages/RescueManagement";
import ReliefCamps from "./pages/ReliefCamps";
import ResourceManagement from "./pages/ResourceManagement";
import EmergencyAlerts from "./pages/EmergencyAlerts";
import DamageAssessment from "./pages/DamageAssessment";

import "./index.css";

/* =========================================================
   THEME CONTEXT
========================================================= */

const ThemeContext = createContext(null);

export function useTheme() {
  return useContext(ThemeContext);
}

/* =========================================================
   THEME SWITCH
========================================================= */

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={`theme-switch ${theme}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={
        theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
    >
      <span className="theme-icon">
        {theme === "dark" ? (
          <Moon size={15} />
        ) : (
          <Sun size={15} />
        )}
      </span>

      <span className="theme-switch-track">
        <span className="theme-switch-thumb" />
      </span>
    </button>
  );
}

/* =========================================================
   TOP CONTROLS
========================================================= */

function TopControls() {
  const navigate = useNavigate();

  return (
    <div className="top-controls">

      {/* SETTINGS */}
      <button
        type="button"
        className="header-icon-button"
        onClick={() => navigate("/settings")}
        aria-label="Settings"
        title="Settings"
      >
        <Settings size={19} />
      </button>

      {/* THEME */}
      <ThemeSwitch />

      {/* PROFILE */}
      <button
        type="button"
        className="profile-button"
        onClick={() => navigate("/profile")}
        aria-label="Profile"
        title="Profile"
      >
        <span className="profile-avatar">
          <User size={18} />
        </span>

        <span className="profile-info">
          <strong>Officer</strong>
          <small>Administrator</small>
        </span>
      </button>

    </div>
  );
}

/* =========================================================
   MAIN LAYOUT
========================================================= */

function Layout({ children }) {
  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <header className="top-header">
          <TopControls />
        </header>

        <div className="page-content">
          {children}
        </div>

      </main>

    </div>
  );
}

/* =========================================================
   PROTECTED ROUTE
========================================================= */

function ProtectedRoute({ children }) {
  const isAuthenticated =
    localStorage.getItem("varuna-auth") === "true";

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return children;
}

/* =========================================================
   PROFILE PAGE
========================================================= */

function ProfilePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("varuna-auth");
    localStorage.removeItem("varuna-remember");

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <div>

      <div className="page-header">
        <div>
          <h1>Officer Profile</h1>

          <p>
            Manage your VARUNA AI government officer profile,
            professional information and account access.
          </p>
        </div>
      </div>

      <div className="profile-page-card">

        <div className="large-profile-avatar">
          <User size={42} />
        </div>

        <div className="profile-details">

          <div className="profile-name-row">

            <div>
              <h2>Government Officer</h2>

              <p>
                VARUNA AI Disaster Response Intelligence Platform
              </p>
            </div>

            <span className="profile-active-badge">
              <span></span>
              Active
            </span>

          </div>

          <div className="profile-quick-info">

            <div>
              <ShieldCheck size={16} />
              <span>Administrator</span>
            </div>

            <div>
              <User size={16} />
              <span>Disaster Management</span>
            </div>

            <div>
              <User size={16} />
              <span>Tamil Nadu</span>
            </div>

          </div>

        </div>

      </div>

      <div className="profile-content-grid">

        {/* PERSONAL INFORMATION */}

        <div className="profile-info-card">

          <div className="profile-card-header">

            <div className="profile-card-icon blue">
              <User size={20} />
            </div>

            <div>
              <h2>Personal Information</h2>

              <p>
                Basic officer contact information
              </p>
            </div>

          </div>

          <div className="profile-information-list">

            <div className="profile-information-item">
              <div>
                <span>Full Name</span>
                <strong>Government Officer</strong>
              </div>
            </div>

            <div className="profile-information-item">
              <div>
                <span>Official Email</span>
                <strong>officer@varuna.gov.in</strong>
              </div>
            </div>

            <div className="profile-information-item">
              <div>
                <span>Contact Number</span>
                <strong>+91 XXXXX XXXXX</strong>
              </div>
            </div>

            <div className="profile-information-item">
              <div>
                <span>Location</span>
                <strong>Tamil Nadu, India</strong>
              </div>
            </div>

          </div>

        </div>

        {/* PROFESSIONAL INFORMATION */}

        <div className="profile-info-card">

          <div className="profile-card-header">

            <div className="profile-card-icon cyan">
              <ShieldCheck size={20} />
            </div>

            <div>
              <h2>Professional Information</h2>

              <p>
                Government role and department details
              </p>
            </div>

          </div>

          <div className="profile-information-list">

            <div className="profile-information-item">
              <div>
                <span>Designation</span>
                <strong>
                  Disaster Response Administrator
                </strong>
              </div>
            </div>

            <div className="profile-information-item">
              <div>
                <span>Department</span>
                <strong>
                  Disaster Management Authority
                </strong>
              </div>
            </div>

            <div className="profile-information-item">
              <div>
                <span>Officer ID</span>
                <strong>VARUNA-ADM-001</strong>
              </div>
            </div>

            <div className="profile-information-item">
              <div>
                <span>Access Level</span>
                <strong>
                  Level 4 • Full Operations
                </strong>
              </div>
            </div>

          </div>

        </div>

        {/* SECURITY */}

        <div className="profile-info-card">

          <div className="profile-card-header">

            <div className="profile-card-icon green">
              <ShieldCheck size={20} />
            </div>

            <div>
              <h2>Account & Security</h2>

              <p>
                Security and access information
              </p>
            </div>

          </div>

          <div className="security-status-box">

            <div className="security-status-icon">
              <ShieldCheck size={21} />
            </div>

            <div>
              <strong>Account Secure</strong>

              <p>
                All security services are currently operational.
              </p>
            </div>

          </div>

          <div className="profile-security-list">

            <div className="security-row">
              <div>
                <span>Account Status</span>

                <strong className="status-active">
                  Active
                </strong>
              </div>
            </div>

            <div className="security-row">
              <div>
                <span>Authentication</span>
                <strong>Secure Login</strong>
              </div>
            </div>

            <div className="security-row">
              <div>
                <span>Session Status</span>
                <strong>Current Session Active</strong>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div className="profile-completion-card">

        <div>
          <h3>Profile Verification</h3>

          <p>
            Your officer profile is verified and ready
            for disaster response operations.
          </p>
        </div>

        <strong>100%</strong>

      </div>

      <button
        type="button"
        className="secondary-button"
        onClick={() => navigate("/")}
      >
        Back to Dashboard
      </button>

      <button
        type="button"
        className="logout-button"
        onClick={handleLogout}
      >
        Logout
      </button>

    </div>
  );
}

/* =========================================================
   SETTINGS PAGE
========================================================= */

function SettingsPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>

      <div className="page-header">

        <div>
          <h1>Settings</h1>

          <p>
            Configure your VARUNA AI dashboard preferences.
          </p>
        </div>

      </div>

      <div className="settings-card">

        {/* APPEARANCE */}

        <div className="settings-section">

          <div className="settings-section-icon">
            {theme === "dark" ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </div>

          <div className="settings-section-content">

            <h3>Appearance</h3>

            <p>
              Switch between dark and light dashboard themes.
            </p>

          </div>

          <button
            type="button"
            className={`settings-theme-button ${theme}`}
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <>
                <Moon size={17} />
                Dark
              </>
            ) : (
              <>
                <Sun size={17} />
                Light
              </>
            )}
          </button>

        </div>

        <div className="settings-divider"></div>

        {/* SECURITY */}

        <div className="settings-section">

          <div className="settings-section-icon">
            <ShieldCheck size={20} />
          </div>

          <div className="settings-section-content">

            <h3>System Security</h3>

            <p>
              VARUNA AI security services are currently active.
            </p>

          </div>

          <span className="settings-status">
            Secure
          </span>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {

  const [theme, setTheme] = useState(() => {

    const savedTheme =
      localStorage.getItem("varuna-theme");

    return savedTheme === "light"
      ? "light"
      : "dark";
  });

  /* =======================================================
     APPLY THEME
  ======================================================= */

  useEffect(() => {

    localStorage.setItem(
      "varuna-theme",
      theme
    );

    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    document.body.classList.remove(
      "dark-theme",
      "light-theme"
    );

    document.body.classList.add(
      `${theme}-theme`
    );

  }, [theme]);

  /* =======================================================
     TOGGLE THEME
  ======================================================= */

  const toggleTheme = () => {

    setTheme((currentTheme) =>
      currentTheme === "dark"
        ? "light"
        : "dark"
    );

  };

  /* =======================================================
     ROUTES
  ======================================================= */

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >

      <BrowserRouter>

        <Routes>

          {/* =========================================
              LOGIN - FIRST PAGE
          ========================================= */}

          <Route
            path="/login"
            element={<Login />}
          />

          {/* =========================================
              DASHBOARD
          ========================================= */}

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* =========================================
              WEATHER
          ========================================= */}

          <Route
            path="/weather"
            element={
              <ProtectedRoute>
                <Layout>
                  <Weather />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* =========================================
              FLOOD MONITORING
          ========================================= */}

          <Route
            path="/flood-monitoring"
            element={
              <ProtectedRoute>
                <Layout>
                  <FloodMonitoring />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* =========================================
              RISK MAP
          ========================================= */}

          <Route
            path="/risk-map"
            element={
              <ProtectedRoute>
                <Layout>
                  <RiskMap />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* =========================================
              RESCUE MANAGEMENT
          ========================================= */}

          <Route
            path="/rescue-management"
            element={
              <ProtectedRoute>
                <Layout>
                  <RescueManagement />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* =========================================
              RELIEF CAMPS
          ========================================= */}

          <Route
            path="/relief-camps"
            element={
              <ProtectedRoute>
                <Layout>
                  <ReliefCamps />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* =========================================
              RESOURCE MANAGEMENT
          ========================================= */}

          <Route
            path="/resource-management"
            element={
              <ProtectedRoute>
                <Layout>
                  <ResourceManagement />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* =========================================
              EMERGENCY ALERTS
          ========================================= */}

          <Route
            path="/emergency-alerts"
            element={
              <ProtectedRoute>
                <Layout>
                  <EmergencyAlerts />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* =========================================
              DAMAGE ASSESSMENT
          ========================================= */}

          <Route
            path="/damage-assessment"
            element={
              <ProtectedRoute>
                <Layout>
                  <DamageAssessment />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* =========================================
              PROFILE
          ========================================= */}

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Layout>
                  <ProfilePage />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* =========================================
              SETTINGS
          ========================================= */}

          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Layout>
                  <SettingsPage />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* =========================================
              UNKNOWN URL
          ========================================= */}

          <Route
            path="*"
            element={
              <Navigate
                to="/login"
                replace
              />
            }
          />

        </Routes>

      </BrowserRouter>

    </ThemeContext.Provider>
  );
}

export default App;