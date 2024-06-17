import Header from './Header.jsx'
import PdfElement from './pdfElement.jsx'
import './App.css'
 
function App() {

  return (
    
    <div className="container">
    <PdfElement/>
    <div className="left">
    <Header/>
    </div>
    <div className="line"></div>
  

    <div className="right">
    </div>
    
  </div>

  )
}

export default App
