import React, {Component} from 'react';
import {Text,Image,TouchableOpacity, Alert} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import * as actionCreator from '../../common/actions';
import HotelList from '../../components/HotelListComponent'

import history from '../../common/images/history.png'

class HotelListContainer extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <Text style={{color: 'white', fontSize: 18,fontWeight:'bold'}}>Hotels</Text>
        ),

        headerRight:(
            <TouchableOpacity onPress={()=>navigation.navigate('BookingHistory')}>
                <Image  source={history} style={{height:30, width:30, marginRight:16}} resizeMode={'contain'} >

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
            hotelList:[
                {key: 'Hampton Inn Artesia', charge:1099, availableRooms: 10, city:'New Mexico'},
                {key: 'Hilton Garden', charge:106, availableRooms: 0, city:'Texas'},
                {key: 'Capital Hilton', charge:223, availableRooms: 4, city:'Washington'},
                {key: 'THE HILTON CLUB', charge:423, availableRooms: 17, city:'New York'}
            ]
        }

        this.onListItemClick = this.onListItemClick.bind(this);
        this.onBookNowClicked = this.onBookNowClicked.bind(this);
    }

    componentDidMount() {
        this.props.hotelAction.getHotelsList()
    }

    onListItemClick(item, index, roomCount) {
            this.props.navigation.navigate('HotelDetail', {selectedItem : item, selectedIndex : index})
    }


    onBookNowClicked(item, index, roomCount) {

        if(roomCount>0) {
            this.props.navigation.navigate('HotelBooking', {selectedItem : item, selectedIndex : index})
        } else {
            Alert.alert("Rooms not available")
        }


    }

    render() {
        return (
           <HotelList hotels={this.props.hotelList}  onListItemClick={this.onListItemClick} onBookNowClicked={this.onBookNowClicked}/>
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
    hotelList: state.hotel.hotelList

});

const mapDispatchToProps = dispatch => ({
    dispatch,
    hotelAction: bindActionCreators(actionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HotelListContainer);