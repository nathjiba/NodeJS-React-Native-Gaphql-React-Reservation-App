import React, {Component} from 'react';
import BookingHistoryComponent from '../../components/BookingHistoryComponent'
import {connect} from "react-redux";
import {Text, Image,TouchableOpacity } from 'react-native';
import {bindActionCreators} from 'redux';
import * as hotelActionCreator from '../../common/actions';

import back from '../../common/images/back.png'
class BookingHistoryContainer extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <Text style={{color: 'white', fontSize: 18, fontWeight:'bold'}}>Booking History</Text>
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
            reservationList :[{hotelName:'Hampton Inn Artesia', arrivalDate:1543948200000, departureDate:1544380200000 }]

        }

        this.onItemPress = this.onItemPress.bind(this);
    }

    componentDidMount() {
        this.props.hotelAction.getReservations()
    }


    onItemPress(item, index) {
    }



    render() {
        return (
            <BookingHistoryComponent onItemPress={this.onItemPress} reservationList={this.props.reservationList}>
            </BookingHistoryComponent>
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
    reservationList: state.hotel.reservationList

});

const mapDispatchToProps = dispatch => ({
    dispatch,
    hotelAction: bindActionCreators(hotelActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingHistoryContainer);