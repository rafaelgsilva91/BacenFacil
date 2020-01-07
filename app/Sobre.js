import React from "react";
import { SafeAreaView, StyleSheet, Text, View} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default class Sobre extends React.Component {

  constructor(props) {
    super(props);     
  }

  componentDidMount() {    
         
  }

  render() {   
    return (
      <SafeAreaView>     
          <View style={styles.viewStyle}>
            <FontAwesomeIcon icon="info" size={22} style={styles.icon}/>
            <Text style={styles.text}>
              - Aplicativo desenvolvido com o objetivo de facilitar o acesso aos webservices do BACEN, já que o acesso pelo portal é pouco amigável.
            </Text>    
            <Text style={styles.text}>
              - O aplicativo pode auxiliar em cálculos revisionais, pois possui uma calculadora para esse fim.
            </Text>   
            <Text style={styles.text}>
              - Desenvolvido e mantido por Rafael Gouveia da Silva (desenvolvedor.rafael@gmail.com).
            </Text>            
          </View>   
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    alignItems:"center",
    flex: 1,
    backgroundColor: '#fff',
    marginTop:30
  },
  text: {
    margin: 8,
    fontSize: 16,
    color: '#333',
  },
  icon: {
    color: '#333',
  }
});
