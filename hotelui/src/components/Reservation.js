import React from 'react';

const RenderReservation = ({reservationData}) => {
    if(reservationData){
        return reservationData.map((item,index)=>{
            return(
                <div>
                <div class="media border p-3" key="index">
                    <img src={`${item.cover}`}  class="mr-5 mt-5 rounded-circle"/>
                    
                    <div class="media-body">
                    <br/><br/>
                        <h3>{item.name}<small><i></i></small></h3>
                        <h5>CheckIn: {item.checkInAt}</h5>
                        <h5>CheckIn: {item.checkOutAt}</h5>
                        <span className="amenities"><i class="fa fa-wifi" aria-hidden="true"></i> Wifi</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="amenities"><i class="fa fa-swimming-pool" aria-hidden="true"></i> Swimming Pool</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="amenities"><i class="fas fa-utensils" aria-hidden="true"></i> Room Service</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="amenities"><i class="fas fa-parking" aria-hidden="true"></i> Praking</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="amenities"><i class="fas fa-leaf" aria-hidden="true"></i> Garden</span>
                        <h5>Price : <i class="fa fa-usd" aria-hidden="true"></i>{item.charge}</h5>
                    </div>
                </div>
                <br/><br/>
                </div>
            )
        })
    }
}

const Reservation = (props) => {
    return(
        <div className="container">
            {RenderReservation(props)}
        </div>
    )
}

export default Reservation;