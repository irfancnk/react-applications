// PACKAGES
// MODULES
import NavigationBar from './components/NavigationBar';
import IssueList from './components/IssueList';
// STYLES
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container-fluid h-100 m-0 p-0">
        <div className="row h-100 m-0 p-0">
          <div className="navigation-bar col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-0 p-0">
            <NavigationBar />
          </div>
          <div className="col-1 col-sm-1 col-md-2 col-lg-3 col-xl-3 m-0 p-0"/>
          <div className="issue-list col-10 col-sm-10 col-md-8 col-lg-6 col-xl-6 m-0 p-1">
            <IssueList />
          </div>
          <div className="col-1 col-sm-1 col-md-2 col-lg-3 col-xl-3 m-0 p-0"/>
        </div>
      </div>
    </div>
  );
}

export default App;
