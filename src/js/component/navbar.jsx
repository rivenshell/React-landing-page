import React from 'react'

function navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <a className="navbar-brand text-white d-flex pl-2" href="#">OpenScript</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#">Disabled</a>
            </li>
        </ul>
    </div>
</nav>
  )
}

export default navbar
