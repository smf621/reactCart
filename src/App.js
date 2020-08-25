import React, { Component } from 'react';
import Table from './Cart/Table'
import Total from './Cart/Total'

class App extends Component {
  constructor() {
    super()
    this.state = {
      checkAll:false,
      list: [
        {
          title: "香蕉",
          count: 1,
          price: 15,
          isChecked: false
        },
        {
          title: "苹果",
          count: 2,
          price: 20,
          isChecked: false
        },
        {
          title: "西瓜",
          count: 1,
          price: 60,
          isChecked: false
        },
      ]
    }
  }
  checkOne(i){
    let list = this.state.list
    list[i].isChecked = !list[i].isChecked
    let flag= list.every(item=>{
      return item.isChecked
    })
    this.setState({
      list,
      checkAll:flag
    })
  }
  //全选
  changeAll(bool){
    this.state.list.forEach(item =>{
      item.isChecked = bool
    })
    this.setState({
      checkAll:bool
    })
  }
  //商品数量
  dec(i){
    let list = this.state.list
    if(list[i].count == 1){
      return
    }
    list[i].count--
    this.setState({
      list
    })
  }
  add(i){
    let list = this.state.list
    list[i].count++
    this.setState({
      list
    })
  }
  //商品数量
  num(){
    return this.state.list.filter(item=>{
      return item.isChecked
    }).length
  }
  //商品总价格
  totalPrice(){
    let arr = this.state.list.filter(item=>{
      return item.isChecked
    })
    let sum = 0
    arr.forEach(item=>{
      sum += item.count * item.price
    })
    return sum
  }
  delGoods(){
    let {list} = this.state
    let arr = list.filter(item=>{
      return !item.isChecked
    })
    if(arr.length ==0){
      this.setState({
        checkAll:false
      })
    }
    this.setState({
      list:arr,

    })
  }

  render() {
    let { list,checkAll } = this.state
    return (
      <div>
        <h1>购物车</h1>
        <Table list={list} 
        changeAll={this.changeAll.bind(this)}
        checkAll={checkAll}
        checkOne={this.checkOne.bind(this)}
        dec={this.dec.bind(this)}
        add={this.add.bind(this)}
        />
        <Total 
          num={this.num()}
          totalPrice={this.totalPrice()}
          delGoods={this.delGoods.bind(this)}
        />
      </div>
    );
  }
}

export default App;