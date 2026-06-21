import { useEffect, useState } from "react";

function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/alerts`)
      .then((res) => res.json())
      .then((data) => setAlerts(data));
  }, []);

  return (
    <div>
      <h1>Alerts</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Alert Message</th>
          </tr>
        </thead>

        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.id}>
              <td>{alert.id}</td>
              <td>{alert.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Alerts;