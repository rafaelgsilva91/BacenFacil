import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableHighlight,
  Platform,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default class Dadosbacen extends React.Component { 
    
    constructor(props) {
      super(props);
      this.state = { isLoading: true, search: '' };
      this.arrayholder = [];     
    }

    componentDidMount() {
      const { navigation } = this.props;
      return fetch(navigation.getParam('url', 'NO-ID'))
        .then(response => response.json())
        .then(responseJson => {
          //Ordena pela data
          responseJson.sort(function(a, b) {
            a = new Date(a.data);
            b = new Date(b.data);
            return a>b ? -1 : a<b ? 1 : 0;
          });  
          this.setState(
            {
              isLoading: false,
              dataSource: responseJson,
            },
            function() {
              this.arrayholder = responseJson;
            }
          );
        })
        .catch(error => {
          console.error(error);
        });
    }

    ListViewItemSeparator = () => {
      return (
        <View
          style={{
            height: 0.5,
            backgroundColor: '#79b6f2',
          }}
        />
      );
    };
  
    render() {
      if (this.state.isLoading) {
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <ActivityIndicator />
          </View>
        );
      }

      const { navigation } = this.props;
      return (       
        <View style={styles.viewStyle}>     
          <Text style={styles.title}>{JSON.stringify(navigation.getParam('title', 'NO-ID'))}</Text> 
          <FlatList
            data={this.state.dataSource}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            renderItem={({ item }) => (
              <TouchableHighlight style={styles.itemSelected} onPress={() => {
                this.props.navigation.navigate('CalculadoraRevisional', {
                  taxaBacen: item.valor,
                });
              }}>            
                <View style={styles.item}> 
                  <FontAwesomeIcon icon="caret-right" size={22} style={styles.icon}/>    
                  <Text style={styles.textStyle}>
                    {item.data} - {item.valor}%
                  </Text>
                </View>
              </TouchableHighlight>           
            )}
            enableEmptySections={true}
            style={{ marginTop: 10 }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    }  
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS == 'ios' ? 30 : 0,
  },

  textStyle: {
    fontSize: 16,
    color: "#333",
    marginLeft:10,
  },

  itemSelected:{
    
  },

  item: {
    borderRadius: 8,  
    alignItems: "center",
    backgroundColor: "#fff",
    flexGrow: 1,
    flexDirection: 'row',
    margin: 3,
    padding: 10,
  },
  
  icon: {
    color: '#333',
  },

  title: {
    margin: 8,
    fontSize: 16,
    color: '#3498db',
    fontWeight: 'bold',
  },
});
