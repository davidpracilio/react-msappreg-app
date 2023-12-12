import logo from './logo.svg';
import './App.css';

function App() {

  const callBackendAPI = async () => {
    try {
      const response = await fetch('/express_backend');
      if (response.ok) {
        const jsonResponse = await response.json();
        const body = jsonResponse;
        console.log(body);
      }
    } catch(err) {
        console.log(`Error - ${err}`)
    }
  };

  const callAzureTokenRetrieval = async () => {
    try {
      const response = await fetch('/get_azure_token');
      if (response.ok) {
        const jsonResponse = await response.json();
        const body = jsonResponse;
        console.log(body);
      }
    } catch(err) {
        console.log(`Error - ${err}`)
    }
  };

  callBackendAPI();
  callAzureTokenRetrieval();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
