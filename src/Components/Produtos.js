import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

import ProdutosHome from "./ProdutosHome";
import Categoria from "./Categoria";

class Produtos extends Component {
  state = {
    categorias: []
  };

  componentDidMount = () => {
    axios.get("http://localhost:3001/categoria").then(res => {
      this.setState({
        categorias: res.data
      });
    });
  };

  renderCategorias = cat => {
    return (
      <li key={cat.id}>
        <Link to={`/produtos/categoria/${cat.id}`}>{cat.categoria}</Link>
      </li>
    );
  };

  render() {
    const { categorias } = this.state;
    const { match } = this.props;
    return (
      <div className="row">
        <div className="col-md-3">
          <h3>Categoria</h3>
          {/* TODAS CATEGORIAS */}
          {categorias.map(this.renderCategorias)}
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
