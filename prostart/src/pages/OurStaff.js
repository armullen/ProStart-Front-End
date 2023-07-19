import { useEffect, useState } from "react";


function OurStaff () {
   const [staff, setStaff] = useState([]);

    async function getStaff(){
        try {
            let myStaff = await fetch('https://prostart-6qnl.onrender.com/ourstaff')
            myStaff = await myStaff.json();
            setStaff(myStaff);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getStaff();
    }, []);

    console.log(staff);

    function loaded(arr){
        return(
            <>
                {arr.map((staff, idx) => {
                    return(
                        <div key={idx}>
                            <h1>{staff.name}</h1>
                            <img src={staff.img} alt={staff.name} />
                            <h4>{staff.bio}</h4>
                        </div>
                    )
                })}
            </>
        )
    }
    return (
        <>
        {staff.length ? loaded(staff) : <h2>Loading...</h2>}
        </>
    )
}

export default OurStaff;