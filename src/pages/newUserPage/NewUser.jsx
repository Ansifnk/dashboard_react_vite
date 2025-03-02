
import './newUser.css'

const NewUser = () => {
    return (
        <div className='newUser' >
            <h1 className="newUserTitle">New User</h1>
            <form action="" className='newUserForm' >
                <div className="newUserItem">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='Lorem' />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder='Lorem Ipsum' />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='lorem@email.com' />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='password' />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Phone</label>
                    <input type="text" placeholder='+91 123 456 7890' />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder='Kerala | India' />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name='gender' id='male' value='male' />
                        <label for="male">Male</label>
                        <input type="radio" name='gender' id='female' value='female' />
                        <label for="male">Female</label>
                        <input type="radio" name='gender' id='other' value='other' />
                        <label for="male">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>

                    </select>
                </div>
                <button className="newUserBtn">Create</button>
            </form>
        </div>
    )
}

export default NewUser
