import React ,{Component, createElement ,createRef,useEffect,useState } from "react";



export default function ScrollDown (props)  {
  

   const  scrollDiv = createRef();
    
    useEffect(() => {
          
   
     if(props.Expression.value && props.Expression.status=="available" ){
       
     setTimeout(function (){

       scrollDiv.current.scrollIntoView({ behavior: props.behavior,inline:props.block});  
                                         }, props.Time);
       
    }
    
  },[props.Expression.value])
    return (
        <div ref={scrollDiv}>
          
        </div>
    )
}

