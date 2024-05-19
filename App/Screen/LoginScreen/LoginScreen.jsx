import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <View style={{
      // internal styling
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,

    }}>
      <Image source={require('./../../../assets/images/logo.png')}
        //external styling
        style={styles.logoImage}
      />
      <Image source={require('./../../../assets/images/ev-charging.png')}
        //external styling
        style={styles.bgImage}
      />
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
})
