import React from 'react';
import { Link } from 'react-router-dom'

const RenderHotel = ({listData}) => {
    if(listData){
        return listData.map((item,index)=>{
            return(
                    <div className="d-inline-block p-2" key={index}>
                        <div className="card">
                                <img className="card-img-top" src={`${item.cover}`} alt="city_image"/>
                                <hr/>
                                <div className="card-body">
                                    
                                    <h5 className="card-title">
                                    <a href="{item.City_Link}" target="_blank" className="city_name">{item.name}</a><h6 className="country">
                                    <i>{item.Country}</i></h6></h5>
                                    <p className="card-text">
                                        
                                    <span ><i className="fa fa-map-marker" aria-hidden="true"></i> {item.city}</span>
                                    
                                    <p ><i className="fa fa-usd" aria-hidden="true"></i> {item.charge}</p>
                                    
                                    </p>
                                
                                    <Link to={`hotels/${item._id}`} className="link_detail aleft">
                                        See Details
                                    </Link>
                                    <Link to={`book/${item._id}`} className="link_book aleft">
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                    </div>
            )
        })
    }
}

const HotelList = (props) => {
    return(
        <div className="container">
            {RenderHotel(props)}
        </div>
    )
}

export default HotelList;
