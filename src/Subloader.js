import React, { Component } from 'react';
import './App.css';
var buttonStyle = {
    backgroundColor: "red",
    height:25,
    width:80,
    color:"white"
  };
class Subloader extends Component {
  constructor(props){
    super(props);
    this.state={
        name:'',
        phone:'',
    }
  }
  handleDelete=(index)=>{
      let userList = this.props.userList;
      userList = userList.filter((_, i) => i !== index)
      // console.log("index",index,userList,this.props.userList)
      this.props.deleteUser(userList);
  }
  render() {
    return (
        <div>
            <br></br>
            <table cellSpacing="15" padding= "5px">
            <tbody>
            <tr>
              <th>Name</th>
              <th>Phone</th> 
            </tr>
              {this.props.userList.map((item,index) =>(
                <tr>
                  <td >{item[0]}</td>
                  <td >{item[1]}</td>
                  <td ><button style={buttonStyle} onClick={()=>this.handleDelete(index)}>DELETE</button></td>
                  
                </tr>

              ))}
            </tbody>

            </table>
            {/* {this.props.userList.map((item,index) => (<li key={index.toString()}>{item[0]}&emsp;&emsp;&emsp;&emsp;{item[1]}&emsp;&emsp;&emsp;&emsp;<button style={buttonStyle} onClick={()=>this.handleDelete(index)}>DELETE</button></li>))} */}
        </div>

    );
  }
}


export default Subloader;
