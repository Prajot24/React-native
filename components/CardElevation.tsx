import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardElevation = () => {
  return (
    <View>
      <Text style={styles.headingtext} >Elevated Card</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
        <View style={styles.cards}>
            <Text style={styles.incards}> Arey </Text>
        </View>
        <View style={styles.cards}>
            <Text style={styles.incards}> Bhai </Text>
        </View>
        <View style={styles.cards}>
            <Text style={styles.incards}> Ab </Text>
        </View>
        <View style={styles.cards}>
            <Text style={styles.incards}> Kitna </Text>
        </View>
        <View style={styles.cards}>
            <Text style={styles.incards}> Scroll </Text>
        </View>
        <View style={styles.cards}>
            <Text style={styles.incards}> Karoge ? </Text>
        </View>

      </ScrollView>
    </View>
  )
}

export default CardElevation

const styles = StyleSheet.create({
    headingtext:{
        
        fontSize: 24,
        fontWeight:'bold',
        textAlign:'center'
    },
    cards:{
      flex:1,
        height:100,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        margin:8,
        backgroundColor: '#FDD4D2',
        borderRadius:5,
        
    },
    container:{
      margin:8
    },
    incards:{
      color:'#1F77B4',
      fontWeight:'bold',
      
    }
    
})