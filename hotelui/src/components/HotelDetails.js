import React from 'react';
import { Link } from 'react-router-dom';


const RenderDetail = ({DetailData}) => {
    if(DetailData){
            return(
                <div>
                    
                     <div id="demo" class="carousel slide" data-ride="carousel">

                            <ul class="carousel-indicators">
                                <li data-target="#demo" data-slide-to="0" class="active"></li>
                                <li data-target="#demo" data-slide-to="1"></li>
                                <li data-target="#demo" data-slide-to="2"></li>
                            </ul>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                            <img src={'https://s-ec.bstatic.com/images/hotel/max1024x768/653/65305974.jpg'}/>
                                </div>
                                <div class="carousel-item">
                                            <img src={'https://i.ibb.co/zb7pk1v/hotel4.jpg'} alt="Los Angeles"/>
                                </div>
                                <div class="carousel-item">
                                            <img src={'https://i.ibb.co/Yh248Jt/hotel1.jpg'} alt="Los Angeles"/>
                                </div>
                            </div>

                            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </a>
                            <a class="carousel-control-next" href="#demo" data-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </a>

                            </div>

                <hr/>
                    <div className="main_detail">
                        <h1>{DetailData.name}</h1>
                        <h3><i className="fa fa-map-marker" aria-hidden="true"></i> {DetailData.city}</h3>
                        <hr/>
                        <h4>Amenities</h4>
                        <span className="amenities"><i class="fa fa-wifi" aria-hidden="true"></i> Wifi</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="amenities"><i class="fa fa-swimming-pool" aria-hidden="true"></i> Swimming Pool</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="amenities"><i class="fas fa-utensils" aria-hidden="true"></i> Room Service</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="amenities"><i class="fas fa-parking" aria-hidden="true"></i> Praking</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="amenities"><i class="fas fa-leaf" aria-hidden="true"></i> Garden</span>
                        <br/>
                        <hr/>
                        <p>
                            {DetailData.details}
                            It is a long established fact that a reader will be 
                            distracted by the readable content of a page when 
                            looking at its layout. The point of using  normal distribution of letters, as opposed to using .
                       
                        </p>
                        <hr/>
                        <h4>Quick Facts</h4>
                        <h5><i class="fas fa-road" aria-hidden="true"></i> Distance Form Center: 5.3 miles</h5>
                        <h5><i class="fas fa-key" aria-hidden="true"></i> Standard CheckIn & CheckOut</h5>
                        <h5><i class="fas fa-coffee" aria-hidden="true"></i> BreakFast Included</h5>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div className="bookDiv">
                                <div class="priceContainer">
                                    <div>Price : <i class="fa fa-usd" aria-hidden="true"></i>{DetailData.charge}</div>
                                    <div>Available : {DetailData.available} <i class="fa fa-bed" aria-hidden="true"></i> </div>
                                </div>
                                <Link to={`/book/${DetailData._id}`} className="btn btn-info">Book Now</Link>
                    </div>
                </div>
            )
    }
}

const HotelDetails = (props) => {
    console.log('in details props',props);
    return(
        <div className="container">
            {RenderDetail(props)}
        </div>
    )
}

export default HotelDetails;



/*
 {DetailData.map((item,index) =>{
                                    return(
                                        <div class="carousel-item">
                                            <img src={`${item.cover}`} alt="Los Angeles"/>
                                        </div>
                                        )
                                })}

<a href="https://ibb.co/0rqpZ1f"><img src="https://i.ibb.co/Yh248Jt/hotel1.jpg" alt="hotel1" border="0"></a>
<a href="https://ibb.co/YXwF7Ng"><img src="https://i.ibb.co/PM0vZrk/hotel4.jpg" alt="hotel4" border="0"></a>
<a href="https://ibb.co/WFzsJFq"><img src="https://i.ibb.co/NpN7BpQ/hotel4.jpg" alt="hotel4" border="0"></a>
<a href="https://ibb.co/K7Ld1Yv"><img src="https://i.ibb.co/zb7pk1v/hotel4.jpg" alt="hotel4" border="0"></a>
*/
