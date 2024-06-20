//  Using State in with Class base Component 
import React, {Component} from "react";
import './Product.css';

export default class Product extends Component{

    state = {
        cart:[],
        total:0
    }
    currencyOptions = {
        minimumFractionDigits:2,
        maximumFractionDigits:2,
    }
    getTotal = () =>{
        return this.state.total.toLocaleString(undefined, this.currencyOptions)
    }

    render(){
        return(
            <div className="wrapper">
                <div>Shoping Cart:{this.state.cart.length} total items.</div>
                <div>Total: {this.getTotal()}</div>
                <div className="product">
                    <span role="img" arial-label ='ice-cream'>🍦</span>
                </div>
                    <button>Add</button> <button>Remove</button>
            </div>
        )
    }
}
