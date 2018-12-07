import React, { Component } from 'react';
import './slots.css'

class Slots extends Component {
    constructor(){
       super()
        this.state = {
            reel1: ["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"],
            reel2: ["lemon", "apple", "lemon", "lemon", "cherry", "apple", "banana", "lemon"],
            reel3:  ["lemon", "apple", "lemon", "apple", "cherry", "lemon", "banana", "lemon"],
            rand1: '',
            rand2: '',
            rand3: '',
            initialCash:10
        }

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        e.preventDefault();
        this.play();
    }
    play() {
        if(this.state.initialCash === 0){
            console.log(' no more cassssshhh')
            return
        }
        this.state.initialCash = this.state.initialCash -1;
        console.log('initial cash: '+ this.state.initialCash)
        this.spinReel();
    };

    spinReel(){
        this.setState({
            rand1: this.state.reel1[Math.floor(Math.random() * this.state.reel1.length)]
        })
        this.setState({
            rand2: this.state.reel2[Math.floor(Math.random() * this.state.reel2.length)]
        })

        this.setState({
            rand3: this.state.reel3[Math.floor(Math.random() * this.state.reel3.length)]
        })
        
        this.compareSlots();
    }
    compareSlots(){
        let cash = this.state.initialCash

        if(this.state.rand1 === "cherry" && this.state.rand2 === "cherry" && this.state.rand3 === "cherry"){
            cash = this.state.initialCash + 50;
    
        }
        else if((this.state.rand1 === "cherry" && this.state.rand2 === "cherry" && this.state.rand3 !== "cherry") || (this.state.rand2 === "cherry" && this.state.rand3 === "cherry" && this.state.rand1 !== "cherry" )){
            cash = this.state.initialCash + 40;
        }
        else if(this.state.rand1 === "apple" && this.state.rand2 === "apple" && this.state.rand3 === "apple"){
            cash = this.state.initialCash + 20;
        }
        else if((this.state.rand1 === "apple" && this.state.rand2 === "apple" && this.state.rand3 !== "apple") || (this.state.rand2 === "apple" && this.state.rand3 === "apple" && this.state.rand1 !== "apple" )){
            cash = this.state.initialCash + 40;
        }
        else if(this.state.rand1 === "banana" && this.state.rand2 === "banana" && this.state.rand3 === "banana"){
            cash = this.state.initialCash + 15;
        }
        else if((this.state.rand1 === "banana" && this.state.rand2 === "banana" && this.state.rand3 !== "banana") || (this.state.rand2 === "banana" && this.state.rand3 === "banana" && this.state.rand1 !== "banana" )){
            cash= this.state.initialCash + 40;
        }
        else if(this.state.rand1 === "lemon" && this.state.rand2 === "lemon" && this.state.rand3 === "lemon"){
            cash = this.state.initialCash + 50;

        }
        this.setState({
            initialCash: cash
        })
        console.log(this.state.initialCash)
    }

  render() {

    return (
      <div>
        <h2>Question 4</h2>
            <div className="slots-container">
                <div className="slot"><h1>{this.state.rand1}</h1></div>
                <div className="slot"><h1>{this.state.rand2}</h1></div>
                <div className="slot"><h1>{this.state.rand3}</h1></div>
            </div>
            <button onClick={this.handleClick} > Play</button>
            <hr></hr>

            <h5>You've got {this.state.initialCash} coins!</h5>
      </div>
    );
  }
}



export default Slots;
