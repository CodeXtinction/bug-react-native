import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, StatusBar } from 'react-native';
import ToolbarAndroid from 'ToolbarAndroid';
import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends Component {

    render(){
        return(
            <View style={styles.container}>
                <StatusBar
                backgroundColor="#E91E63"
                hidden={true}
                />
                <Icon.ToolbarAndroid
                style={styles.toolbar}
                title="Chat"
                titleColor="#E91E63"
                navIconName="md-chatboxes"
                />
                <View style={styles.content}/>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.textInput}  
                    placeholder="Say something"  
                    underlineColorAndroid="transparent"
                    autoCorrect={false}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eee'
    },
    toolbar:{
        height:56,
        backgroundColor:'#fff',
        elevation:2
    },
    content:{
        flex:1,
    },
    inputWrapper:{
        alignSelf:'stretch',
        height:70,
        backgroundColor:'#fff',
        paddingLeft:20,
        paddingRight:20,
        justifyContent:'center',
    },
    textInput:{
    }

});