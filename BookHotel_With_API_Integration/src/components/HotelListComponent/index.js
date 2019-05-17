
import React from 'react';
import {Platform, StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import hotel_1 from '../../common/images/hotel_111.jpeg'
import hotel_2 from '../../common/images/hotel_222.jpeg'
import hotel_3 from '../../common/images/hotel_333.jpg'
import hotel_4 from '../../common/images/hotel_444.jpg'
import selected from '../../common/images/selectedStar.png'
import unselected from '../../common/images/unselectedstar.png'

import styles from './style';


const hotelImageList =[hotel_1,hotel_2,hotel_3, hotel_4]

const priseList =['$105','$505','$705', '$81544', '$999', '$2,872','$222']



const HotelListComponent = props => {
    const getRatingStar = (rate) => {
        let React_Native_Rating_Bar = [];
        for (var i = 1; i <= 5; i++) {
            React_Native_Rating_Bar.push(
                <Image
                    resizeMode={'contain'} key={""+i}
                    style={[styles.ratingBarImageStyle, {marginLeft: i==1? 10:0 , tintColor:(i <= rate) ? 'rgba(237,177,63,1)':'grey'}]}
                    source={(i <= rate) ? selected: unselected}/>
            );
        }

        return React_Native_Rating_Bar
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const renderItem = (item, index) => {
       return (
            <TouchableOpacity style={styles.listParentLayoutStyle} key={""+index+item.name}
                              onPress={() => props.onListItemClick(item, index,item.available)}>
                <View style={styles.listItemParentStyle}>
                    <View style={styles.listImageParentStyle}>
                        <Image style={styles.listItemImageStyle}
                               source={{uri: item.cover}}
                               resizeMode={'cover'}/>
                    </View>
                    <View style={styles.listSubParentStyle}>
                        <View style={{justifyContent:'center'}}>
                            <Text style={styles.hotelNameText} numberOfLines={2}>{item.name}</Text>
                            <View style={{flexDirection:'row', marginTop:5}}>
                            {getRatingStar(item.rating)}
                            </View>
                            <Text style={styles.cityTxtStyle}>{item.city}</Text>

                            <Text style={[styles.roomsAvaiblityTextStyle, {color:item.available > 0 ? 'green': 'red', marginRight: 16 }]}>{item.available  > 0 ? "Available:"+ item.available  +" Rooms   " : 'Not Available'}</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between', paddingRight:5}}>
                            <View style={styles.prizeParentLayoutStyle}>
                                <Text style={styles.perNightText}>Per Night</Text>
                                <Text style={styles.perNightChargeStyle}>{"$"+numberWithCommas(item.charge)}</Text>
                            </View>

                                <TouchableOpacity style={styles.bookNowButtonStyle}
                                                  onPress={() => props.onBookNowClicked(item, index, item.available)}>
                                    <Text style={styles.bookNowButtonTextStyle}>Book Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>







                </View>

            </TouchableOpacity>
        );
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={props.hotels}
                renderItem={({ item, index }) => renderItem(item, index)}
            />
        </View>
    )
};


export default HotelListComponent;
