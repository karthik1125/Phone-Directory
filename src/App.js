import React, { Component } from 'react';
import Add from './Add';
import Subloader from './Subloader';
import './App.css';
var buttonStyle = {
  backgroundColor: "#4cbf5f",
  height:25,
  width:80,
  color:"white"
};
class App extends Component {
  constructor(props){
    super(props);
    this.state={
          addList:[],
          addClick:false,
    }
  }
  callAdder=()=>{
    // console.log("Clicked")
    this.setState({addClick:true});
  }
  handleBack=()=>{
    this.setState({addClick:false});
  }
  handleDelete=(userList)=>{
    this.setState({addList:userList})
  }
  // temp = (value)=>{
  //   console.log("App,temp",value)
  // }
  addSubscribers=(name,phone)=>{
    // console.log("App",name,phone)
    var entry=[name,phone];
    let lists = this.state.addList;
    lists.push(entry);
    this.setState({addList:lists,addClick:false});
    // console.log("Users",this.state.addList)
  }
  render() {
    return (
      <div>
        {(this.state.addClick)
          ?(<Add add={this.addSubscribers} back={this.handleBack} />)
          :( 
            <div>
              <div style={{backgroundColor: "black",height:70,textAlign:"center",color:"white",fontSize:20}}>
               
                <br></br>
                PHONE DIRECTORY
                </div>
        
                <div className="Phone Directory">
                <br></br>
                &nbsp;&nbsp;&nbsp;<button style={buttonStyle} onClick={()=>this.callAdder()}>Add</button>

                <Subloader userList={this.state.addList} deleteUser={this.handleDelete}/>    

              </div>
            </div>
            )
        }
        
      </div>

    );
  }
}


export default App;
