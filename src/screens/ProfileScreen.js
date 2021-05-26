import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const Dietary = (props) => {
    const {diets} = props;
    return (
        <View style = {styles.info}>
            {diets.map(diet =>
                <View style = {styles.infoContainer}>
                    <Text style = {styles.infoText}>{diet}</Text>
                </View>
            )}
        </View>
    );
}

const exampleDiet = ["vegan", "gluten-free"];


export const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require('../../assets/images/user.png')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>John Doe</Text>
              <Dietary diets={exampleDiet}/>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Favourite Restaurants</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text></Text> 
              </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#ffd966",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop: 130
  },
  name:{
    fontSize:22,
    color: "#ffffff",
    shadowColor: "#696969",
    shadowOffset: {
        width: 0,
        height: 1
    },
    shadowOpacity:0.8,
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:30,
  },
  info: {
    marginTop:10,
    height:20,
    justifyContent: 'space-evenly',
    alignContent: 'center',
    flexDirection: 'row',
    marginBottom:10,
    width:300,
  },
  infoContainer: {
    height:25,
    alignItems: 'center',
    justifyContent: 'center',
    width:90,
    borderRadius:20,
    marginHorizontal:10,
    backgroundColor: "#ffd966",
  },
  infoText: {
    fontSize:12,
    color: "#696969",
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:130,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:350,
    borderRadius:20,
    backgroundColor: "#ffffff",
    shadowColor: "#696969",
    shadowOffset: {
        width: 0,
        height: 1
    },
    shadowOpacity:0.8,
  },
});