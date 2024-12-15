import './Main.css'
export default function Main() {
    return <main>
      <div className="d-flex">
        <iframe id="enrollment-form" src="https://docs.google.com/forms/d/e/1FAIpQLSf0IUJwsRQh8eiwHOFxxpbl2Cjb1qPbXVEae1_EUUr8F-JyAg/viewform?embedded=true">Cargando formulario 🔄️</iframe>
        <div>
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./imagen_01.jpg" className="d-block w-100" alt="Foto del campa" />
              </div>
              <div className="carousel-item">
                <img src="./imagen_02.jpg" className="d-block w-100" alt="Foto del campa" />
              </div>
              <div className="carousel-item">
                <img src="./imagen_03.jpg" className="d-block w-100" alt="Foto del campa" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div>FAQ</div>
    </main>
}