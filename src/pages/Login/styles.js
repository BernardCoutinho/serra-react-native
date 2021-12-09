import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        backgroundColor:"#fff",
        width:"100%",
    
    },
    container1: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        width:"100%",
        flexDirection: "column",
        height: "25%",

        
    },
    container2: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        width:"90%",
        textAlign: "center",
        marginTop:"7%",
    },

    container3: {
        display:"flex",
        alignItems: "center",
        backgroundColor: "#fff",
        width:"100%",
        height: "10%",
        marginTop: "30%",
        marginBottom:"10%",
    },

    rodape:{
        display: "flex",
        width:"100%",
        height: "10%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "12%",
        borderTopColor: "#F8F8FF",
        borderTopWidth: 2, 
    
    },

    logo:{
        
        fontSize: "250%",
    },
    
    inputTxt:{
        width: "80%",
        height: 40,
        marginTop: "5%",
        backgroundColor:"#F8F8FF",
        borderRadius: 5,
        padding: "6%",
        borderWidth: "1px",
        borderColor: "grey",

    },

    botao:{
        width: 290, 
        marginTop: 20,  
    },

    txtLink:{
        color: 'darkblue', 
        fontWeight: 'bold',
    }


});