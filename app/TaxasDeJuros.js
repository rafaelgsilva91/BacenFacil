import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableHighlight,
  Platform,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons'

export default class TaxasDeJuros extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true, search: '' };
    this.arrayholder = [];
  }

  componentDidMount() {
    const { navigation } = this.props;
    return fetch('http://hom.defensoria.ms.def.br/dpge-folha-services/api/fontes/listaTodas?tipo='+navigation.getParam('tipo', 'NO-ID'))
      .then(response => response.json())
      .then(responseJson => {
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

  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };

  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function(item) {
      const itemData = item.nome ? item.nome.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      dataSource: newData,
      search: text,
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
    return (
      <View style={styles.viewStyle}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Busque o serviço desejado..."
          value={this.state.search}
        />
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({ item }) => (
            <TouchableHighlight style={styles.itemSelected} onPress={() => {
              this.props.navigation.navigate('DadosBacen', {
                serviceID: item.id,
                title: item.nome,
                description: item.descricao,
                url: item.url,
              });
            }}>
              <View>   
                <Text style={styles.textStyle}>
                    <Ionicons name="md-arrow-dropright-circle" size={20} color="#79b6f2" /> {item.nome}
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
    padding: 15,
    fontSize: 16,
  },

  itemSelected: {   
    backgroundColor: '#fafafa',   
  },
});
