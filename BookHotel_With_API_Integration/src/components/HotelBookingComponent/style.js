import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    subContainer: {
        width: '85%',
        backgroundColor: 'white',
        flex: 0, borderRadius: 5,
        marginTop: 100,
        shadowColor: "#000000",
        borderRadius: 5,
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0.5
        }
    },
    smallBoxStyle: {
        width: '100%', height: 50, flexDirection: 'row', alignItems: 'center', paddingLeft: 10
    },

    subHaderIconStyle: {
        height: 30,
        width: 30
    },
    listItemParent: {
        width: '100%',
        height: 270,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        backgroundColor: 'white'

    },
    listItemImageStyle: {
        width: '100%',
        height: 170,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    nameText: {
        fontSize: 16,
        color: 'black',
        marginLeft: 10,
        maxWidth: '70%',
        fontWeight: '600',
        alignSelf: 'flex-end'
    },

    backImageStyle: {
        position: 'absolute',
    },
    nameImageStyle: {
        height: 100,
        width: 250,
        marginTop: 60
    },
    iconStyle: {
        height: 20,
        width: 20,
        tintColor: 'grey',
        marginLeft: 10
    },

    plusMinusButtonStyle: {
        height: 40,
        width: 40,
        borderWidth: 0.5,
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey'
    },
    plusMinusImageStyle: {
        height: 20,
        width: 20,
        tintColor: 'white'
    },
    countBoxStyle: {
        height: 40, width: 40, backgroundColor: 'white',
        borderBottomColor: 'grey',
        borderTopColor: 'grey', alignItems: 'center', justifyContent: 'center',
        borderWidth: 0.5, borderLeftColor: 'rgba(0,0,0,0)', borderRightColor: 'rgba(0,0,0,0)'
    },
    dateTextStyle: {
        fontWeight: '600', fontSize: 55, color: '#666666'
    },
    horizantalDivider: {
        width: '100%', height: 0.8, backgroundColor: 'grey'
    },
    verticalDivider: {
        width: 0.5, height: '100%', backgroundColor: 'grey'
    },
    mothYearTextStyle: {
        color: 'grey', fontWeight: '500'
    },
    counterTextStyle: {
        fontWeight: '500', fontSize: 18
    },
    buttonStyle: {
        backgroundColor: 'rgba(91,151,167,1)',
        height: 45, width: '80%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonParentStyle: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        justifyContent: 'center'
    },
    iconTextParentStyle: {
        flexDirection: 'row', marginLeft: 16, marginTop: 10, width: '100%'
    },
    checkoutContainerStyle: {
        flexDirection: 'row', marginLeft: 16, marginTop: 10, alignItems: 'center', width: '100%'
    },
    chekinCheckoutTextStyle: {
        color: 'black', marginLeft: 12, fontWeight: '500'
    },
    emptyDateStyle: {
        height: '60%', width: '100%', alignItems: 'center', justifyContent: 'center'
    },
    dateBoxContainerStyle: {
        flexDirection: 'row', height: 100, width: '100%',
        backgroundColor: 'white'
    },
    boxContainerStyle: {
        flex: 1, alignItems: 'center'
    },
    hotelNamestyle: {
        fontSize: 16, fontWeight: '600', marginLeft: 10
    },

    divider: {
        height: 1, width: '100%', backgroundColor: 'rgba(219,218,211,1)'
    },

    hotelNameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    hotelNameSubContainer: {
        backgroundColor: 'white',
        height: 70,
        paddingLeft: 16,
        justifyContent: 'center',
        flex: 1
    },


    hotelPrizetextcontainer: {
        backgroundColor: 'white',
        height: 70,
        paddingRight: 16,
        alignSelf: 'flex-end',
        justifyContent: 'center'
    },

    mainHeaderContainer: {
        color: 'black', fontSize: 22, fontWeight: '700'
    },
    headerSubTitletext: {color: 'rgba(156,156,156,1)', fontSize: 14},

    dateParentContainer: {backgroundColor: 'white', height: 90, width: '100%', flexDirection: 'row'},
    subHeaderParentContainer: {
        backgroundColor: 'white',
        height: 70,
        width: '100%',
        paddingLeft: 16,
        justifyContent: 'center'
    },
    subHeaderTextStyle: {color: 'black', fontSize: 18, fontWeight: '700'},
    guestDetailsParentContainer: {backgroundColor: 'white', paddingLeft: 16, paddingRight: 16, },
    guestNameParentContainer: {flexDirection: 'row', marginTop: 40},
    guestEmailMobileParentContainer: {marginTop: 40, width: '100%'},
    bottomViewParentContainer: {
        height: 40,
        width: '100%',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        marginTop:20,
        marginBottom:20

    },
    bottomViewSubParentContainer: {flex: 1, height: '100%', alignItems: 'center', paddingLeft:16, flexDirection:'row'},
    bottomViewSubParentContainerForButton: {flex: 1, height: '100%', alignItems: 'flex-end', marginRight:16},
    bottomVerticalDivider: {
        height: 40, width: 2, backgroundColor: 'white', alignSelf: 'center'
    },

    bookNowButtonText: {
        color: 'white', fontSize: 14, fontWeight: '800', paddingLeft:20, paddingRight:20
    },
    finalAmountText: {
        color: '#309b18', fontSize: 22, fontWeight: '800'
    },
    totalTextStyle: {
        color: 'black', fontSize: 18, fontWeight:'700'
    }

});