import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { MapView } from 'expo';
   
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, display: 'flex'}}>
        <MapView
            style={{ flex: 1}}
            initialRegion={{
                latitude: 54.971770,
                longitude: -1.623400,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
          <MapView.Marker coordinate={{
                latitude: 54.971770,
                longitude: -1.623400
            }}>
            <MapView.Callout>
              <Text>Valid Skip</Text>
            </MapView.Callout>
          </MapView.Marker>
        </MapView>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
})




export default TabNavigator