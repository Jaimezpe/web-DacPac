import './App.css'
import Footer from './componets/footer/Footer'
import Header from './componets/header/Header'
import Main from './componets/main/Main'

function App() {
  return (
    <div className='d-flex flex-column justify-content-between vh-100'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
