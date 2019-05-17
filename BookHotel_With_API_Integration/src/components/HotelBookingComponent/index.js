
import React from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import hotelIcon from '../../common/images/hotel_icon.jpg'
import emailIcon from '../../common/images/email.png'
import checkInIcon from '../../common/images/check_in.png'
import checkOutIcon from '../../common/images/check_out.png'
import roomIcon from '../../common/images/rooms.png'
import travllerIcon from '../../common/images/travller.png'
import add from '../../common/images/add.png'
import minus from '../../common/images/substract.png'

import styles from './style';
import config from "../../common/config";

const HotelBookingComponent = props => {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return(
        <View  style={styles.container}>
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View style={styles.divider}/>

                    <View style={styles.hotelNameContainer}>

                        <View style={styles.hotelNameSubContainer}>
                            <Text style={styles.mainHeaderContainer}>{props.hotelName}</Text>
                            <Text style={styles.headerSubTitletext}>{props.hotelCity}</Text>

                        </View>

                        <View style={styles.hotelPrizetextcontainer}>
                            <Text style={styles.headerSubTitletext}>Per Night</Text>
                            <Text style={styles.mainHeaderContainer}>{"$"+numberWithCommas(props.charge)}</Text>
                        </View>


                    </View>

                    <View style={styles.divider}/>


                    <View style={styles.dateParentContainer}>

                        <TouchableOpacity style={styles.boxContainerStyle} onPress={props.onCheckInDateClick}>
                            <View style={styles.iconTextParentStyle}>
                                <Image source={checkInIcon} style={styles.iconStyle} resizeMode={'contain'}/>
                                <Text style={styles.chekinCheckoutTextStyle}>CHECK IN</Text>
                            </View>

                            {props.checkecdInDate ?
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>


                                    <Text style={styles.dateTextStyle}>{props.checkecdInDate.getDate()}</Text>
                                    <View style={{marginLeft: 10}}>
                                        <Text
                                            style={styles.mothYearTextStyle}>{config.MONTH_NAME_WITH_ABBRIVATION[props.checkecdInDate.getMonth()]}</Text>
                                        <Text
                                            style={[styles.mothYearTextStyle, {marginTop: 2}]}>{props.checkecdInDate.getFullYear()}</Text>
                                    </View>

                                </View> : <View style={styles.emptyDateStyle}>
                                    <Text style={styles.dateTextStyle}>--:--</Text>
                                </View>}

                        </TouchableOpacity>

                        <View style={styles.verticalDivider}>
                        </View>

                        <TouchableOpacity style={styles.boxContainerStyle} onPress={props.onCheckOutDateClick}>

                            <View style={styles.checkoutContainerStyle}>
                                <Image source={checkOutIcon} style={styles.iconStyle} resizeMode={'contain'}/>
                                <Text style={styles.chekinCheckoutTextStyle}>CHECK OUT</Text>
                            </View>


                            {props.checkedOutDate ?
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={styles.dateTextStyle}>{props.checkedOutDate.getDate()}</Text>
                                    <View style={{marginLeft: 10}}>
                                        <Text
                                            style={styles.mothYearTextStyle}>{config.MONTH_NAME_WITH_ABBRIVATION[props.checkedOutDate.getMonth()]}</Text>
                                        <Text
                                            style={[styles.mothYearTextStyle, {marginTop: 2}]}>{props.checkedOutDate.getFullYear()}</Text>
                                    </View>

                                </View> : <View style={styles.emptyDateStyle}>
                                    <Text style={styles.dateTextStyle}>--:--</Text>
                                </View>}

                        </TouchableOpacity>

                    </View>


                    <View style={styles.divider}/>


                    <View style={styles.subHeaderParentContainer}>
                        <Text style={styles.subHeaderTextStyle}>Select Rooms and Guest</Text>
                    </View>

                    <View style={styles.divider}/>


                    <View style={styles.dateBoxContainerStyle}>

                        <TouchableOpacity style={styles.boxContainerStyle}>

                            <View style={styles.iconTextParentStyle}>
                                <Image source={roomIcon} style={styles.iconStyle} resizeMode={'contain'}/>
                                <Text style={styles.chekinCheckoutTextStyle}>ROOMS</Text>
                            </View>


                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <TouchableOpacity style={styles.plusMinusButtonStyle} onPress={props.onRoomsMinusClick}>
                                    <Image source={minus} style={styles.plusMinusImageStyle} resizeMode={'contain'}>
                                    </Image>
                                </TouchableOpacity>
                                <View style={styles.countBoxStyle}>
                                    <Text style={styles.counterTextStyle}>{props.rooms}</Text>
                                </View>
                                <TouchableOpacity style={styles.plusMinusButtonStyle} onPress={props.onRoomsPlusClick}>
                                    <Image source={add} style={styles.plusMinusImageStyle} resizeMode={'contain'}>
                                    </Image>
                                </TouchableOpacity>
                            </View>


                        </TouchableOpacity>
                        <View style={styles.verticalDivider}>

                        </View>

                        <TouchableOpacity style={styles.boxContainerStyle}>


                            <View style={styles.iconTextParentStyle}>
                                <Image source={travllerIcon} style={styles.iconStyle} resizeMode={'contain'}/>
                                <Text style={styles.chekinCheckoutTextStyle}>TRAVELLER</Text>
                            </View>


                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <TouchableOpacity style={styles.plusMinusButtonStyle}
                                                  onPress={props.onTravelerMinusClick}>
                                    <Image source={minus} style={styles.plusMinusImageStyle} resizeMode={'contain'}>
                                    </Image>
                                </TouchableOpacity>

                                <View style={styles.countBoxStyle}>
                                    <Text style={styles.counterTextStyle}>{props.traveller}</Text>
                                </View>

                                <TouchableOpacity style={styles.plusMinusButtonStyle}
                                                  onPress={props.onTravelerPlusClick}>
                                    <Image source={add} style={styles.plusMinusImageStyle} resizeMode={'contain'}>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>


                    </View>

                    <View style={styles.divider}/>
                    <View style={styles.subHeaderParentContainer}>
                        <Text style={styles.subHeaderTextStyle}>Enter Guest Details</Text>
                    </View>

                    <View style={styles.divider}/>

                    <View style={styles.guestDetailsParentContainer}>
                        <View style={styles.guestNameParentContainer}>
                            <View style={{flex: 1}}>
                                <TextInput placeholder={'First Name'} onChangeText={props.onFirstNameChange}>
                                </TextInput>

                                <View style={styles.divider}/>

                            </View>

                            <View style={{width: 30}}>
                            </View>

                            <View style={{flex: 1}}>
                                <TextInput placeholder={'Last Name'} onChangeText={props.onLastNameChange}>
                                </TextInput>
                                <View style={styles.divider}/>
                            </View>
                        </View>


                        <View style={styles.guestEmailMobileParentContainer}>
                            <TextInput style={{width: '100%'}} placeholder={'Email'}  onChangeText={props.onEmailChange}>
                            </TextInput>
                            <View style={styles.divider}/>
                        </View>

                        <View style={styles.guestEmailMobileParentContainer}>
                            <TextInput style={{width: '100%'}} placeholder={'Mobile No'} onChangeText={props.onPhoneNumberChange}>
                            </TextInput>
                            <View style={styles.divider}/>
                        </View>
                    </View>


                    <View style={styles.bottomViewParentContainer}>

                        <View style={styles.bottomViewSubParentContainer}>
                            <Text style={styles.totalTextStyle}>Total-</Text>
                            <Text style={styles.finalAmountText}>${props.rooms* props.charge}</Text>
                        </View>

                        <View style={styles.bottomViewSubParentContainerForButton}>
                            <TouchableOpacity style ={{ backgroundColor:"#309b18", height:36, borderRadius:4, justifyContent:'center', marginTop:2}}onPress={props.onBookHotels}>
                                <Text style={styles.bookNowButtonText}>Book Now</Text>
                            </TouchableOpacity>
                        </View>


                    </View>

                </View>
            </KeyboardAwareScrollView>





            <DateTimePicker
                isVisible={props.isDateTimePickerVisible}
                onConfirm={props._handleDatePicked}
                onCancel={props._hideDateTimePicker}
            />


        </View>


    )
};


export default HotelBookingComponent;