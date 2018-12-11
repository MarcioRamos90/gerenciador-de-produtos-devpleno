import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Sobre from "./Components/Sobre";
import Produtos from "./Components/Produtos";

class App extends Component {
  state = {
    produtos: [],
    categorias: [],
    categoria: null
  };

  loadProdutos = id => {
    this.props.api.loadProdutos(id).then(res => {
      this.setState({
        produtos: res.data
      });
    });
  };

  removeProduto = id => {
    return this.props.api.deleteProduto(id);
  };

  searchCategoria = id => {
    this.props.api.searchCategoria(id).then(res => {
      this.setState({
        categoria: res.data.categoria
      });
    });
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

  editCategoria = categoria => {
    return this.props.api.editCategoria(categoria);
  };

  createNewProduto = value => {
    return this.props.api.createProduto(value);
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
                    removeProduto={this.removeProduto}
                    loadProdutos={this.loadProdutos}
                    produtos={this.state.produtos}
                    categorias={this.state.categorias}
                    categoria={this.state.categoria}
                    searchCategoria={this.searchCategoria}
                    loadCategorias={this.loadCategorias}
                    createCategoria={this.createNewCategoria}
                    deleteCategoria={this.deleteCategoria}
                    editCategoria={this.editCategoria}
                    createProduto={this.createNewProduto}
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
