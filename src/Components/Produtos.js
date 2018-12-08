import React, { Component } from "react";
import { Route } from "react-router-dom";
import ProdutosHome from "./ProdutosHome";

class Produtos extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <h3>Categoria</h3>
          LINK PARA CATEGORIA
        </div>
        <div className="col-md-9">
          <h1>Produtos</h1>
          <Route exact path={this.props.match.url} component={ProdutosHome} />
        </div>
      </div>
    );
  }
}

export default Produtos;
