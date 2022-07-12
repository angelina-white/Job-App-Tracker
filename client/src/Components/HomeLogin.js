import Signup from './Signup';
import Login from './Login';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function HomeLogin({ setCurrentUser })
{
    const [showSignup, setShowSignup] = useState(false);
    const handleCloseSignup = () => setShowSignup(false);
    const handleShowSignup = () => setShowSignup(true);

    return (
        <div className="HomeLogin">
            <h3>Login</h3>
            <Login setCurrentUser = {setCurrentUser} />
            


            <Button variant="primary" onClick={handleShowSignup}>
                Signup
            </Button>
            <Modal show={showSignup} onHide={handleCloseSignup}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign up</Modal.Title>
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
    )
}
export default HomeLogin