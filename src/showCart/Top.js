import React, { Component } from 'react';

class Top extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chenckAll:false,
    }

  }
  //单选按钮全部选中后全选按钮变为全选  componentWillReceiveProps
  componentWillReceiveProps(nextProps){
    let chenckAll = nextProps.list.every(item=>{
      return item.isChecked
    })
    this.setState({
      chenckAll
    })
    //当数组长度为零，让全选变为false
    if(nextProps.list.length==0){
      this.setState({
        chenckAll:false
      })
    }
  }

  isChecked(i){
    this.props.isChecked(i)
  }
  //点击全选按钮，燃气全选状态
  isCheckAll(e){
    // console.log(e.target.checked);
    this.setState({
      chenckAll:!this.state.chenckAll
    })
    this.props.isCheckAll(this.state.chenckAll)
  }
  //商品数量的增加和删除
  countAdd(i){
    this.props.countAdd(i)
  }
  countDel(i){
    this.props.countDel(i)
  }


  render() {
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>全选<input type="checkbox"
               checked={this.state.chenckAll} 
               onChange={this.isCheckAll.bind(this)}
               />
               </th>
              <th>商品</th>
              <th>数量</th>
              <th>单价</th>
              <th>金额</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.list.map((item, index) => {
               return <tr key={index}>
                  <td><input type="checkbox" 
                  checked={item.isChecked} 
                  onChange={this.isChecked.bind(this,index)} />
                  </td>
                  <td>{item.title}</td>
                  <td>
                    <button onClick={this.countDel.bind(this,index)}>-</button>
                    {item.count}
                    <button onClick={this.countAdd.bind(this,index)} >+</button>
                  </td>
                  <td>{item.price}</td>
                  <td>{item.price * item.count}</td>
                </tr>
              })
            }
          </tbody>
        </table >
      </div >
    );
  }
}

export default Top;