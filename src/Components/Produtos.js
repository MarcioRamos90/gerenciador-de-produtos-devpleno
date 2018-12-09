import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import ProdutosHome from "./ProdutosHome";
import Categoria from "./Categoria";

class Produtos extends Component {
  componentDidMount = () => {
    this.props.loadCategorias();
  };

  deleteCategoria = id => {
    this.props.deleteCategoria(id).then(res => {
      this.props.loadCategorias();
    });
  };

  renderCategorias = cat => {
    return (
      <li key={cat.id}>
        <button
          className="btn mr-2"
          onClick={() => this.deleteCategoria(cat.id)}
        >
          X
        </button>
        <Link to={`/produtos/categoria/${cat.id}`}>{cat.categoria}</Link>
      </li>
    );
  };

  createNewCategoria = value => {
    this.props.createCategoria(value).then(res => {
      this.props.loadCategorias();
    });
  };

  handlerNewCategoria = key => {
    if (key.keyCode === 13) {
      this.createNewCategoria(key.target.value);
      key.target.value = "";
    }
  };

  render() {
    const { match, categorias } = this.props;
    return (
      <div className="row">
        <div className="col-md-3">
          <h3>Categoria</h3>
          {/* TODAS CATEGORIAS */}
          <ul style={{ listStyle: "none" }}>
            {categorias.map(this.renderCategorias)}
          </ul>
          <div className="alert alert-primary mt-3">
            <input
              onKeyUp={this.handlerNewCategoria}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              placeholder="nova Categoria"
            />
          </div>
        </div>
        <div className="col-md-9">
          <h1>Produtos</h1>
          <Route exact path={match.url} component={ProdutosHome} />
          <Route
            exact
            path={match.url + "/categoria/:catId"}
            component={Categoria}
          />
        </div>
      </div>
    );
  }
}

export default Produtos;
