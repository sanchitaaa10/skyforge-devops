import { useEffect, useState } from "react";

function Machines() {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    fetch("http://backend-service:5001/machines")
      .then((res) => res.json())
      .then((data) => setMachines(data));
  }, []);

  return (
    <div>
      <h1>Machines</h1>

      <table>
        <thead>
          <tr>
            <th>Machine</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {machines.map((machine) => (
            <tr key={machine.id}>
              <td>{machine.name}</td>
              <td>
                <span
                  className={
                    machine.status === "Running"
                      ? "status-active"
                      : "status-warning"
                  }
                >
                  {machine.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Machines;