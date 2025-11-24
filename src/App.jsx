import background from './assets/background.png'
import logo from './assets/logo.png'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <div className="overlay" />

      <div className="content">
        <img src={logo} alt="Logo" className="logo" />

        <a href="https://qr.scanned.page/uploads/pdf/Z8ZbrD_9f089aceca1ef8b9.pdf"
           target="_blank"
           className="link">Menu</a>

        <a href="https://maps.app.goo.gl/64Zpm7KW4A1AQiHF8?g_st=ipc"
           target="_blank"
           className="link">Google Maps</a>

        <a href="https://www.instagram.com/sushipandadubai?igsh=MWR3cHR0dG5kajhsaw=="
           target="_blank"
           className="link">Instagram</a>

        <a href="https://wa.me/971585837613"
           target="_blank"
           className="link">WhatsApp</a>
      </div>
    </div>
  )
}

export default App

