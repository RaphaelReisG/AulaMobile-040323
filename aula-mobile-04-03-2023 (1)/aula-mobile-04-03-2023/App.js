import React, { Component } from 'react';
import { View, Text, Button, Pressable} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: 'Raphael',
      valor: 0
    };


    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }
  
  aumentar(){
    var ok = this.state.valor + 1
    this.setState({
      valor: ok
    });
  }

  diminuir(){
    var ok = this.state.valor - 1
    if(this.state.valor>0){
      this.setState({
        valor: ok
      });
    }
  }


  render(){
    return(
      <View style={{ backgroundColor: "black",  margin: 20}}>
        <Text style={{fontSize: 28, color: 'red', textAlign: 'center'}}>
          Contador de pessoas
        </Text>
        <Text style={{fontSize: 200, color: 'red', textAlign: 'center'}}>
           {this.state.valor}
        </Text>


        <Pressable style={{ backgroundColor: "red", textAlign: 'center'}}  onPress={this.aumentar}>
          <Text style={{fontSize: 40 }}>
           +
          </Text>
        </Pressable>
        <Text style={{fontSize: 28, textAlign: 'center'}}>
          -
        </Text>
        <Pressable style={{ backgroundColor: "red", textAlign: 'center'}}  onPress={this.diminuir}>
          <Text style={{fontSize: 40 }}>
           -
          </Text>
        </Pressable>


        <Text style={{fontSize: 40, color: 'red', textAlign: 'center'}}>
          {this.state.nome}
        </Text>

      </View>
    )
  }
}


export default App;
