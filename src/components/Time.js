import React from 'react'
import './Time.scss'



export default function Time (props){
    const time = props.time
    return (
        <div className='Time'>
            <span className='hours'>{time.hours}</span>:
            <span className='minutes'>{time.minutes}</span>:
            <span className='secs'>{time.secs}</span>
        </div>
    )
}