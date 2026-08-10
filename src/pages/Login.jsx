import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ShieldCheck,
  Lock,
  Mail,
  Eye,
  EyeOff,
  CloudRain,
  Waves,
  Activity,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Please enter your officer email.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("varuna-auth", "true");

      if (rememberMe) {
        localStorage.setItem("varuna-remember", "true");
      }

      navigate("/", { replace: true });
    }, 1000);
  };

  return (
    <div className="login-page">

      {/* BACKGROUND */}

      <div className="login-background-grid"></div>

      <div className="login-glow login-glow-one"></div>
      <div className="login-glow login-glow-two"></div>


      {/* LEFT BRAND SECTION */}

      <section className="login-brand-panel">

        <div className="login-brand-top">

          <div className="login-brand-logo">
            V
          </div>

          <div>
            <h1>VARUNA AI</h1>

            <span>
              DISASTER INTELLIGENCE PLATFORM
            </span>
          </div>

        </div>


        <div className="login-brand-content">

          <div className="login-live-badge">

            <span></span>

            INTELLIGENCE SYSTEM ONLINE

          </div>


          <h2>
            Predict Early.
            <br />

            <span>Respond Faster.</span>

            <br />

            Recover Smarter.
          </h2>


          <p>
            AI-powered disaster monitoring and
            emergency response intelligence for
            faster and safer decision-making.
          </p>

        </div>


        {/* SYSTEM STATUS */}

        <div className="login-system-grid">

          <div className="login-system-card">

            <div className="login-system-icon blue">
              <CloudRain size={20} />
            </div>

            <div>
              <span>Weather Intelligence</span>
              <strong>LIVE</strong>
            </div>

          </div>


          <div className="login-system-card">

            <div className="login-system-icon red">
              <Waves size={20} />
            </div>

            <div>
              <span>Flood Monitoring</span>
              <strong>ACTIVE</strong>
            </div>

          </div>


          <div className="login-system-card">

            <div className="login-system-icon green">
              <Activity size={20} />
            </div>

            <div>
              <span>Response Network</span>
              <strong>ONLINE</strong>
            </div>

          </div>

        </div>


        <div className="login-brand-footer">

          <span>VARUNA AI</span>

          <span>•</span>

          <span>SECURE GOVERNMENT PLATFORM</span>

        </div>

      </section>


      {/* RIGHT LOGIN SECTION */}

      <section className="login-form-panel">

        <div className="login-card">

          {/* SECURITY BADGE */}

          <div className="login-security-badge">

            <div className="login-security-icon">
              <ShieldCheck size={18} />
            </div>

            <div>
              <strong>SECURE ACCESS</strong>

              <span>
                Government Officer Portal
              </span>
            </div>

          </div>


          {/* TITLE */}

          <div className="login-title">

            <h2>Welcome back</h2>

            <p>
              Sign in to access the VARUNA AI
              disaster response command center.
            </p>

          </div>


          {/* ERROR */}

          {error && (
            <div className="login-error">

              <AlertCircle size={17} />

              <span>{error}</span>

            </div>
          )}


          {/* FORM */}

          <form onSubmit={handleLogin}>

            {/* EMAIL */}

            <div className="input-group">

              <label htmlFor="officer-email">
                Officer Email
              </label>

              <div className="input-wrapper">

                <Mail size={18} />

                <input
                  id="officer-email"
                  type="email"
                  placeholder="officer@government.gov"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  disabled={loading}
                  autoComplete="email"
                />

              </div>

            </div>


            {/* PASSWORD */}

            <div className="input-group">

              <div className="password-label-row">

                <label htmlFor="officer-password">
                  Password
                </label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() => {
                    setError(
                      "Please contact your system administrator to reset your password."
                    );
                  }}
                >
                  Forgot password?
                </button>

              </div>


              <div className="input-wrapper">

                <Lock size={18} />

                <input
                  id="officer-password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  disabled={loading}
                  autoComplete="current-password"
                />


                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  disabled={loading}
                >

                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}

                </button>

              </div>

            </div>


            {/* REMEMBER */}

            <div className="login-options">

              <label className="remember">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) =>
                    setRememberMe(
                      e.target.checked
                    )
                  }
                  disabled={loading}
                />

                <span>
                  Remember this device
                </span>

              </label>

            </div>


            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >

              {loading ? (
                <>
                  <Loader2
                    size={19}
                    className="login-spinner"
                  />

                  Authenticating...
                </>
              ) : (
                <>
                  <ShieldCheck size={19} />

                  Secure Login

                  <ArrowRight
                    size={17}
                    className="login-button-arrow"
                  />
                </>
              )}

            </button>

          </form>


          {/* SECURITY INFO */}

          <div className="login-security-info">

            <CheckCircle2 size={16} />

            <div>

              <strong>
                Protected Access
              </strong>

              <span>
                VARUNA AI secure authentication
                controls are active.
              </span>

            </div>

          </div>


          {/* FOOTER */}

          <div className="login-footer">

            <span>
              Authorized Government Personnel Only
            </span>

            <span>
              VARUNA AI • Disaster Response Intelligence
            </span>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Login;