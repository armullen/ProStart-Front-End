

function SignUp () {
    return(
        <form>
            <label>Name</label>
            <input type='text' name="name" placeholder="Name"></input>
            <label>E-Mail</label>
            <input type='email' name="email" placeholder="you@email.com"></input>
            <label>Athlete's Name</label>
            <input type="text" name="athlete" placeholder="Athlete's Name"></input>
            <label>Phone Number</label>
            <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890"></input>
            <button>Sign Up</button>
        </form>
    )
}

export default SignUp;