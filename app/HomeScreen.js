import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

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
            <FontAwesomeIcon icon="percent" size={22} style={styles.icon}/>
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
            <FontAwesomeIcon icon="percent" size={22} style={styles.icon}/>
            <Text style={styles.text}>
            Taxas de Juros Médias Anuais
            </Text>                
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.itemSelected} onPress={() => {
          this.props.navigation.navigate('CalculadoraRevisional');
        }}>
          <View style={styles.item}>
            <FontAwesomeIcon icon="calculator" size={22} style={styles.icon}/>
            <Text style={styles.text}>
            Calculadora Revisional
            </Text>                
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.itemSelected} onPress={() => {
          this.props.navigation.navigate('LinksUteis');
        }}>
          <View style={styles.item}>
            <FontAwesomeIcon icon="globe" size={22} style={styles.icon}/>
            <Text style={styles.text}>
            Links Úteis
            </Text>                
          </View>
        </TouchableHighlight>   
        <TouchableHighlight style={styles.itemSelected} onPress={() => {
          this.props.navigation.navigate('Sobre');
        }}>
          <View style={styles.item}>
            <FontAwesomeIcon icon="info" size={22} style={styles.icon}/>
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
    backgroundColor: "#3498db",
    flexGrow: 1,
    flexDirection: 'row',
    margin: 4,
    padding: 20,
  },
  text: {
    fontSize: 16,
    color: "#FFF",
    marginLeft:10,
  },
  icon: {
    color: '#333',
  },
 });
