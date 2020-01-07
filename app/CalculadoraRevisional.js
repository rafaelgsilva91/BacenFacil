import React, { Component } from 'react';
import { Alert, Keyboard, Text, View, StyleSheet, TouchableHighlight, Modal} from 'react-native';
import { Constants } from 'expo';
import { Button, TextInput } from 'react-native-paper';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import NumberFormat from 'react-number-format';
import { TextInputMask } from 'react-native-masked-text';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const FormCalculadora = Yup.object({
  taxaBacen: Yup.string()              
  .required('Preencha esse campo'),
  taxaContrato: Yup.string()              
  .required('Preencha esse campo'),
  vlrContrato: Yup.string()              
  .required('Preencha esse campo'),
  qdteParcela: Yup.number()              
  .required('Preencha esse campo'),
  vlrParcela: Yup.string()              
  .required('Preencha esse campo'),
});

export default class CalculadoraRevisional extends Component {
  constructor(props) {
    super(props);   
    const { navigation } = this.props;
    let taxaParam = navigation.getParam('taxaBacen', 'NO-ID');
    taxaParam = parseFloat(taxaParam).toFixed(2);
    taxaParam = taxaParam.replace(".", ",");
    this.state = {
      modalVisible: false,
      vlrParcelaReal: 0,
      vlrCobradoMaior: 0,
      taxaBacen: taxaParam.toString()
    };
  }

