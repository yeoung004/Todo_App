import { Dimensions, StyleSheet } from 'react-native';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    mode: {
        justifyContent: "space-around",
        flexDirection: "row",
    },
    modeText: {
        color: "gray",
        fontSize: 40,
    },
    modeTextOn: {
        borderRadius: 10,
        fontSize: 40,
        color: "white"
    },
    lists: {
        alignItems:'center'
    },
    list: {
        width:SCREEN_WIDTH/1.1,
        paddingVertical: 10,
        marginTop: 10,
        paddingHorizontal: 20,
        fontSize: 15,
        color: "white",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 30,
    },
    loadingText:{
        fontFamily: 'sans-serif-thin',
        color: 'white',
        fontSize: 50,
    },
    loading:{
        marginVertical: SCREEN_WIDTH / 3,
        width: SCREEN_WIDTH,
        alignItems: "center",
    },
    toDo:{
        alignItems:'center',
    },
    toDos:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        width:SCREEN_WIDTH/1.1,
        paddingVertical: 10,
        marginTop: 10,
        paddingHorizontal: 20,
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 30,
    },
    info:{
        flex:0.8
    },
    del:{
        alignItems:'center',
        flex: 0.2,
    },
    icon:{
        
    }
});
