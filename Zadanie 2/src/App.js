import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

class App extends Component {
  
  state = {
    buttonText: "Pokaż",
    show: false
  }
  onPress = () => {
    if (this.state.buttonText === "Pokaż"){
      this.setState({
        buttonText: 'Ukryj',
        show: true
      })
    } else {
      this.setState({
        buttonText: 'Pokaż',
        show: false
      })
    }
  } 
  
  render() {
      return (
      <View style={styles.app}>
        <Text style={styles.text}>
          Zadanie 2
        </Text>
        <TouchableOpacity 
          onPress={this.onPress}
          style={styles.button}>
          <Text>{this.state.buttonText}</Text>
        </TouchableOpacity>
        {this.state.show &&
          <Text style={styles.text}>
            Nazywam się <br/>
            <b>Jakub Niemiec</b>
          </Text>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: "auto",
    maxWidth: 500
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default App;
