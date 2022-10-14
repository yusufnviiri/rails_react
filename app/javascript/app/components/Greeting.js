import React from 'react'
import { useEffect } from 'react'
import { getGreeting } from './greetingSlice';
import { useSelector, useDispatch } from 'react-redux';



function Greeting() {
  const greetings = useSelector((state) => state.greetings);

  
  const dispatch = useDispatch();
       useEffect(() => {
        dispatch(getGreeting());
        {console.log(greetings)}

       }, []);


  return (
    <>

{ greetings.length>0 ? greetings.map((post) =>(
  
  <div>

  <h3> Greeting :{post.id}</h3>
  <p>{post.title}</p>
 
  </div>)
)

: 'Please wait...'
}

</>

  )}

export default Greeting