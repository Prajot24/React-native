import { View, Text, SafeAreaView, ScrollViewComponent, ScrollView } from 'react-native'
import React from 'react'
import Flatlist from './components/Flatlist'
import CardElevation from './components/CardElevation'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View>
        <Flatlist/>
        <CardElevation/>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App