import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);   
    this.state = {
      
    };
  }

  componentDidMount() {    
         
  }

  render() {   
    return (
      <SafeAreaView>
        <TouchableHighlight style={styles.itemSelected} onPress={() => {
          this.props.navigation.navigate('TaxasDeJuros', {           
            tipo: 'MENSAL',            
          });
        }}>
          <View style={styles.item}>
            <Text style={styles.text}>
            Taxas de Juros Médias Mensais
            </Text>                
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.itemSelected} onPress={() => {
          this.props.navigation.navigate('TaxasDeJuros', {           
            tipo: 'ANUAL',            
          });
        }}>
          <View style={styles.item}>
            <Text style={styles.text}>
            Taxas de Juros Médias Anuais
            </Text>                
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.itemSelected} onPress={() => {
          this.props.navigation.navigate('CalculadoraRevisional');
        }}>
          <View style={styles.item}>
            <Text style={styles.text}>
            Calculadora Revisional
            </Text>                
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.itemSelected} onPress={() => {
          this.props.navigation.navigate('LinksUteis');
        }}>
          <View style={styles.item}>
            <Text style={styles.text}>
            Links Úteis
            </Text>                
          </View>
        </TouchableHighlight>   
        <TouchableHighlight style={styles.itemSelected} onPress={() => {
          this.props.navigation.navigate('Sobre');
        }}>
          <View style={styles.item}>
            <Text style={styles.text}>
            Sobre o APP
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
    backgroundColor: "#5eba7d",
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
