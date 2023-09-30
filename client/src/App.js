import { Header } from './components/Header';
import { Wrapper } from './components/Wrapper';
import { Notification } from './components/Notification';
import React,{useState} from 'react'

function App() {
  const [notifClass, setNotifClass] = useState("")

  const showNotif = () =>{
    setNotifClass("fade-in")
    setTimeout(() => {
      setNotifClass("")
    }, 1000);
  }

  return (
    <div className="App" style={{textAlign:'center'}}>
      <Header />
      <h1>URL SHORTENER</h1>
      <Wrapper showNotif={showNotif}/>
      <Notification className={notifClass}/>
    </div>
  );
}

export default App;
