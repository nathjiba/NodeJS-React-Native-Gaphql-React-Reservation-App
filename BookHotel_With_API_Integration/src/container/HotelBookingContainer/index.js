
import React, {Component} from 'react';
import {Text, Image, Alert, View,TouchableOpacity } from 'react-native';
import HotelBookingComponent from '../../components/HotelBookingComponent'
import {connect} from "react-redux";
import * as hotelActionCreator from "../../common/actions";
import back from '../../common/images/back.png';
import {bindActionCreators} from 'redux';

class ReservationContainer extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <Text style={{color: 'white', fontSize: 18, fontWeight:'bold'}}>Book My Hotel</Text>
        ),

        headerLeft:(
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={back} style={{height:30, width:30}} resizeMode={'contain'} >

            </Image>
            </TouchableOpacity>
        ),
        headerStyle: {
            backgroundColor: 'rgba(91,151,167,1)',
            borderBottomWidth: 0,
            shadowOpacity: 0,
            shadowOffset: {
                height: 0,
            },
            shadowRadius: 0,
            elevation: 0,
        },
        headerTitleStyle: { alignSelf: 'center' },
    });
    constructor(props) {
        super(props);
        this.state= {
            name:'',
            rooms:1,
            traveler:1,
            isDateTimePickerVisible: false,
            checkecdInDate: null,
            checkedOutDate: null,
            firstName:'',
            lastName:'',
            email:'',
            phone:''

        }

        this.datePickerOpenFor = null;

        this.onRoomsPlusClick = this.onRoomsPlusClick.bind(this);
        this.onTravelerPlusClick = this.onTravelerPlusClick.bind(this);
        this.onRoomsMinusClick = this.onRoomsMinusClick.bind(this);
        this.onTravelerMinusClick = this.onTravelerMinusClick.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onCheckInDateClick = this.onCheckInDateClick.bind(this);
        this.onCheckOutDateClick = this.onCheckOutDateClick .bind(this);
        this._handleDatePicked = this._handleDatePicked.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onBookHotels = this.onBookHotels.bind(this);
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);


    }



    componentWillReceiveProps(nextProps) {
    }




    onRoomsPlusClick() {
       const rooms = this.state.rooms+1
       this.setState({
           rooms
       });
    }

    onTravelerPlusClick() {
        const traveler = this.state.traveler+1
        this.setState({
            traveler
        });
    }

    onRoomsMinusClick() {
        if(this.state.rooms >1) {
            const rooms = this.state.rooms - 1
            this.setState({
                rooms
            });
        }

    }

    onTravelerMinusClick() {
        if(this.state.traveler >1) {
            const traveler = this.state.traveler - 1
            this.setState({
                traveler
            });
        }
    }

    onEmailChange(email) {
        this.setState({
            email
        });

    }


    onFirstNameChange(firstName) {

        this.setState({
            firstName
        });
    }

    onLastNameChange(lastName) {
        this.setState({
            lastName
        });
    }

    onPhoneNumberChange(phone) {

        this.setState({
            phone
        });
    }

    onCheckInDateClick() {
        this.datePickerOpenFor = 1
        const isDateTimePickerVisible = !this.state.isDateTimePickerVisible
        this.setState({
            isDateTimePickerVisible
        })
    }

    onCheckOutDateClick() {
        if(this.state.checkecdInDate) {
            this.datePickerOpenFor = 2
            const isDateTimePickerVisible = !this.state.isDateTimePickerVisible
            this.setState({
                isDateTimePickerVisible
            })
        } else {
            Alert.alert('Error', 'Please select check in date')
        }


    }

    _handleDatePicked(date) {
        if(this.datePickerOpenFor == 1) {
            this.setState({
                checkecdInDate: date
            })
        } else {
            if(date>this.state.checkecdInDate) {
                this.setState({
                    checkedOutDate: date
                })
            } else {
                Alert.alert('Error', 'Check out date should be greater than check in date')
                return
            }
        }

        this.datePickerOpenFor =null
        const isDateTimePickerVisible = !this.state.isDateTimePickerVisible
        this.setState({
            isDateTimePickerVisible
        })

    }

    onCancel() {
        this.datePickerOpenFor =null
        const isDateTimePickerVisible = !this.state.isDateTimePickerVisible
        this.setState({
            isDateTimePickerVisible
        })
    }


    onBookHotels() {
console.log("Selected Item :: ", JSON.stringify(this.props.navigation.state.params.selectedItem))

        if(!this.state.checkecdInDate) {
            Alert.alert('Error', 'Please select checked In date')
            return
        }

        if(!this.state.checkedOutDate) {
            Alert.alert('Error', 'Please select checked Out date')
            return
        }

        if(!this.state.checkecdInDate) {
            Alert.alert('Error', 'Please select checked In date')
            return
        }

        if(!this.state.firstName) {
            Alert.alert('Error', 'Please enter first name')
            return
        }


        if(!this.state.lastName) {
            Alert.alert('Error', 'Please enter last name')
            return
        }


        if(!this.state.email) {
            Alert.alert('Error', 'Please enter email')
            return
        }

        if(!this.state.phone) {
            Alert.alert('Error', 'Please enter phone')
            return
        }


        const hotelId =this.props.navigation.state.params.selectedItem._id
        const name =this.props.navigation.state.params.selectedItem.name
        const arrivalDate = this.state.checkecdInDate
        const departureDate = this.state.checkedOutDate
        const checkIndate = arrivalDate.getFullYear()+"-"+(arrivalDate.getMonth()+1)+"-"+arrivalDate.getDate()
        const checkOutdate = departureDate.getFullYear()+"-"+(departureDate.getMonth()+1)+"-"+departureDate.getDate()
        this.props.hotelAction.createReservation(hotelId, checkIndate, checkOutdate)

    }



    render() {
        return (
            <HotelBookingComponent
                onRoomsPlusClick={this.onRoomsPlusClick}
                onTravelerPlusClick={this.onTravelerPlusClick}
                onRoomsMinusClick={this.onRoomsMinusClick}
                onTravelerMinusClick={this.onTravelerMinusClick}
                onEmailChange={this.onEmailChange}
                onFirstNameChange={ this.onFirstNameChange}
                onLastNameChange={ this.onLastNameChange}
                onPhoneNumberChange={ this.onPhoneNumberChange}
                onCheckInDateClick={this.onCheckInDateClick}
                onCheckOutDateClick={this.onCheckOutDateClick}
                rooms={this.state.rooms}
                traveller={this.state.traveler}
                hotelName = {this.props.navigation.state.params.selectedItem.name}
                hotelCity = {this.props.navigation.state.params.selectedItem.city}
                charge = {this.props.navigation.state.params.selectedItem.charge}
                isDateTimePickerVisible={this.state.isDateTimePickerVisible}
                _handleDatePicked={this._handleDatePicked}
                _hideDateTimePicker={this.onCancel}
                checkedOutDate ={this.state.checkedOutDate}
                checkecdInDate ={this.state.checkecdInDate}
                onBookHotels={this.onBookHotels}

            >
            </HotelBookingComponent>
        );
    }
}


const mapStateToProps = state => ({
    nav: state.nav,
    reservationCreated: state.hotel.reservationCreated
});

const mapDispatchToProps = dispatch => ({
    dispatch,
    hotelAction: bindActionCreators(hotelActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationContainer);