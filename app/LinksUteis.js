import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableHighlight, Linking } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);      
  }

  componentDidMount() {    
         
  }

  render() {   
    return (
      <SafeAreaView>        
        <TouchableHighlight style={styles.itemSelected} onPress={() => {
          Linking.openURL('http://www.drcalc.net/');
        }}>
          <View style={styles.item}>
            <Text style={styles.text}>
            Dr. Calc
            </Text>                
          </View>
        </TouchableHighlight>  
        <TouchableHighlight style={styles.itemSelected} onPress={() => {
          Linking.openURL('https://www3.bcb.gov.br/CALCIDADAO/publico/exibirFormFinanciamentoPrestacoesFixas.do?method=exibirFormFinanciamentoPrestacoesFixas');
        }}>
          <View style={styles.item}>
            <Text style={styles.text}>
            Calculadora do Cidadão
            </Text>                
          </View>
        </TouchableHighlight>  
        <TouchableHighlight style={styles.itemSelected} onPress={() => {
          Linking.openURL('https://www.bcb.gov.br/');
        }}>
          <View style={styles.item}>
            <Text style={styles.text}>
            BACEN
            </Text>                
          </View>
        </TouchableHighlight>        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    borderRadius: 8,  
    alignItems: "center",
    backgroundColor: "#79b6f2",
    flexGrow: 1,
    margin: 4,
    padding: 20
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#333333"
  }
});
