import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Platform,TouchableNativeFeedback} from 'react-native';
import { color } from 'react-native-reanimated';

const CategoryGridTile = props =>{
    let TouchableCmp = TouchableOpacity;
    if(Platform.OS==='android' && Platform.Version >= 21){
        TouchableCmp=TouchableNativeFeedback;
    }
    return(
        <View style={styles.gridItem}>
        <TouchableCmp
            style={{flex:1}}
            onPress= {props.onSelect}
            >
            <View style={{...styles.container,...{backgroundColor:props.color}}}>
              <Text style={styles.title} numberOfLines={2}> {props.title} </Text>
            </View>
            </TouchableCmp>
            </View>
    )

}

const styles= StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150,
        borderRadius:10,
        overflow:'hidden',
        elevation:5
    },
    container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset: {width:0,height:2},
        shadowRadius:10,
        elevation:3,
        padding:15,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:18,
        textAlign:'right'
    }

});

export default CategoryGridTile;