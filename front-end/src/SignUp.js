import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);
  // !!useEffect to test REGEX function for user
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user)
    setValidName(result)
  }, [user])
  // !useEffect to test REGEX function for password
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match)
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('');

  }, [user, pwd, matchPwd])

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

      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent background
          padding: '20px',
          borderRadius: '8px',
        }}
      >

        <section>
          <p ref={errRef} className={errMsg ? "errmsg" :
            "offscreen"} aria-live="assertive">{errMsg}</p>
          <h2>Sign Up</h2>
          <form>

            <label htmlFor="username">
              Username:
              {/* latest change to add colors to fontAwesome icons */}
              <span style={{ color: validName ? "green" : "red", marginLeft: "5px" }}>
                <FontAwesomeIcon icon={validName ? faCheck : faTimes} />
              </span>
              
              <span className={validName ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={validName || !user ? "hide" :
                "invalid"
              }>
              </span>
            </label>


            <input
              type="text"
              id="username"
              ref={userRef} // Attach ref here
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              required
              // !aria-invalid used for screen reader accessibility
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />

            {/* problem with fontAwesome icons and info showing up before text input */}
            <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "hide"}>
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.<br />
              Must begin with a letter.<br />
              Letters, numbers, underscores, hyphens allowed.
            </p>


            <form>
              <label htmlFor="password">Password:</label>
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
              <label htmlFor="">re-enter:</label>
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
        </section>
      </div>
    </div>
  );
};

export default SignUp;
