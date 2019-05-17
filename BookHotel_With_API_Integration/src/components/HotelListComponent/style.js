import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10
    },
    listParentLayoutStyle: {
        width: '100%',
        height: 170,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 4,

    },
    listItemImageStyle: {
        width: '100%',
        height: 170,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    hotelNameText: {
        marginTop: 10,
        fontSize: 16,
        color: 'black',
        marginLeft: 10,
        maxWidth: '92%',
        fontWeight: '700',
    },
    listItemParentStyle: {
        height: '95%',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: "#000000",
        borderRadius: 4,
        shadowOpacity: 0.8,
        shadowRadius: 3,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    listImageParentStyle: {
        width: '50%',
        height: '100%',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4, overflow: 'hidden',
    },
    prizeParentLayoutStyle: {
        justifyContent: 'center', marginLeft: 10, marginTop: 5
    },
    perNightText: {
        color: 'black', fontSize: 10, fontWeight: 'bold'
    },
    perNightChargeStyle: {
        color: 'black', fontSize: 18, fontWeight: 'bold'
    },
    listSubParentStyle: {
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        height: '100%',
        width: '50%',
        justifyContent: 'center'
    },
    cityTxtStyle: {
        fontSize: 14, color: 'grey', marginLeft: 10, marginTop: 5
    },
    roomsAvaiblityTextStyle: {
        fontSize: 14, marginLeft: 10, marginTop: 5
    },
    ratingBarImageStyle: {
        height: 10, width: 10, alignSelf: 'flex-end', marginBottom: 3
    },

    bookNowButtonStyle: {
        backgroundColor: '#309b18',
        height: 30,
        paddingLeft: 5,
        paddingRight: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },

    bookNowButtonTextStyle: {
            fontSize: 14,
            color: 'white',
            fontWeight: '800',
        }


});