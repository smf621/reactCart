import React, { Component } from 'react';
import Top from './Top'
import Total from './Total'
import Common from './Common.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
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
  //实现每一个按钮的点击切换
  checked(i){   
    let {list} = this.state
    list[i].isChecked = list[i].isChecked ? false :true
    this.setState({
      list
    })
  }
  //全选
  checkedAll(flag){
     this.state.list.forEach(item=>{
       item.isChecked = !flag
     })
     if(flag == false){
       
     }
  }
  //购物车商品增加和删除
  countAdd(i){
    let {list} = this.state
    list[i].count++
    this.setState({
      list
    })
  }
  countDel(i){
    let {list} = this.state
    if(list[i].count>1){
      list[i].count--
    }
    this.setState({
      list
    })
  }
  //删除所选商品
  delChange(){
    let list = this.state.list.filter(item=>{
      return !item.isChecked
    })
    this.setState({
      list
    })
    
  }



  render() {
    return (
      <div>
        <h1>购物车案例</h1>
        <Top 
        list={this.state.list}
        isChecked={this.checked.bind(this)}
        isCheckAll={this.checkedAll.bind(this)}
        countAdd={this.countAdd.bind(this)}
        countDel={this.countDel.bind(this)}
        />
        <Total 
        list={this.state.list} 
        delChange={this.delChange.bind(this)}
        />
      </div>
    );
  }
}

export default App;