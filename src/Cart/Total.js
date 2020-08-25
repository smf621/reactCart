import React, { Component } from 'react';

class Total extends Component {

  delGoods(){
    this.props.delGoods()
  }
  render() {
    let {num,totalPrice} = this.props
    return (
      <div>
        <button onClick={this.delGoods.bind(this)}>删除所选商品</button>
        <h2>共选中{num}件商品</h2>
         <h2>总金额:{totalPrice}</h2>
      </div>
    );
  }
}

export default Total;