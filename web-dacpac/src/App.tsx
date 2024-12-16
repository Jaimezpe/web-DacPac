import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './componets/footer/Footer'
import Header from './componets/header/Header'
import Main from './componets/main/Main'

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Routes>
        
        <Route path="/" element={
          
          <div className='d-flex flex-column justify-content-between vh-100'>
            <div className="parent-container">
              <div className="main-container">
                <div className="child-container">
                  <Header />
                  <Main />
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
