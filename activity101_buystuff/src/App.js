
import React, {Component} from "react";
import Header from "./Header";
import InventoryItem from "./InventoryItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {items: {shoe: {name: "Shoe", price: 50000}, sock: {name: "Sock", price: 10000}}};
  }

  render() {
    return (
      <div>
        <Header title="BuyStuff"/>
        <InventoryItem itemname={this.state.items.shoe.name} price={this.state.items.shoe.price}/>
        <InventoryItem itemname={this.state.items.sock.name} price={this.state.items.sock.price}/>
      </div>
    );
  }
}

export default App;
