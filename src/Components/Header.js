import { StyleSheet,  View, Image } from 'react-native'
import React from 'react'
import colores from '../Global/colores'
import {useFonts} from 'expo-font'

const Header = () => {

  const [fontsLoaded] = useFonts({
    Lato: require('../../assets/Fonts/Lato-Bold.ttf')
  })

  if(!fontsLoaded)return null

  return (
    <View style={styles.container}>
      <View style={styles.containermenor}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={require('../../assets/logo.png')}
        />
      </View>
      
    
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor:colores.cuatro,
        width: "100%",
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,
        flexDirection: 'row',
      },
      titulo: {
        fontSize: 30,
        color: colores.letras,
        fontWeight: 'bold',
        fontFamily: 'Lato'
      },
      image:{
        width: 90 ,
        height: 60,
        marginTop: 10,
        
      }
    
})