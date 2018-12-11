import React, { Component } from "react";

class Categoria extends Component {
  state = {
    produtos: [],
    categorias: "",
    id: ""
  };

  componentDidMount = () => {
    const { catId } = this.props.match.params;

    this.setState({ id: catId });
    this.props.searchCategoria(catId);
    this.props.loadProdutos(catId);
  };

  componentWillReceiveProps = nextProps => {
    const { catId } = nextProps.match.params;
    if (catId !== this.state.id) {
      this.setState({ id: catId });
      this.props.loadProdutos(catId);
      this.props.searchCategoria(catId);
    }
  };

  renderProdutos = prod => {
    return (
      <div className="alert alert-secondary" key={prod.id}>
        {prod.produto}
      </div>
    );
  };

  render() {
    return (
      <div>
        <h4>{this.props.categoria}</h4>
        <div>{this.props.produtos.map(this.renderProdutos)}</div>
      </div>
    );
  }
}

export default Categoria;
