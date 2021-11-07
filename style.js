import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    mode: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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
        flex: 1,
    },
    list: {
        paddingVertical:10,
        marginTop:10,
        paddingHorizontal: 20,
        fontSize: 15,
        color: "white",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 30,

    }
});
