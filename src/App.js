import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Sobre from "./Components/Sobre";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/">
              Gerenciador de Produtos
            </a>
            <div class="navbar">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">
                    Inicio
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Produtos
                  </a>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/sobre">
                    Sobre
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container mt-3">
            <Route exact path="/" component={Home} />
            <Route exact path="/sobre" component={Sobre} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
