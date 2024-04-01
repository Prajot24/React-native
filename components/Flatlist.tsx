import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flatlist = () => {
  return (
    
    <View>
      <Text style={styles.headingtext}>Flat list</Text>
      <View style={styles.container}>
            <View style={[styles.flatcard, styles.redcard]}>
                <Text>Red</Text>
            </View>
            <View style={[styles.flatcard, styles.bluecard]}>
                <Text>Blue</Text>
            </View>
            <View style={[styles.flatcard, styles.greencard]}>
                <Text>Green</Text>
            </View>
      </View>
    </View>
    
  )
}

export default Flatlist

const styles = StyleSheet.create({
    headingtext:{
        
        fontSize: 24,
        fontWeight:'bold',
        textAlign:'center'
    },
    container:{
        flexDirection:'row',
        marginHorizontal:7
        // backgroundColor:'#FCF6B1',
        // borderRadius:5
    },
    flatcard:{
        flex:1,
        height:100,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        margin:8,
        borderRadius:5

    },
    redcard:{
        backgroundColor:'#CC5B44'
    },
    bluecard:{
        backgroundColor:'#93CCE8'
    },
    greencard:{
        backgroundColor:'#A9E5BB'
    }


})