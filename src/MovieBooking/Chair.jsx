import React from 'react'
import "./style.scss"
import cn from "classnames"
import {useDispatch, useSelector} from "react-redux"
import { MovieBookingActions } from '../Store/MovieBooking/slice'

const Chair = ({ghe, className}) => {
    const dispatch = useDispatch()
    const {booking,booked} = useSelector(state => state.movieBooking)
  return (
    <div className={cn('Chair',className,{booking : booking.find((Chair)=>Chair.soGhe === ghe.soGhe)},{booked: booked.find((chair)=>chair.soGhe === ghe.soGhe)})}
    onClick={()=>{
        dispatch(MovieBookingActions.setBooking(ghe))
    }}>
        {ghe.soGhe}
    </div>
  )
}

export default Chair