import React, { Component } from 'react';
import { Alert, Keyboard, Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Button, TextInput } from 'react-native-paper';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextInputMask from 'react-native-text-input-mask';

const FormCalculadora = Yup.object({
  taxaBacen: Yup.number()              
  .required('Preencha esse campo'),
  taxaContrato: Yup.number()              
  .required('Preencha esse campo'),
  vlrContrato: Yup.number()              
  .required('Preencha esse campo'),
  qdteParcela: Yup.number()              
  .required('Preencha esse campo'),
  vlrParcela: Yup.number()              
  .required('Preencha esse campo'),
});

export default class CalculadoraRevisional extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Formik    
            initialValues={{ taxaBacen: '', taxaContrato: '', vlrContrato: '', qdteParcela: '', vlrParcela: '' }} 
            validationSchema={FormCalculadora}
            onSubmit={values => {
                Alert.alert(JSON.stringify(values, null, 2));
                Keyboard.dismiss();
            }}>
            {({ handleChange, handleBlur, handleSubmit, touched, errors, values }) => (
              <View>
              <TextInput
                onChangeText={handleChange('taxaBacen')}
                onBlur={handleBlur('taxaBacen')}
                value={values.taxaBacen}
                render={props =>
                    <TextInputMask
                    {...props}
                    mask="+[00] [000] [000] [000]"
                    />
                }
                style={styles.input}
                label="Taxa Bacen"
                placeholder="Informe a taxa do Bacen!"
              />
              {touched.taxaBacen && errors.taxaBacen ? (
                <Text style={styles.error}>{errors.taxaBacen}</Text>
              ) : null}
              <TextInput
                onChangeText={handleChange('taxaContrato')}
                onBlur={handleBlur('taxaContrato')}
                value={values.taxaContrato}
                style={styles.input}
                label="Taxa do Contrato"
                placeholder="Informe a taxa do contrato!"
              />
              {touched.taxaContrato && errors.taxaContrato ? (
                <Text style={styles.error}>{errors.taxaContrato}</Text>
              ) : null}
              <TextInput
                onChangeText={handleChange('vlrContrato')}
                onBlur={handleBlur('vlrContrato')}
                value={values.vlrContrato}
                style={styles.input}
                label="Valor do Contrato"
                placeholder="Informe o valor do contrato!"
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
              />
              {touched.qdteParcela && errors.qdteParcela ? (
                <Text style={styles.error}>{errors.qdteParcela}</Text>
              ) : null}
              <TextInput
                onChangeText={handleChange('vlrParcela')}
                onBlur={handleBlur('vlrParcela')}
                value={values.vlrParcela}
                style={styles.input}
                label="Valor da Parcela"
                placeholder="Informe o valor da parcela!"
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
  },
  error: {
    margin: 8,
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
  },
});
