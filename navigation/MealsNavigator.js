import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Text,Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavouritesScreen from '../screens/FavouritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

const MealsNavigator = createStackNavigator({
    Categories:CategoriesScreen,
    CategoryMeals:CategoryMealsScreen,
    MealDetail:MealDetailScreen
},
{
    mode:'modal',
    // initialRouteName:'Categories',
  defaultNavigationOptions:{
      
    headerStyle:{
        backgroundColor:Platform.OS==='android'?Colors.primaryColor:''
    },
    headerTitleStyle:{
      fontFamily:'open-sans-bold'
    },
    headerBackTitleStyle:{
      fontFamily:'open-sans'
    },
    headerTintColor:Platform.OS==='android'?'white':Colors.primaryColor
  }
}
);

const FavNavigator = createStackNavigator({
  Favourites:FavouritesScreen,
  MealDetail:MealDetailScreen
},
{
  mode:'modal',
  // initialRouteName:'Categories',
defaultNavigationOptions:{
    
  headerStyle:{
      backgroundColor:Platform.OS==='android'?Colors.primaryColor:''
  },
  headerTitleStyle:{
    fontFamily:'open-sans-bold'
  },
  headerBackTitleStyle:{
    fontFamily:'open-sans'
  },
  headerTintColor:Platform.OS==='android'?'white':Colors.primaryColor
 }
}
);

const tabScreenConfig={
  Meals : {screen:MealsNavigator, navigationOptions:{
    tabBarIcon:(tabInfo) =>{
      return (
      <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
      );
    },
    tabBarColor:Colors.primaryColor,
    tabBarLabel:Platform.OS==='android'?<Text style={{fontFamily:'open-sans-bold'}}>Meals</Text>:'Meals'
    }
  },
  Favourites : {screen:FavNavigator, navigationOptions:{
    tabBarLabel:'Favourites!',
    tabBarIcon:(tabInfo) =>{
      return (
      <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
      );
    },
     tabBarColor:Colors.accentColor,
     tabBarLabel:Platform.OS==='android'?<Text style={{fontFamily:'open-sans-bold'}}>Favourites</Text>:'Favourites'

  }
}
  
}

const MealsFavTabNavigator =Platform.OS ==='android'
?createMaterialBottomTabNavigator(tabScreenConfig,{
  activeTintColor:Colors.accentColor,
  shifting:true
})
: createBottomTabNavigator(tabScreenConfig,{
 
  tabBarOptions:{
    activeTintColor:'white'
  }
}
);

const FiltersNavigator=createStackNavigator({
  Filters:FiltersScreen
},
{
  // mode:'modal',
defaultNavigationOptions:{
    
  headerStyle:{
      backgroundColor:Platform.OS==='android'?Colors.primaryColor:''
  },
  headerTitleStyle:{
    fontFamily:'open-sans-bold'
  },
  headerBackTitleStyle:{
    fontFamily:'open-sans'
  },
  headerTintColor:Platform.OS==='android'?'white':Colors.primaryColor
}
});

const MainNavigator = createDrawerNavigator({
  MealsFavs:{
    screen: MealsFavTabNavigator,
    navigationOptions:{
      drawerLabel:'Meals'
    }
  },
  Filters: FiltersNavigator
},
{
  contentOptions:{
    activeTintColor:Colors.accentColor,
    labelStyle:{
      fontFamily:'open-sans-bold'
    }
  }
}
);

export default createAppContainer(MainNavigator);