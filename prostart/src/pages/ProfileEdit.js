import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

function ProfileEdit() {
    const { profileId } = useParams();
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();

    async function getProfile() {
        try {
            let myProfile = await fetch(`http://localhost:8000/profile/${profileId}`);
            myProfile = await myProfile.json();
            setProfile(myProfile);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProfile();
    }, []);

    function handleChange(e) {
        setProfile((currentState) => ({
            ...currentState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e) {
        try{
            e.preventDefault();
            await fetch(`http://localhost:8000/profile/${profileId}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(profile)
            });
            return navigate(`/profile/${profileId}`);
        } catch(err) {
            console.log(err);
        }
    }

    function loaded() {
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
                <button>Submit</button>
            </form>
        </>
        )
    }

    return(
        <>
            {profile ? loaded() : <h2>Loading...</h2>}
        </>
    )
}

export default ProfileEdit;