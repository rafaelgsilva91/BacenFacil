import React from "react";
import { SafeAreaView, StyleSheet, Text, View} from "react-native";

export default class Sobre extends React.Component {

  constructor(props) {
    super(props);     
  }

  componentDidMount() {    
         
  }

  render() {   
    return (
      <SafeAreaView>     
          <View style={styles.item}>
            <Text style={styles.text}>
              - Aplicativo desenvolvido com o objetivo e finalidade de facilitar o acesso aos webservices do BACEN, já que o acesso pelo portal é trabalhoso.
            </Text>    
            <Text style={styles.text}>
              - O aplicativo pode auxiliar em cálculos revisionais, em versões futuras será implementada uma calculadora para esse fim.
            </Text>   
            <Text style={styles.text}>
              - Desenvolvido e mantido por Rafael Gouveia da Silva.
            </Text>            
          </View>   
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    backgroundColor: "#fafafa",
    flexGrow: 1,
    margin: 4,
    padding: 20
  },
  text: {
    fontSize: 16,   
    color: "#333333"
  }
});
