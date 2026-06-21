import { useEffect, useState } from "react";

function Factories() {
  const API = import.meta.env.VITE_API_URL;
  const [factories, setFactories] = useState([]);

  useEffect(() => {
    fetch(`${API}/factories`)
      .then((res) => res.json())
      .then((data) => setFactories(data));
  }, []);

  return (
    <div>
      <h1>Factories</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {factories.map((factory) => (
            <tr key={factory.id}>
              <td>{factory.name}</td>
              <td>{factory.location}</td>
              <td>
                <span className="status-active">
                  {factory.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Factories;