import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';



const MyComponent = ({navigation}) => (
  <FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={() => navigation.navigate('Adicionar')}
  />
);

const styles = StyleSheet.create({
  fab: {

    backgroundColor:"#e7b2a4",
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
},
})

export default MyComponent;
