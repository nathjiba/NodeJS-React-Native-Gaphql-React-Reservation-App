import React , {Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

//Containers
import Home from '../containers/Home';
import HotelDetail from '../containers/Details';
import Reservation from '../containers/Reservation';
import BookNow from '../containers/BookNow'

//
import Header from './Header';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <br/><br/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/hotels/:id" component={HotelDetail}/>
                    <Route exact path="/book/:id" component={BookNow}></Route>
                    <Route exact path="/reservation" component={Reservation}></Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;