import Dashboard from '../Dashboard/Dashboard';
import ModuleExplorer from '../ModuleExplorer/ModuleExplorer';
import './ModulesPage.css';

function ModulesPage() {
  return (
    <div className="page">
      <ModuleExplorer />
      <Dashboard />
    </div>
  );
}

export default ModulesPage;
