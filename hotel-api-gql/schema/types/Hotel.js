module.exports = `
input createHotelInput{
    name:String!,
    available:Int,
    charge:Int!,
    rating:Int!,
    city:String!,
    details:String,
    cover:String
}

type fields{
    _id:String,
    name:String,
    available:Int,
    charge:Int,
    rating:Int,
    city:String,
    details:String,
    cover:String
}

type createHotelResult{
    errors:[errorField]
    result:fields
}

type errorField{
    key:String,
    value:String
}

input bookHotelInput{
    fkHotelId:String!,
    checkInAt:String!,
    checkOutAt:String!
}

type bookHotelResult{
    errors:[errorField]
    result:fields
}

input hotelDetailInput{
    id:String!
}

type hotelDetailsResult{
    result:fields
}

type bookHotelsResult{
    result:[bookHotelFields]
}

type bookHotelFields{
    _id:String,
    bookId:String,
    name:String,
    available:Int,
    charge:Int,
    rating:Int,
    city:String,
    details:String,
    cover:String,
    checkInAt:String,
    checkOutAt:String
}

type allHotelsResult{
    result:[fields]
}

type Mutation {
    createHotel(input:createHotelInput):createHotelResult   
    bookHotel(input:bookHotelInput):bookHotelResult   
} 
    
type Query {
    getHotelDetails(input:hotelDetailInput): hotelDetailsResult
    getAllBookHotels:bookHotelsResult
    getAllHotels: allHotelsResult
}
`;
