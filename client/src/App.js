import { Header } from './components/Header';
import { Wrapper } from './components/Wrapper';

function App() {
  return (
    <div className="App" style={{textAlign:'center'}}>
      <Header />
      <h1>URL SHORTENER</h1>
      <Wrapper />
    </div>
  );
}

export default App;
