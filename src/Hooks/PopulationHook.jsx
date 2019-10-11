import React, {useEffect, useState} from 'react';

export default function Population({num, age}){
  const [one, setOne] = useState(0);
  console.log('Before UseEffect');

  useEffect(()=>{
    console.log('No DEPENDENCY');
    // CLEANUP FUNCTION
    return ()=>{
      console.log('No DEPENDENCY, CLEANUP');
    }
  },);

  useEffect(()=>{
    console.log('Number got changed', num);
  }, [num, one]);

  useEffect(()=>{
    console.log('Age got changed', age);
    
    // CLEANUP FUNCTION
    return ()=>{
      console.log('Age cleanup', age);
    }
  }, [age]);

  console.log('After UseEffect');

  return (
    <div>
      population hook:
      Num:{num}
      Age:{age}
    </div>
  )
}