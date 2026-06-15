import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="logo">
        🚀
        <h2>SkyForge</h2>
      </div>

      <div className="menu">

        <NavLink to="/dashboard">
          📊 Dashboard
        </NavLink>

        <NavLink to="/factories">
          🏭 Factories
        </NavLink>

        <NavLink to="/machines">
          ⚙ Machines
        </NavLink>

        <NavLink to="/alerts">
          🚨 Alerts
        </NavLink>

        <NavLink to="/reports">
          📄 Reports
        </NavLink>

      </div>

    </div>
  );
}

export default Sidebar;