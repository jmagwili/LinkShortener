import { Header } from './components/Header';
import { Wrapper } from './components/Wrapper';
import { Notification } from './components/Notification';

function App() {
  return (
    <div className="App" style={{textAlign:'center'}}>
      <Header />
      <h1>URL SHORTENER</h1>
      <Wrapper />
      <Notification />
    </div>
  );
}

export default App;
