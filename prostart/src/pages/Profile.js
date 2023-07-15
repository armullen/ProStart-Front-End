import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

function Profile () {
    const [profiles, setProfile] = useState([]);
    const [profileForm, setProfileForm] = useState({
        name: "",
        email: "",
        athlete: "",
        phone: "",
    })

        async function getProfiles() {
            try {
                let myProfiles = await fetch('http://localhost:8000/profile')
                myProfiles = await myProfiles.json();
                setProfile(myProfiles);
            }catch (err) {
                console.log(err);
        }
    }

    useEffect(() => {
        getProfiles();
    }, []);

    console.log(profiles);

    function loaded(arr) {
        return(
            <>
                {arr.map((profile, idx) => {
                    return(
                        <div key={idx}>
                            <Link to={`/profile/${profile._id}`}>
                            <h3>Name: {profile.name}</h3>
                            </Link>  
                            <h3>Athlete: {profile.athlete}</h3>  
                            <h3>Sport: {profile.sport}</h3>  
                            <h3>Position: {profile.position}</h3>  
                        </div>
                    )
                })}
            </>
        )
    }

    function handleChange(e) {
        console.log(e.target);
        setProfileForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            await fetch('http://localhost:8000/profile/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(profileForm)
            })
            getProfiles();
            e.target.reset();
        } catch (err){
            console.log(err);
        }
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
            
            <label>Name: </label>
            <input type='text' name="name" onChange={handleChange}placeholder="Name"></input>
            
            <label>Athlete's Name: </label>
            <input type="text" name="athlete" onChange={handleChange} placeholder="Athlete's Name"></input>
            
            <label>Sport: </label>
            <input type="text" name="sport" onChange={handleChange} placeholder="hockey"></input>
           
            <label>Position: </label>
            <input type="text" name="position" onChange={handleChange} placeholder="goalie"></input>
            
            <button>Add a profile</button>
            </form>

            {profiles.length ? loaded(profiles) : <h2>Loading...</h2>}
        </>
    )
}

export default Profile;