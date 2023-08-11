import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    booking:[],
    booked:[]
}
const MovieBookingSlice = createSlice({
    name: "MovieBooking",
    initialState,
    reducers: {
        setBooking:(state,{payload}) => {
            if(state.booking.length < 6){
                const index = state.booking.findIndex((v) => v.soGhe === payload.soGhe)
                if(index === -1) {
                    state.booking.push(payload)
                } else {
                    state.booking.splice(index,1)
                }
            } else {
                alert("Bạn chỉ được chọn tối đa 6 vé")
            }
        },
        setBooked:(state)=>{
            if(state.booking.length > 0){
                state.booked = [...state.booked, ...state.booking]
                state.booking = []
            } else {
                alert("Vui lòng chọn ghế để thanh toán")
            }
        },
        setDelete:(state)=>{
            if(state.booking.length > 0){
                state.booking = []
            } else{
                alert("Bạn chưa chọn ghế nào cả")
            }
        }
    },
})
export const { reducer: MovieBookingReducer, actions: MovieBookingActions } = MovieBookingSlice