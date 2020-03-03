import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'

export default class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Button title="Electronics" onPress={() => this.props.navigation.navigate('Electronics')} />
        <Text>............................................................................</Text>
        <Text>............................................................................</Text>
        <Button title="Books" onPress={() => this.props.navigation.navigate('Books')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
