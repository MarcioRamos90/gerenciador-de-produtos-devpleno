import React, { Component } from "react";

class ProdutoNovo extends Component {
  salvarProduto = () => {
    const { produto, categoria } = this.refs;
    if (produto.value !== "" && categoria.value !== "") {
      const produto = {
        categoria: this.refs.categoria.value,
        produto: this.refs.produto.value
      };
      this.props
        .createProduto(produto)
        .then(res => this.props.history.push("/produtos/" + categoria.value));
    }
  };

  render() {
    return (
      <div className="form-group">
        <h1>Novo produto</h1>
        <select className="custom-select mb-3" ref="categoria" id="">
          {this.props.categorias.map(cat => {
            return (
              <option key={cat.id} value={cat.id}>
                {cat.categoria}
              </option>
            );
          })}
        </select>
        <input
          className="form-control mb-3"
          type="text"
          name="produto"
          ref="produto"
        />
        <button className="btn btn-primary" onClick={this.salvarProduto}>
          Salvar
        </button>
      </div>
    );
  }
}

export default ProdutoNovo;
