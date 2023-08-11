import React from 'react'
import Chair from './Chair'
import className from "classnames"

const ChairList = ({dsGhe}) => {

  return (
    <div className='m-4' style={{paddingLeft:45,color:'#FBE8BD'}}>
        {dsGhe.map((dsGhe) => {
                return <div key={dsGhe.hang} className='d-flex gap-3 mt-2'>
                    <p style={{width:30,display:'flex',justifyContent:"center",alignItems:"center",marginBottom:0}}>{dsGhe.hang}</p>
                    {
                        dsGhe.danhSachGhe.map((ghe)=>{
                            return <Chair className={className({disabled: !dsGhe.hang})} ghe ={ghe} key={ghe.soGhe}/>
                        })
                    }
                </div>
        })}
    </div>
  )
}

export default ChairList