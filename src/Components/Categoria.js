import React, { Component } from "react";

class Categoria extends Component {
  render() {
    return (
      <div>
        <h4>Categorias {this.props.match.params.catId}</h4>
      </div>
    );
  }
}

export default Categoria;
