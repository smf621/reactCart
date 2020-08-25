import React, { Component } from 'react';
import './table.css'

class Table extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  //单选
  checkOne(i){
    this.props.checkOne(i)
  }
  //多选
  checkAll(e){
    this.props.changeAll(e.target.checked)
  }
  //商品数量
  dec(i){
    this.props.dec(i)
  }
  add(i){
    this.props.add(i)
  }

  render() {
    let { list,checkAll } = this.props
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>
                全选
                <input type="checkbox"
                checked={checkAll}
                onChange={this.checkAll.bind(this)} />
              </th>
              <th>商品</th>
              <th>数量</th>
              <th>单价</th>
              <th>金额</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((item, index) => {
                return <tr key={index}>
                  <td><input type="checkbox"
                   checked={item.isChecked} 
                   onChange={this.checkOne.bind(this,index)}
                   />
                   </td>
                  <td>{item.title}</td>
                  <td>
                    <button onClick={this.dec.bind(this,index)}>-</button>
                    {item.count}
                    <button onClick={this.add.bind(this,index)}>+</button>
                  </td>
                  <td>{item.price}</td>
                  <td>{item.count * item.price}</td>
                </tr>
              })
            }
          </tbody>
        </table>

      </div>
    );
  }
}

export default Table;