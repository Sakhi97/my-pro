import background from './assets/background.png'
import './App.css'

function App() {
  return (
    <div
      className="app-container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <a href="https://qr.scanned.page/uploads/pdf/Z8ZbrD_9f089aceca1ef8b9.pdf" className="link" target="_blank">Menu</a>
      <a href="https://maps.app.goo.gl/64Zpm7KW4A1AQiHF8?g_st=ipc" className="link" target="_blank">Google maps</a>
      <a href="https://www.instagram.com/sushipandadubai?igsh=MWR3cHR0dG5kajhsaw==" className="link" target="_blank">Instagram</a>
      <a href="wa.me/971585837613" className="link" target="_blank">Whats App</a>
    </div>
  )
}

export default App