  componentDidMount() {
        
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  calcularValores(montante, taxa, qdteParcela, vlrParcela) {
    let vlrParcelaReal, vlrCobradoMaior;
    montante = montante.replace(".", "").replace(",", ".");
    montante = parseFloat(montante);
    vlrParcela = vlrParcela.replace(".", "").replace(",", ".");
    vlrParcela = parseFloat(vlrParcela);
    taxa = taxa.replace(".", "").replace(",", ".");
    taxa = parseFloat(taxa) / 100;
    //Vlr Parcela Real
    vlrParcelaReal = (montante * taxa)/(1 - Math.pow(1/(1 + taxa), qdteParcela));
		vlrParcelaReal = Math.round(vlrParcelaReal*100)/100;
    //Vlr a maior
    vlrCobradoMaior = (vlrParcela * qdteParcela) - (vlrParcelaReal * qdteParcela);
    vlrCobradoMaior = Math.round(vlrCobradoMaior*100)/100;
    
    this.setState({vlrParcelaReal: vlrParcelaReal});
    this.setState({vlrCobradoMaior: vlrCobradoMaior});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
        
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text style={styles.title}>Como deveria ser, conforme taxas do Bacen: </Text>
              <Text style={styles.text}>Valor da parcela: </Text>
              <NumberFormat
                  value={this.state.vlrParcelaReal}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'R$'}
                  renderText={value => <Text style={styles.text}>{value}</Text>} 
              /> 
              <Text style={styles.text}>Valor cobrado a mais: </Text>
              <NumberFormat
                  value={this.state.vlrCobradoMaior}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'R$'}
                  renderText={value => <Text style={styles.text}>{value}</Text>} 
              /> 
              <Button onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }} 
                style={styles.button}
              >
                Voltar
              </Button>
            </View>
          </View>
        </Modal>

          <Formik    
            initialValues={{ taxaBacen: this.state.taxaBacen, taxaContrato: '', vlrContrato: '', qdteParcela: '', vlrParcela: '' }} 
            validationSchema={FormCalculadora}
            onSubmit={values => {
                console.log(JSON.stringify(values, null, 2));
                this.setModalVisible(true);
                this.calcularValores(values.vlrContrato, values.taxaBacen, values.qdteParcela, values.vlrParcela);
                Keyboard.dismiss();
            }}>
            {({ handleChange, handleBlur, handleSubmit, touched, errors, values }) => (
              <View>
              <TextInput
                onChangeText={handleChange('taxaBacen')}
                onBlur={handleBlur('taxaBacen')}
                value={values.taxaBacen}
                style={styles.input}
                label="Taxa Bacen (%)"
                placeholder="Informe a taxa do Bacen!"
                render={props =>
                  <TextInputMask
                    type={'money'}
                    options={{
                      unit: '',
                      suffixUnit: ''
                    }}
                    style={styles.inputMask}
                    value={values.taxaBacen}
                    onChangeText={handleChange('taxaBacen')}
                  />    
                }
              /> 
              {touched.taxaBacen && errors.taxaBacen ? (
                <Text style={styles.error}>{errors.taxaBacen}</Text>
              ) : null}
              <TextInput
                onChangeText={handleChange('taxaContrato')}
                onBlur={handleBlur('taxaContrato')}
                value={values.taxaContrato}
                style={styles.input}
                label="Taxa do Contrato (%)"
                placeholder="Informe a taxa do contrato!"
                render={props =>
                  <TextInputMask
                    type={'money'}
                    options={{
                      unit: '',
                      suffixUnit: ''
                    }}
                    style={styles.inputMask}
                    value={values.taxaContrato}
                    onChangeText={handleChange('taxaContrato')}
                  />    
                }
              />
              {touched.taxaContrato && errors.taxaContrato ? (
                <Text style={styles.error}>{errors.taxaContrato}</Text>
              ) : null}
              <TextInput
                onChangeText={handleChange('vlrContrato')}
                onBlur={handleBlur('vlrContrato')}
                value={values.vlrContrato}
                style={styles.input}
                label="Valor do Contrato (R$)"
                placeholder="Informe o valor do contrato!"
                render={props =>
                  <TextInputMask
                    type={'money'}
                    options={{
                      unit: '',
                      suffixUnit: ''
                    }}
                    style={styles.inputMask}
                    value={values.vlrContrato}
                    onChangeText={handleChange('vlrContrato')}
                  />    
                }
              />
              {touched.vlrContrato && errors.vlrContrato ? (
                <Text style={styles.error}>{errors.vlrContrato}</Text>
              ) : null}
              <TextInput
                onChangeText={handleChange('qdteParcela')}
                onBlur={handleBlur('qdteParcela')}
                value={values.qdteParcela}
                style={styles.input}
                label="Qtde. de Parcelas"
                placeholder="Informe a qtde. parcelas!"
                render={props =>
                  <TextInputMask
                    type={'only-numbers'}
                    style={styles.inputMask}
                    value={values.qdteParcela}
                    onChangeText={handleChange('qdteParcela')}
                  />    
                }
              />
              {touched.qdteParcela && errors.qdteParcela ? (
                <Text style={styles.error}>{errors.qdteParcela}</Text>
              ) : null}
              <TextInput
                onChangeText={handleChange('vlrParcela')}
                onBlur={handleBlur('vlrParcela')}
                value={values.vlrParcela}
                style={styles.input}
                label="Valor da Parcela (R$)"
                placeholder="Informe o valor da parcela!"
                render={props =>
                  <TextInputMask
                    type={'money'}
                    options={{
                      unit: '',
                      suffixUnit: ''
                    }}
                    style={styles.inputMask}
                    value={values.vlrParcela}
                    onChangeText={handleChange('vlrParcela')}
                  />    
                }
              />
              {touched.vlrParcela && errors.vlrParcela ? (
                <Text style={styles.error}>{errors.vlrParcela}</Text>
              ) : null}
              <Button onPress={handleSubmit} style={styles.button}>
                Calcular
              </Button>
              </View>
            )}
          </Formik>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  button: {
    marginTop: 16,
  },
  input: {
    height: 50,
    paddingHorizontal: 8,
    width: '100%',
    borderColor: '#CCC',
    borderWidth: 1,
    backgroundColor: '#fff',
    marginTop: 5
  },
  inputMask: {
    height: 50,
    paddingHorizontal: 8,
    paddingTop: 20
  },
  error: {
    margin: 8,
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
  },
  title: {
    margin: 8,
    fontSize: 16,
    color: '#3498db',
    fontWeight: 'bold',
  },
  text: {
    margin: 8,
    fontSize: 16,
    color: '#333',
  },
});
