import Signup from './Signup';
import Login from './Login';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import loginPhoto from '../loginPhoto.jpg';

function HomeLogin({ setCurrentUser, renderLists })
{
    const [showSignup, setShowSignup] = useState(false);
    const handleCloseSignup = () => setShowSignup(false);
    const handleShowSignup = () => setShowSignup(true);

    return (
        <div className="HomeLogin">
            <div className="loginLeft">
                <img id="loginPhoto" src={loginPhoto} />
            </div>
            <div className="loginRight">
                <div className="loginRightBackground">
                    <h1 id="loginTitle">Login</h1>
                    <Login setCurrentUser = { setCurrentUser } renderLists={ renderLists }/>
                    
                    <Button variant="primary" id="signupButton" onClick={handleShowSignup}>
                        Signup
                    </Button>
                    <Modal show={showSignup} onHide={handleCloseSignup}>
                        <Modal.Header closeButton>
                            <Modal.Title id="signupTitle">Sign up</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Signup setCurrentUser = {setCurrentUser} handleCloseSignup={ handleCloseSignup }/>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseSignup}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}
export default HomeLogin