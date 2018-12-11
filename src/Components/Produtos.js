import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import ProdutosHome from "./ProdutosHome";
import Categoria from "./Categoria";
import ProdutoNovo from "./ProdutoNovo";

class Produtos extends Component {
  state = {
    editingCategoria: ""
  };

  componentDidMount = () => {
    this.props.loadCategorias();
  };

  createNewCategoria = value => {
    this.props.createCategoria(value).then(res => {
      this.props.loadCategorias();
    });
  };

  deleteCategoria = id => {
    this.props.deleteCategoria(id).then(res => {
      this.props.loadCategorias();
    });
  };

  editCategoria = categoria => {
    this.props.editCategoria(categoria).then(res => {
      this.props.loadCategorias();
    });
  };

  handlerNewCategoria = key => {
    if (key.keyCode === 13) {
      this.createNewCategoria(key.target.value);
      key.target.value = "";
    }
  };

  handlerEditCategoria = key => {
    if (key.keyCode === 13) {
      this.editCategoria({
        id: this.state.editingCategoria,
        categoria: key.target.value
      });
      key.target.value = "";
      this.dezabilitandoEdicao();
    }
  };

  habilitandoEdicao(id) {
    this.setState({
      editingCategoria: id
    });
  }
  dezabilitandoEdicao() {
    this.setState({
      editingCategoria: ""
    });
  }

  renderCategorias = cat => {
    return (
      <div key={cat.id} className="mt-2">
        {this.state.editingCategoria === cat.id && (
          <div className="form-group mt-2" style={{ display: "flex" }}>
            <input
              className="form-control"
              defaultValue={cat.categoria}
              onKeyUp={this.handlerEditCategoria}
            />
            <button
              className="btn mr-2"
              onClick={() => this.dezabilitandoEdicao(cat.id)}
            >
              cncl
            </button>
          </div>
        )}
        {this.state.editingCategoria !== cat.id && (
          <li>
            <button
              className="btn mr-2"
              onClick={() => this.deleteCategoria(cat.id)}
            >
              X
            </button>
            <button
              className="btn mr-2"
              onClick={() => this.habilitandoEdicao(cat.id)}
            >
              Edt
            </button>
            <Link to={`/produtos/categoria/${cat.id}`}>{cat.categoria}</Link>
          </li>
        )}
      </div>
    );
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
          <Link to="/produtos/novo">Novo produto</Link>
        </div>
        <div className="col-md-9">
          <h1>Produtos</h1>
          <Route exact path={match.url} component={ProdutosHome} />
          <Route
            exact
            path={match.url + "/categoria/:catId"}
            render={props => (
              <Categoria
                {...props}
                categoria={this.props.categoria}
                produtos={this.props.produtos}
                removeProduto={this.props.removeProduto}
                loadProdutos={this.props.loadProdutos}
                searchCategoria={this.props.searchCategoria}
              />
            )}
          />
          <Route
            exact
            path={"/produtos/novo"}
            render={props => (
              <ProdutoNovo
                {...props}
                categorias={categorias}
                createProduto={this.props.createProduto}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default Produtos;
