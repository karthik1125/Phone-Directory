import React, { Component } from 'react';
import './App.css';
var buttonStyle = {
  backgroundColor: "#4cbf5f",
  height:25,
  width:80,
  color:"white"
};
var buttonStyle2 = {
  backgroundColor: "gray",
  height:25,
  width:80,
  color:"black"
};
class Add extends Component {
  constructor(props){
    super(props);
    this.state={
        name:'',
        phone:'',
    }
  }
  handleChangeofName=(e)=>{
    this.setState({name:e.target.value})
    // console.log(this.state.name)
  }
  handleChangeofPhone=(e)=>{
    this.setState({phone:e.target.value})
    // console.log(this.state.phone)
  }
  handleSubmit=()=>{
      // console.log("inside handleSubmit",this.state.name,this.state.phone)
      this.props.add(this.state.name,this.state.phone);
      // console.log("After sending",this.state.name,this.state.phone)
  }
  handleBack=()=>{
    this.props.back();
  }

  render() {
    return (
        <div>
            <div>
                <div style={{backgroundColor: "black",height:70,textAlign:"center",color:"white",fontSize:20}}>
                <br></br>
                ADD SUBSCRIBER
                </div>
        
                <div className="Add Subscriber">
                <br></br>
                <br></br>
                &emsp;&emsp;&emsp;&emsp;<button style={buttonStyle2} onClick={()=>this.handleBack()}>Back</button>
                <br></br>
                <br></br>
                    <label>
                    &emsp;&emsp;&emsp;&emsp;Name:
                    &emsp;&emsp;&emsp;&emsp;<input type="text" name="name" onChange={(e) => {this.handleChangeofName(e)}}/>
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                    &emsp;&emsp;&emsp;&emsp;Phone:
                    &emsp;&emsp;&emsp;&emsp;<input type="text" name="phone" onChange={(e) => {this.handleChangeofPhone(e)}}/>
                    </label>
                    <br></br>
                    <br></br>
                    &emsp;&emsp;&emsp;&emsp;<button style={buttonStyle} onClick={()=>this.handleSubmit()}>ADD</button>   
                <br></br>
                <br></br>
                <div style={{color:"#84aae8"}}>
                  &emsp;&emsp;&emsp;&emsp;<b>Subscriber to be Added is :</b> <br></br><br></br>                
                </div>

                &emsp;&emsp;&emsp;&emsp;Name : {this.state.name} <br></br>
                &emsp;&emsp;&emsp;&emsp;Phone: {this.state.phone}
              </div>
            </div>    
        </div>

    );
  }
}


export default Add;
