import React, { Component } from 'react';

class Total extends Component {
  constructor(){
    super()
    this.state = {
      n:0,
      totalPrice:0
    }
  }
  // n(){
  //   // console.log();
  //   return this.props.list.filter(item=>{
  //     return item.isChecked == true
  //   }).length
  // }
  componentWillReceiveProps(nextProps){
    this.state.n = nextProps.list.filter(item=>{
      return item.isChecked == true
    }).length
    let sum = 0
    let arr = nextProps.list.filter(item=>{
      return item.isChecked == true
    })
    arr.forEach(item=>{
      sum += item.price * item.count
    })
    this.state.totalPrice = sum
  }

  delChange(){
    // let arr = this.props.list.filter(item=>{
    //   return !item.isChecked
    // })
    this.props.delChange()

  }


  render() {
    let {n,totalPrice}=this.state
    return (
      <div>
        <button onClick={this.delChange.bind(this)}>删除所选商品</button>
        <h2>共选中{ n}件商品</h2>
         <h2>总金额:{totalPrice}</h2>
      </div>
    );
  }
}

export default Total;