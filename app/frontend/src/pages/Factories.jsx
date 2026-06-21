import { useEffect, useState } from "react";

function Factories() {
  const [factories, setFactories] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:57315/factories")
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