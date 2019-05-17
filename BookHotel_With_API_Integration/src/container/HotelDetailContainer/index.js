import React, {Component} from 'react';
import {Text,Image,TouchableOpacity} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import * as actionCreator from '../../common/actions';
import HotelDetails from '../../components/HotelDetailComponent'
import back from '../../common/images/back.png'

class HotelDetailContainer extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <Text style={{color: 'white', fontSize: 18,fontWeight:'bold'}}>Hotel Details</Text>
        ),

        headerRight:(
            <TouchableOpacity onPress={()=>navigation.navigate('ReservationList')}>
                <Image  style={{height:30, width:30, marginRight:16}} resizeMode={'contain'} >

                </Image>
            </TouchableOpacity>
        ),

        headerLeft:(
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={back} style={{height:24, width:24,}} resizeMode={'contain'} >

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
        this.onBookNowClick = this.onBookNowClick.bind(this);
    }

    componentDidMount() {
        // this.props.hotelAction.getHotelsList()
    }

    onBookNowClick() {
        this.props.navigation.navigate('HotelBooking', {selectedItem : this.props.navigation.state.params.selectedItem, selectedIndex : this.props.navigation.state.params.selectedIndex})
    }

    render() {
        return (
            <HotelDetails selectedItem={this.props.navigation.state.params.selectedItem}
                          selectedIndex={this.props.navigation.state.params.selectedIndex}
                          onBookNowClick ={this.onBookNowClick}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(HotelDetailContainer);