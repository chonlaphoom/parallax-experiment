import logo from './logo.svg';
import './App.css';
import Star from './components/star';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Star />
      </header>
    </div>
  );
}

export default App;
