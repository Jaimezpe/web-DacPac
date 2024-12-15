import './Header.css'

export default function Header() {
    return <header className='d-flex '>
        <div className="logo-container">
            <img src='/logo.svg' alt="Logo DacPac" id="logo-dacpac" className='d-none d-sm-block'/>
        </div>
        <div className='w-100 pt-2 headers-container'>
            <h1>CAMPAMENTO DAC-PAC</h1>
            <h2>De Alta Capacidad Para Alta Capacidad</h2>
        </div>
    </header>
}