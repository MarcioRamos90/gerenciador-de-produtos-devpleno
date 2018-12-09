import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Sobre from "./Components/Sobre";
import Produtos from "./Components/Produtos";

class App extends Component {
  state = {
    categorias: []
  };

  loadCategorias = () => {
    this.props.api.loadCategorias().then(res => {
      this.setState({
        categorias: res.data
      });
    });
  };

  createNewCategoria = value => {
    return this.props.api.createCategoria(value);
  };

  deleteCategoria = id => {
    return this.props.api.deleteCategoria(id);
  };

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
              Gerenciador de Produtos
            </a>
            <div className="navbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/produtos">
                    Produtos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sobre">
                    Sobre
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container mt-3">
            <Route exact path="/" component={Home} />
            <Route
              path="/produtos"
              render={props => {
                return (
                  <Produtos
                    {...props}
                    categorias={this.state.categorias}
                    loadCategorias={this.loadCategorias}
                    createCategoria={this.createNewCategoria}
                    deleteCategoria={this.deleteCategoria}
                  />
                );
              }}
            />
            <Route exact path="/sobre" component={Sobre} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
