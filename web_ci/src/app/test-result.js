// src/app/test-result.js
import { useState, useEffect } from "react";
import axios from "axios";

export default function TestResult() {
  const [testResults, setTestResults] = useState([]);

  useEffect(() => {
    fetchTestResults();
  }, []);

  const fetchTestResults = async () => {
    try {
      const response = await axios.get('/app/api/test-results');
      setTestResults(response.data);
    } catch (error) {
      console.error('Error fetching test results:', error);
    }
  };

  return (
    <section>
      <h2>Test Results</h2>
      <table>
        <thead>
          <tr>
            <th>Test ID</th>
            <th>Server</th>
            <th>Module</th>
            <th>Version</th>
            <th>Status</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {testResults.map(result => (
            <tr key={result.id}>
              <td>{result.id}</td>
              <td>{result.server}</td>
              <td>{result.module}</td>
              <td>{result.version}</td>
              <td>{result.status}</td>
              <td>{result.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}