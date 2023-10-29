import { StyleSheet } from "react-native";
export default  styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems: 'center',
    },
    inputbutton:{
        width: 50,
        height: 50,
        margin: 5,
        backgroundColor: '#FF8C00',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputnumber:{
        justifyContent:'center',
        alignSelf:'center',
        color: '#ffffff',
        fontSize: 30,
    },
    result:{
        paddingLeft: 5,
        fontSize: 30,
        borderColor: '#000000',
        borderWidth: 2,
        alignSelf:'stretch',
    }
});
