import React from 'react';
import { View, Text } from 'react-native';

function App() {
  return (
    <View style={{backgroundColor:'blue', height: '100%', width: '300px'}}>
      
      <View style={{ backgroundColor: 'orange', width: '100%', heigth:'20%' }}>
        <Text>COMPONENTE VIEW</Text>
        <Text>Luiz Fernando Corcini</Text>
        <Text>dd/mm/aaaa</Text>
      </View>

      <View style={{ backgroundColor: 'greenyellow', height: '70%', width: '100px'}}>
        <Text>COMPONENTE VIEW</Text>
        <Text>Luiz Fernando Corcini</Text>
        <Text>dd/mm/aaaa</Text>
      </View>

      <View style={{ backgroundColor: 'cornflowerblue', height: '10%', width:'200px' }}>
        <Text>COMPONENTE VIEW</Text>
        <Text>Luiz Fernando Corcini</Text>
        <Text>dd/mm/aaaa</Text>
      </View>

    </View>
  );
}

export default App;