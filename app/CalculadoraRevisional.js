import React, { Component } from 'react';
import { Alert, Keyboard, Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Formik } from 'formik';
import { Button, TextInput, Appbar } from 'react-native-paper';

export default class CalculadoraRevisional extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title="Formik & React Native"
          />
        </Appbar.Header>
        <View style={styles.content}>
          <Formik 
            initialValues={{ firstName: '' }} 
            onSubmit={values => {
                Alert.alert(JSON.stringify(values, null, 2));
                Keyboard.dismiss();
              }
            }>
            {({ handleChange, handleSubmit, values }) => (
              <View>
              <TextInput
                onChangeText={handleChange('firstName')}
                value={values.firstName}
                label="First name"
                placeholder="I am ready!"
              />
              <Button onPress={handleSubmit} style={styles.button}>Submit</Button>
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
    backgroundColor: '#ecf0f1',
  },
  content: {
    padding: 16,
  },
  button: {
    marginTop: 16,
  }
});
