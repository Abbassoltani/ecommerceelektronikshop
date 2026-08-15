import React from 'react'

export default function Star({price}) {

    let startCount

    if(price <= 100){
        startCount=1
    }else if (price <= 300){
        startCount=2
    }else if(price <=500){
        startCount=3
    }else if(price <= 800){
        startCount=4
    }else{
        startCount=5
    }

    // let star =''
    // if(startCount ===1){
    //     star='⭐'
    // }else if(startCount === 2 ){
    //     star='⭐⭐'
    // }else if(startCount === 3){
    //     star='⭐⭐⭐'

    // }else if (startCount ===4){
    //     star='⭐⭐⭐⭐'
    // }else{
    //     star='⭐⭐⭐⭐⭐'
    // }
const star = Array.from({length:startCount}, (_, index)=>(
        <i
                key={index}
                className="ri-star-fill"
            ></i>
))
  return (
    <div >
      {star}
    </div>
  )
}
