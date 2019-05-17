import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//actions
import { HotelDetailAction } from '../actions';


//Component
import HotelDetails from '../components/HotelDetails';


class HotelDetail extends Component{
    componentDidMount(){
        this.props.HotelDetailAction(this.props.match.params.id);
    }
    render(){
        return(
            <div>
                <HotelDetails DetailData={this.props.dlist.details}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('details',state)
    return{
        dlist:state.hotelListState
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({HotelDetailAction},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(HotelDetail);