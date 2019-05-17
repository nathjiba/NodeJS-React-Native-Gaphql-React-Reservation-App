
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    NetInfo,
    View,
    ActivityIndicator,
    StyleSheet,
    Dimensions,
    Linking,
    BackHandler,
    Image,
    Platform,
    TouchableWithoutFeedback,
    AppState
} from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import {bindActionCreators} from 'redux';
import Navigation from '../../rootnavigator';
import {createReduxBoundAddListener} from "react-navigation-redux-helpers";
import * as actionCreator from '../../common/actions';




class ApplicationContainer extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.addListener = createReduxBoundAddListener('root');
    }

     componentDidMount() {
    }


    componentWillUnmount() {
    }


    render() {
        return (
            <View
                style={{
                    flex: 1,
                    opacity: 1
                }}>
                <Navigation
                    navigation={addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.nav, addListener: this.addListener})}/>
                {this.props.loading
                    ? <View style={style.maskBox}>
                         <ActivityIndicator size="large"/>
                    </View>
                    : <View/>
                }
            </View>
        )
    }
}

const style = StyleSheet.create({
    maskBox: {
        position: 'absolute',
        width: Dimensions
            .get('window')
            .width,
        height: Dimensions
            .get('window')
            .height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    }
});

const mapStateToProps = state => ({
    nav: state.nav,
    loading: state.hotel.loading,
});

const mapDispatchToProps = dispatch => ({
    dispatch,
    hotelAction: bindActionCreators(actionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationContainer);
