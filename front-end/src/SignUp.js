import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const USER_REGEX = /^[a-zA-Z0-9]+$/;
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const SignUp = () => {
  const userRef = useRef(null);
  const errRef = useRef(null);

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [match, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/library.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Full page height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        position: 'relative', // Add position relative to the parent div
      }}
    >
    
    <div>
      <h2>Sign Up</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef} // Attach ref here
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          required
        />
         <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef} // Attach ref here
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          required
        />
      </form>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef} // Attach ref here
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          required
        />
      </form>
      </form>
    </div>
    </div>
  );
};

export default SignUp;
