import React, { Component } from "react";
import axios from "axios";

class Categoria extends Component {
  state = {
    produtos: [],
    categorias: ""
  };

  searchCategoria = id => {
    axios.get(`http://localhost:3001/categoria/${id}`).then(res => {
      this.setState({
        categoria: res.data.categoria
      });
    });
  };

  searchProducts = id => {
    axios.get(`http://localhost:3001/Produtos?cat=${id}`).then(res => {
      this.setState({
        produtos: res.data
      });
    });
  };

  componentDidMount = () => {
    const { catId } = this.props.match.params;

    this.searchProducts(catId);
    this.searchCategoria(catId);
  };

  componentWillReceiveProps = nextProps => {
    const { catId } = nextProps.match.params;
    this.searchProducts(catId);
    this.searchCategoria(catId);
  };

  renderProdutos = prod => {
    return (
      <div className="alert alert-secondary" key={prod.id}>
        {prod.desc}
      </div>
    );
  };

  render() {
    return (
      <div>
        <h4>{this.state.categoria}</h4>
        <div>{this.state.produtos.map(this.renderProdutos)}</div>
      </div>
    );
  }
}

export default Categoria;
