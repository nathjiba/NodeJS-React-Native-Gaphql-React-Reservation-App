import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },

    hotelImageStyle:{
        width:'100%',
        height: 250,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
    },

    bookNowButtonStyle:{
        height:24,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor: '#309b18',
        borderRadius: 4,
        marginTop:5
    },
    bookNowTextStyle:{
        fontWeight:'700',
        fontSize:10,
        color:'white', paddingLeft:22, paddingRight:22
    },
    hotelNameTextStyle:{
        fontWeight:'800',
        fontSize:22,
        color:'black',
        marginTop:20,
        marginLeft:16
    },

   cityNameTextStyle:{
       fontSize:16,
       color:'grey',
       marginLeft:16,
       marginTop:10
    },

    ratingParent: {
        flexDirection:'row',
        marginLeft:6,
        marginTop:10
    },
    divider:{
        height:0.7,
        width: '100%',
        backgroundColor:'grey',
        marginTop:10
    },
    prizeParentLayout:{
        flex:0.3,
        alignItems:'center',
        justifyContent:'center',
        marginTop:18,
    },
    amenitiesParent:{
        flex:1, height:35, alignItems:'center'
    },
    amenitiestextStyle:{
        fontSize:12,
        marginLeft:5,
        color:'#41403F',
        textAlign:'center'
    },
    factTextStyle:{
        fontSize:18,
        fontWeight:'700'
    },
    headertextStyle:{
        fontSize:18, fontWeight:'700', marginLeft:16, marginTop:10, color:'#464646'
    },
    detailtextStyle:{
        fontSize:14, fontWeight:'500', marginLeft:16, marginRight:16,marginTop:10, color:'grey'
    },
    subModulehorizantalParentLayout:{
        flexDirection: 'row', paddingRight:10, paddingLeft:10, marginTop:10, paddingBottom:10
    },
    emptyView:{
        height:60, width:'100%'
    },
    amenitiesImageStyle:{
        tintColor: "grey"
    }



});