import { useEffect, useState } from "react";
import Header from "../components/Header";
import "../components/Header.css";

function Dashboard() {
  const [data, setData] = useState({
    factories: 0,
    machines: 0,
    alerts: 0,
  });

  useEffect(() => {
    fetch("http://127.0.0.1:54714/dashboard")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Header />

      <h2>Operations Overview</h2>

      <div className="cards">
        <div className="card">
          <h3>🏭 Factories</h3>
          <p>{data.factories}</p>
          <small>Active Plants</small>
        </div>

        <div className="card">
          <h3>⚙ Machines</h3>
          <p>{data.machines}</p>
          <small>Operational Units</small>
        </div>

        <div className="card">
          <h3>🚨 Alerts</h3>
          <p>{data.alerts}</p>
          <small>Active Alerts</small>
        </div>

        <div className="card">
          <h3>📈 Efficiency</h3>
          <p>96%</p>
          <small>Production Rate</small>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="panel">
          <h2>System Health</h2>

          <div className="health-item">
            <span>API Status</span>
            <span className="healthy">🟢 Healthy</span>
          </div>

          <div className="health-item">
            <span>Database</span>
            <span className="healthy">🟢 Connected</span>
          </div>

          <div className="health-item">
            <span>Frontend</span>
            <span className="healthy">🟢 Online</span>
          </div>
        </div>

        <div className="panel">
          <h2>Production Metrics</h2>

          <p>Production Efficiency</p>

          <div className="progress">
            <div
              className="progress-fill"
              style={{ width: "96%" }}
            ></div>
          </div>

          <p>Target Output</p>

          <div className="progress">
            <div
              className="progress-fill"
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;