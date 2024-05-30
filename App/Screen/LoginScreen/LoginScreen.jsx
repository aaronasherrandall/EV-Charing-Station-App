import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function LoginScreen() {
  return (
    <View style={{
      // internal styling
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 80,

    }}>
      <Image source={require('./../../../assets/images/logo.png')}
        //external styling
        style={styles.logoImage}
      />
      <Image source={require('./../../../assets/images/ev-charging.png')}
        //external styling
        style={styles.bgImage}
      />
      <View style={{padding:20}}>
        <Text style={styles.heading}>Your ultimate EV charging Station Finder App</Text>
        <Text style={styles.description}>Find an EV charger Station near you, plan your trip and so much more.</Text>
      </View>
      <TouchableOpacity style={styles.button}
      onPress={()=>console.log("Button Clicked")}>
        <Text style={{
          color:Colors.WHITE,
          textAlign: 'center',
          fontFamily: 'outfit',
          fontSize: 17,
        }}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  logoImage:{
    width: 200,
    height: 40,
    objectFit: 'contain',
  },
  bgImage:{
    width: '100%',
    height: 240,
    marginTop: 20,
    objectFit: 'cover'
  },
  heading:{
    fontSize: 25,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    marginTop: 20
  },
  description:{
    fontSize: 17,
    fontFamily: "outfit",
    marginTop: 15,
    textAlign: 'center',
    color: Colors.GRAY,
  },
  button:{
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    display: 'flex',
    borderRadius: 99,
    marginTop: 40,
  }
})
