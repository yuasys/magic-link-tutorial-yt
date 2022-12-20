import "./App.css";
import { useEffect, useRef } from "react";
import { Magic } from "magic-sdk";
import { useNavigate } from "react-router-dom";

let magicEmail;

function App() {
  const emailRef = useRef();

  const navigate = useNavigate(); //redirect

  useEffect(() => {
    magicEmail = new Magic("pk_live_91363424587F59C9");
  }, []);

  const hendleLogin = async () => {
    //MagicLinkを使ったログインの実装
    try {
      console.log(emailRef.current.value);
      await magicEmail.auth.loginWithMagicLink({
        email: emailRef.current.value,
      });
      navigate("/homepage");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <div className="loginForm">
        <div className="loginContents">
          <h2>ログイン</h2>
          <input type="email" placeholder="メールアドレス" ref={emailRef} />
          <button className="loginButton" onClick={() => hendleLogin()}>
            ログイン
          </button>
          <div className="buttons">
            <button>Github</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
