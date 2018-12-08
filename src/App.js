import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="/">
            Gerenciador de Produtos
          </a>
          <div class="navbar">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Produtos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Sobre
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-3">
          <h1>Gerenciador de Produtos</h1>
        </div>
      </div>
    );
  }
}

export default App;
