import {useState, useEffect } from 'react'

const Training = () => {

    const [totalReps, setTotalReps] = useState(0);

    const [sets, setSets] = useState([]);
    
    
    
    
    const getTotalReps = (sets) => {
        let setsSum = 0;
        for (let i=0; i<=sets.length-1; i++) {
            setsSum += sets[i]
        } 
        return setTotalReps(setsSum)
    }

    useEffect(() => {
        setSets([4,5,6,7,8])
    }, [])

    useEffect(() => {
        getTotalReps(sets)
    }, [sets])
    
    const countHandler = () => {
        for (let i=0; i<sets.length; i++) {
            if (sets[i]>0) {
                sets[i]=sets[i]-1;
            } 
            
        }   return console.log(sets);
    }


    
    

    return <div className='trainingSession'>
                <h1>Training Session</h1>
                    <div  className='setsQueue'>
                        <span> {sets[0]} </span>
                        <span> {sets[1]} </span>
                        <span> {sets[2]} </span>
                        <span> {sets[3]} </span>
                        <span> {sets[4]} </span>
                    </div>
                        <button 
                            className='countButton'
                            onClick={countHandler}>
                             {totalReps} 
                             </button>
            </div>
  };
  
  export default Training;