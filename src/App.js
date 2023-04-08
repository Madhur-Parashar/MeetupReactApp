
import './App.css';
import Meetups from './components/Meetups/Meetups';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-header__title'>Assessment</div>
      </header>
      <main className='App-main'>
        <Meetups/>
      </main>
    </div>
  );
}

export default App;
