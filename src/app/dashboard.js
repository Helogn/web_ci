// src/app/dashboard.js
import { useState, useEffect } from "react";
import axios from "axios";
import Upload from "./upload";
import TestResult from "./test-result";

export default function Dashboard() {
  const [testServers, setTestServers] = useState([]);
  const [testModules, setTestModules] = useState([]);
  const [testVersions, setTestVersions] = useState([]);
  const [selectedServer, setSelectedServer] = useState('');
  const [selectedModule, setSelectedModule] = useState('');
  const [selectedVersion, setSelectedVersion] = useState('');

  useEffect(() => {
    fetchOptions();
  }, []);

  const fetchOptions = async () => {
    const [servers, modules, versions] = await Promise.all([
      axios.get('/api/test-servers'),
      axios.get('/api/test-modules'),
      axios.get('/api/test-versions')
    ]);
    setTestServers(servers.data);
    setTestModules(modules.data);
    setTestVersions(versions.data);
  };

  const handleRunTest = async () => {
    try {
      const response = await axios.post('/app/api/run-test', {
        server: selectedServer,
        module: selectedModule,
        version: selectedVersion
      });
      if (response.data.success) {
        alert('Test executed successfully');
      } else {
        alert('Test failed');
      }
    } catch (error) {
      console.error('Error running test:', error);
    }
  };

  return (
    <main className="flex flex-col gap-8 items-center sm:items-start">
      <h1 className="text-2xl">Automation Test Page</h1>
      <section>
        <h2>Choose Test Options</h2>
        <select value={selectedServer} onChange={(e) => setSelectedServer(e.target.value)}>
          <option value="">Select Server</option>
          {testServers.map(server => (
            <option key={server.id} value={server.id}>{server.name}</option>
          ))}
        </select>
        <select value={selectedModule} onChange={(e) => setSelectedModule(e.target.value)}>
          <option value="">Select Module</option>
          {testModules.map(module => (
            <option key={module.id} value={module.id}>{module.name}</option>
          ))}
        </select>
        <select value={selectedVersion} onChange={(e) => setSelectedVersion(e.target.value)}>
          <option value="">Select Version</option>
          {testVersions.map(version => (
            <option key={version.id} value={version.id}>{version.version}</option>
          ))}
        </select>
        <button onClick={handleRunTest}>Run Test</button>
      </section>
      <Upload />
      <TestResult />
    </main>
  );
}