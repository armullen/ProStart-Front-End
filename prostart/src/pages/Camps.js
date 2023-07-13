import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Camps () {
    const [camps, setCamp] = useState([]);

        async function getCamp(){
            try {
                let myCamp = await fetch('http://localhost:8000/camps')
                myCamp = await myCamp.json();
                console.log(myCamp)
                setCamp(myCamp);
            } catch (err) {
                console.log(err);
            }
        }

    useEffect(() => {
        getCamp();
    }, []);

    console.log(camps)

    function loaded(arr){
        return(
            <>
                {arr.map((camp, idx) => {
                    return(
                        <div key={idx}>
                           <Link to={`/camps/${camp._id}`}>
                            <h3>{camp.title}</h3>
                          </Link> 
                            <h4>{camp.description}</h4>
                            <h4>{camp.ageGroup}</h4>
                            <h4>{camp.startDate}</h4>
                            <h4>{camp.time}</h4>
                        </div>
                    )
                })}
            </>
        )
    }
    return (
        <>
        {camps.length ? loaded(camps) : <h2>Loading...</h2>}
        </>
    )
}

export default Camps;