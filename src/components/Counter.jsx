
// import React, { useEffect, useState } from 'react'

import { useEffect, useState } from "react"

// function Counter({target}) {
//     const [count , setCount]=useState(0)

//     useEffect(()=>{
//         const interval = setInterval(() => {
//             setCount((prev)=>{
//                 if(prev >= target){
//                     clearInterval(interval)
//                     return target
//                 }
//                 return prev + 1
//             })
            
//         }, 10);
//         return () =>clearInterval(interval)
//     },[target])
//   return <span className='experince-counter'>+{count}</span>
  
// }

// export default Counter




function Counter({target}) {
    const [count , setCount ]=useState(0)

    useEffect(()=>{

        const interval = setInterval(() => {
            setCount((prev)=>{
                    if(prev >= target){
                        clearInterval(interval)
                    }
                    return prev + 1
            })

            return ()=> clearInterval(interval)
            
        }, 0.9);



    },[target])
  return (
        <span className="experince-box">{count}</span>
   
  )
}

export default Counter
