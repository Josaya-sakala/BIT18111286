
import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Charlette,s-Web Custom-Spider-Themed-Jewellery Store</Text>
      <Text>Your Best Jewellery Is Found Here</Text>
    </View>
  );
}

function CustomJewelScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Custom-Jewel</Text>
    </View>
  );
}

function BookingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bookings</Text>
    </View>
  );
}

function AboutUsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>About-Charlette,s-Web</Text>
    </View>
  );
}

function ContactUsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contact-Us</Text>
      <Text>Telephone Line - 2308000</Text>
      <Text>CEO - 0979-124096</Text>
      <Text>Marketing - 0979-124096</Text>
      <Text>Enquires - 0979-124096</Text>
      <Text></Text>
    </View>
  );
}

function HelpScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Our Help Page</Text>
      <Text>Please how may we help you?</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Custom-Jewel" component={CustomJewelScreen} />
        <Tab.Screen name="Bookings" component={BookingsScreen} />
        <Tab.Screen name="Aboust-Charlette,s-Web" component={AboutUsScreen} />
        <Tab.Screen name="Contact-Us" component={ContactUsScreen} />
        <Tab.Screen name="Help" component={HelpScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}