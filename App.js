import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>

    <Text style={styles.naslov}>
      Anamarija Puhek <br/> <br/>
    </Text>
    <Text style={styles.info}>
      Datum rođenja: 23/10/1997 <br/>
      Email: ampuhek@gmail.com <br/>
      Broj telefona: (+385)977521571 <br/>
      <hr/>
    </Text>

    <View style={styles.maincontainer}>

    <View style={styles.prvi}>

      <Text style={styles.text}>Iskustvo </Text> <br/>

       <Text style={styles.popis}>
        • 2020. - ... Software developer u Hammer d.o.o. <br/> <br/>
        • 2020. Studentska praksa u Hammer d.o.o. <br/> <br/>
        • 2019. Hrvatsko Narodno Kazalište u Osijeku <br/> <br/>
        • 2016. Gradsko kazalište u Županji
       </Text>
    </View>

    <View style={styles.middle}>
    <hr/>
    </View>

    <View style={styles.drugi}>

        <Text style={styles.text}> Obrazovanje </Text>  <br/>

      <Text style={styles.popis}>
        • 2022./2023. Diplomski studij Nakladništvo & IT <br/> <br/>
        • 2021/2022. Preddiplomski studij Informatologija <br/> <br/>
        • 2012.-2016. Opća Gimnazija Županja <br/> <br/>
        • 2004.-2011. Glazbena škola Srećko Albini Županja
       </Text>
      

    </View>
    
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  maincontainer : {
    flex: 1,
    //  justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  prvi: {
    width: '50%',
   alignItems: "center",
   backgroundColor: '#D1CFCF',
   marginTop: 10,
  },

  drugi: {
  width: '50%',
  alignItems: "center",
   backgroundColor: '#D1CFCF',
   marginTop: 10,
  },
  middle: {
    color: 'white',
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'times new roman',
    fontWeight: 'bold',
  },
  naslov: {
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center',
    fontStyle: 'italic',
    fontFamily: 'times new roman',
  },
  info: {
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'left',
    fontStyle: 'italic',
    fontFamily: 'times new roman',
  },
  popis: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'left',
    fontStyle: 'italic',
    fontFamily: 'times new roman',
  }
});
