import "@/styles/proyects.css";

function Proyects() {
  return (
    <section>
      <article>
        <div className="container-principal">
          <div className="container-title">
            <h1>Nuestros mejores proyectos</h1>
          </div>
          <div className="container-filter">
            <div className="filter-form">
              <div className="search-container">
                <label htmlFor="filterInput">Buscar: </label>
                {/*<input
                  type="text"
                  id="filterInput"
                  onkeyup="filterOptions()"
                  placeholder="Buscar opciones..."
                />*/}
              </div>
              <div className="container-filter2">
                <label htmlFor="filterSelect">Opciones: </label>
                {/*<select id="filterSelect" onchange="filterOptions()">
                  <option value="">Todas</option>
                  <option value="web">Desarrollo Web</option>
                  <option value="movil">Desarrollo Móvil</option>
                  <option value="desktop">Desarrollo de Escritorio</option>
                  <option value="games">Desarrollo de Videojuegos</option>
                </select>*/}
              </div>
            </div>
          </div>
          <div className="sub-container">
            <div className="container-list">
              <ul className="list-container">
                <li className="list-element filtered-item" data-type="web">
                  <div className="container-img">
                    <img src="#" alt="imagen del proyecto" />
                  </div>
                  <div className="container-description">
                    <div className="container-title">
                      <h1>Título del Proyecto Web</h1>
                    </div>
                    <div className="container-text">
                      <p>Descripción del proyecto web</p>
                    </div>
                    <div className="container-btn">
                      <button>
                        <a href="#">Visitar Proyecto</a>
                      </button>
                    </div>
                  </div>
                </li>
                <li className="list-element filtered-item" data-type="movil">
                  <div className="container-img">
                    <img src="#" alt="imagen del proyecto" />
                  </div>
                  <div className="container-description">
                    <div className="container-title">
                      <h1>Título del Proyecto Móvil</h1>
                    </div>
                    <div className="container-text">
                      <p>Descripción del proyecto móvil</p>
                    </div>
                    <div className="container-btn">
                      <button>
                        <a href="#">Visitar Proyecto</a>
                      </button>
                    </div>
                  </div>
                </li>
                <li className="list-element filtered-item" data-type="desktop">
                  <div className="container-img">
                    {/*--<img src="#" alt="imagen del proyecto" />*/}
                  </div>
                  <div className="container-description">
                    <div className="container-title">
                      <h1>Título del Proyecto de Escritorio</h1>
                    </div>
                    <div className="container-text">
                      <p>Descripción del proyecto de escritorio</p>
                    </div>
                    <div className="container-btn">
                      <button>
                        <a href="#">Visitar Proyecto</a>
                      </button>
                    </div>
                  </div>
                </li>
                <li className="list-element filtered-item" data-type="games">
                  <div className="container-img">
                    {/*<img src={} alt="imagen del proyecto" />*/}
                  </div>
                  <div className="container-description">
                    <div className="container-title">
                      <h1>Título del Proyecto de Videojuegos</h1>
                    </div>
                    <div className="container-text">
                      <p>Descripción del proyecto de videojuegos</p>
                    </div>
                    <div className="container-btn">
                      <button>
                        <a href="#">Visitar Proyecto</a>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Proyects;