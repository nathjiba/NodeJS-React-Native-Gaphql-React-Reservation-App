import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


//actions
import { HotelDataAction } from '../actions';


//Component
import HotelList from '../components/HotelList';


class Home extends Component{

    componentDidMount(){
        this.props.HotelDataAction();
    }

    render(){
        return(
            <div>
                <h1 className="list_heading">Available Hotels</h1>
                <HotelList listData={this.props.hlist.list}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        hlist:state.hotelListState
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({HotelDataAction},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);