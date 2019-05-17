import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//actions
import { ReservationAction } from '../actions';


//Component
import ReservationComp from '../components/Reservation';


class Reservation extends Component{

    componentDidMount(){
        this.props.ReservationAction()
    }
    render(){
        return(
            <div>
                <h1 className="list_heading">Reservations</h1>
                <ReservationComp reservationData={this.props.rData.reservation}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        rData:state.reservationData
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ReservationAction},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Reservation);