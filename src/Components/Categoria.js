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

  removeProduto = id => {
    const { catId } = this.props.match.params;

    this.props.removeProduto(id).then(res => {
      this.props.loadProdutos(catId);
    });
  };

  renderProdutos = prod => {
    return (
      <div className="alert alert-primary" key={prod.id}>
        {prod.produto}{" "}
        <button onClick={() => this.removeProduto(prod.id)}>Delete</button>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h4>{this.props.categoria}</h4>
        {this.props.produtos.length === 0 && (
          <div className="alert alert-dark text-center mt-5">
            Nenhum produto encontrado
          </div>
        )}
        <div>{this.props.produtos.map(this.renderProdutos)}</div>
      </div>
    );
  }
}

export default Categoria;
