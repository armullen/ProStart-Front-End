import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function ProfileDelete() {
    const {profileId} = useParams();

    async function deleteMyProfile() {
        try {
             await fetch(`http://localhost:8000/profile/${profileId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
            }
        })
            } catch (err) {
                console.log(err);
            }
    }

    return (
        <>
            <h2>Are you sure you want to delete this profile?</h2>
            <Link to='/profile'>
                <button onClick={deleteMyProfile}>Yes</button>
            </Link>
            <Link to={`/profile/${profileId}`}>
                <button>No</button>
            </Link>
        </>
    )
}

export default ProfileDelete;