
import React from 'react';
import {Platform, ScrollView, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import hotel_1 from '../../common/images/hotel_111.jpeg'
import hotel_2 from '../../common/images/hotel_222.jpeg'
import hotel_3 from '../../common/images/hotel_333.jpg'
import hotel_4 from '../../common/images/hotel_444.jpg'
import selected from '../../common/images/selectedStar.png'
import unselected from '../../common/images/unselectedstar.png'

import wifi from '../../common/images/wifif.png'
import parking from '../../common/images/parking.png'
import roomService from '../../common/images/room_service.png'
import swimming from '../../common/images/swimming.png'
import garden from '../../common/images/garden.png'

import styles from './style';


const hotelImageList =[hotel_1,hotel_2,hotel_3, hotel_4]

const priseList =['$105','$505','$705', '$81544', '$999', '$2,872']
const roomList =[6, 3, 0, 9, 9, 7]


const HotelDetailComponent = props => {

    const getRatingStar = (rate) => {
        let React_Native_Rating_Bar = [];
        for (var i = 1; i <= 5; i++) {
            React_Native_Rating_Bar.push(
                <Image
                    key={""+i}
                    resizeMode={'contain'}
                    style={[styles.ratingBarImageStyle, {marginLeft: i==1? 10:0 , tintColor:(i <= rate) ? 'rgba(237,177,63,1)':'grey'}]}
                    source={(i <= rate) ? selected: unselected}/>
            );
        }

        return React_Native_Rating_Bar
    }


    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return(
        <View style={styles.container}>

            <ScrollView style={{width:'100%'}}>

             <View>
            <Image style={styles.hotelImageStyle}
                   source={{uri: props.selectedItem.cover}}
                   resizeMode={'cover'}/>

                 <View style={{flexDirection:'row', justifyContent:'center'}}>

                 <View style={{flex:0.7}}>
                 <Text style={styles.hotelNameTextStyle}> {props.selectedItem.name}</Text>
                 <Text style={styles.cityNameTextStyle}> {props.selectedItem.city}</Text>

                 <View style={styles.ratingParent}>
                     {getRatingStar(props.selectedItem.rating)}
                 </View>
                 </View>

                    <View style={styles.prizeParentLayout}>
                        <Text style={[ {fontSize:16, color:'grey',}]}> Per Night </Text>
                        <Text style={[{marginTop:0, fontSize:24, color:"black",fontWeight:'800',}]}>{"$"+numberWithCommas(props.selectedItem.charge)}</Text>

                        <TouchableOpacity style={styles.bookNowButtonStyle} onPress={props.onBookNowClick}>
                            <Text style={styles.bookNowTextStyle}> Book Now </Text>
                        </TouchableOpacity>

                    </View>

                 </View>

                 <View style={styles.divider}/>
                 <Text style={styles.headertextStyle}>Amenities</Text>
                 <View  style={styles.subModulehorizantalParentLayout}>


                     <View style={styles.amenitiesParent}>
                         <Image source={roomService} style={styles.amenitiesImageStyle}/>
                         <Text style={styles.amenitiestextStyle}>Room Service</Text>
                     </View>


                     <View style={styles.amenitiesParent}>
                         <Image source={wifi} style={styles.amenitiesImageStyle}/>
                         <Text style={styles.amenitiestextStyle}>Wifi</Text>
                     </View>



                     <View style={styles.amenitiesParent}>
                         <Image source={swimming} style={styles.amenitiesImageStyle}/>
                         <Text style={styles.amenitiestextStyle} >Swimming Pool</Text>
                     </View>


                     <View style={styles.amenitiesParent}>
                         <Image source={parking} style={styles.amenitiesImageStyle}/>
                         <Text style={styles.amenitiestextStyle}>Parking</Text>
                     </View>


                     <View style={styles.amenitiesParent}>
                         <Image source={garden} style={styles.amenitiesImageStyle}/>
                         <Text style={styles.amenitiestextStyle}>Garden</Text>
                     </View>

                 </View>

                 <View style={styles.divider}/>
                 <Text style={styles.headertextStyle}>About the Hotel</Text>
                 <Text style={styles.detailtextStyle}>{props.selectedItem.details}
                 </Text>


                 <View style={styles.divider}/>
                 <Text style={styles.headertextStyle}>Quick Facts</Text>
                 <View style={styles.subModulehorizantalParentLayout}>
                     <View style={[styles.amenitiesParent]}>
                         <Text style={styles.factTextStyle}>11 AM </Text>
                         <Text style={[styles.amenitiestextStyle,  {marginLeft:0}]}>Check-in</Text>
                     </View>


                     <View style={styles.amenitiesParent}>
                         <Text style={styles.factTextStyle}>10 AM </Text>
                         <Text style={[styles.amenitiestextStyle,  {marginLeft:0}]}>Check-out</Text>
                     </View>

                     <View style={styles.amenitiesParent}>
                         <Text style={styles.factTextStyle}>22</Text>
                         <Text style={[styles.amenitiestextStyle,  {marginLeft:0}]}>Rooms</Text>
                     </View>


                     <View style={styles.amenitiesParent}>
                         <Text style={styles.factTextStyle}>4</Text>
                         <Text style={[styles.amenitiestextStyle,  {marginLeft:0}]}>Floor</Text>
                     </View>

                 </View>



                 <View style={styles.emptyView}>
                 </View>

             </View>

            </ScrollView>

        </View>
    )
};


export default HotelDetailComponent;

