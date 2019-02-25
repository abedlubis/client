import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator, StatusBar, AsyncStorage } from 'react-native'

export default class AuthLoading extends Component {
    constructor() {
      super();
      this.CheckLogin();
    }
  
    CheckLogin = async () => {
      const userToken = await AsyncStorage.getItem('token');
      this.props.navigation.navigate(userToken ? 'Main' : 'Login');
    };
  
    // Render any loading content that you like here
    render() {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});