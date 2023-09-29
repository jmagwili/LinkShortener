import { Header } from './components/Header';
import { Wrapper } from './components/Wrapper';
import { Notification } from './components/Notification';
import React,{useState} from 'react'

function App() {
  const [notifClass, setNotifClass] = useState("")

  const notifyLinkCopy = () =>{
    setNotifClass("fade-in")
    setTimeout(() => {
      setNotifClass("")
    }, 1000);
  }

  return (
    <div className="App" style={{textAlign:'center'}}>
      <Header />
      <button onClick={notifyLinkCopy}>test</button>
      <h1>URL SHORTENER</h1>
      <Wrapper />
      <Notification className={notifClass}/>
    </div>
  );
}

export default App;
