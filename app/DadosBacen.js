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
import { Ionicons } from '@expo/vector-icons';

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
            backgroundColor: '#333',
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
          <Text style={{ fontSize: 16, color : 'blue' }}>Serviço : {JSON.stringify(navigation.getParam('title', 'NO-ID'))}</Text> 
          <FlatList
            data={this.state.dataSource}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            renderItem={({ item }) => (
              <TouchableHighlight style={styles.itemSelected} onPress={() => {alert(item.data +' - '+ item.valor+'%')}}>            
                <View>     
                  <Text style={styles.textStyle}>
                    <Ionicons name="md-arrow-dropright-circle" size={20} color="#5eba7d" /> {item.data} - {item.valor}%
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
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginTop: Platform.OS == 'ios' ? 30 : 0,
  },

  textStyle: {
    fontSize : 14,
    padding: 8,
  },

  itemSelected: {   
    backgroundColor: '#fafafa',   
  },
});
