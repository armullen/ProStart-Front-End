function SignUp () {
    return(
        <form>
            <label>Name</label>
            <input type='text' name="name" placeholder="Name"></input>
            <label>E-Mail</label>
            <input type='text' name="email" placeholder="Email"></input>
            <label>Athlete's Name</label>
            <input type="text" name="athlete" placeholder="Athlete's Name"></input>
            <label>Phone Number</label>
            <input type="number" name="phone" placeholder="Phone Number"></input>
        </form>
    )
}

export default SignUp;