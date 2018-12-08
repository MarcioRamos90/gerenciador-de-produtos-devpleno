import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import ProdutosHome from "./ProdutosHome";
import Categoria from "./Categoria";

class Produtos extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="row">
        <div className="col-md-3">
          <h3>Categoria</h3>
          <Link to="produtos/categoria/1">cate 1</Link>
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
