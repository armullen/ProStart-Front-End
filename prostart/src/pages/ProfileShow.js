import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";

function ProfileShow() {
    const[profile, setProfile] = useState(null);
    const { profileId } = useParams();

    async function getProfile() {
        try {
            let myProfile = await myProfile.json();
            setProfile(myProfile);
        } catch(err) {
            console.log(err);
        }
    }

    function profileLoaded() {
        return(
            <>
                <h3>Name: {profile.name}</h3>
                <h3>Athlete: {profile.athlete}</h3>  
                <h3>Sport: {profile.sport}</h3>  
                <h3>Position: {profile.position}</h3> 
                <Link to ={`/profile/${profileId}/edit`}>
                    <button>Edit</button>
                </Link>
                <Link to ={`/profile/${profileId}/delete`}>
                    <button>Delete</button>
                </Link>
            </>
        )
    }

    useEffect(() => {
        getProfile();
    }, []);

    return(
        <>
            {profile ? profileLoaded() : <h2>Loading...</h2>}
        </>
    )
}

export default ProfileShow;