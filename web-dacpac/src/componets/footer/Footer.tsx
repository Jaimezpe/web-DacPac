import './Footer.css'

export default function Footer() {
    return <footer className='row py-2'>
      <div className='col-4 ps-5'>
          <strong>Contacto:</strong><br/>
          <a href="mailto:molestar.a.dani@mentes.indiferentes.org">molestar.a.dani@mentes.indiferentes.org</a>
      </div>
      <div className='col-4 text-center'>
        &copy; Loh chavaleh 2024🤘
      </div>
      <div className='col-4 text-end pe-5'><strong>Indiferent Minds</strong></div>
    </footer>
}