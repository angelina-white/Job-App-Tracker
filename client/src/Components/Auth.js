import { useState } from "react";

function Auth()
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [currentUser, setCurrentUser] = useState("");
    const [errors, setErrors] = useState("");

    function handleSubmit(e) 
    {
        e.preventDefault();

        const user = {username, password}

        fetch("/users", 
        {
          method: "POST",
          headers: 
          {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
        .then (res => {
          if (res.ok)
          {
            res.json().then(setCurrentUser)
          }
          else{
            res.json().then( e => setErrors(Object.entries(e.error).flat()))
          }
        })
        //   .then((r) => r.json())
        // //   .then((user) => onLogin(user));
        // .then((user) => console.log(user));
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Auth