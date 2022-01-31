import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import AuthContext from "../../store/auth-context";
import classes from "./AdminForm.module.css";

const AdminForm = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredFirstNameTouched, setEnteredFirstNameTouched] = useState(false);

  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [enteredEmailLogin, setEnteredEmailLogin] = useState("");
  const [enteredEmailLoginTouched, setEnteredEmailLoginTouched] =
    useState(false);

  const [enteredPasswordLogin, setEnteredPasswordLogin] = useState("");
  const [enteredPasswordLoginTouched, setEnteredPasswordLoginTouched] =
    useState(false);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);

  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [enteredConfirmPasswordTouched, setEnteredConfirmPasswordTouched] =
    useState(false);

  const [enteredMobileNumber, setEnteredMobileNumber] = useState("");
  const [enteredMobileNumberTouched, setEnteredMobileNumberTouched] =
    useState(false);

  const enteredFirstNameIsValid = enteredFirstName.trim() !== "";
  const firstNameInputIsInValid =
    !enteredFirstNameIsValid && enteredFirstNameTouched;

  const enteredLastNameIsValid = enteredLastName.trim() !== "";
  const lastNameInputIsInValid =
    !enteredLastNameIsValid && enteredLastNameTouched;

  const enteredEmailIsValid = enteredEmail.trim() !== "";
  const emailInputIsInValid = !enteredEmailIsValid && enteredEmailTouched;

  const enteredEmailIsValidLogin = enteredEmailLogin.trim() !== "";
  const emailInputIsInvalidLogin =
    !enteredEmailIsValidLogin && enteredEmailLoginTouched;

  const enteredPasswordIsValidLogin = enteredPasswordLogin.trim() !== "";
  const passwordInputIsInvalidLogin =
    !enteredPasswordIsValidLogin && enteredPasswordLoginTouched;

  const enteredPasswordIsValid = enteredPassword.trim() !== "";
  const passwordInputIsInValid =
    !enteredPasswordIsValid && enteredPasswordTouched;

  const enteredConfirmPasswordIsValid = enteredConfirmPassword.trim() !== "";
  const ConfirmPasswordInputIsInValid =
    !enteredConfirmPasswordIsValid && enteredConfirmPasswordTouched;

  const enteredMobileNumberIsValid = enteredMobileNumber.trim() !== "";
  const mobileNumberInputIsInValid =
    !enteredMobileNumberIsValid && enteredMobileNumberTouched;

  // let formIsValid = false;

  // if (enteredFirstNameIsValid) {
  //   formIsValid = true;
  // }

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const firstNameInputChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const firstNameInputBlurHandler = (event) => {
    setEnteredFirstNameTouched(true);
  };

  const lastNameInputChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const lastNameInputBlurHandler = (event) => {
    setEnteredLastNameTouched(true);
  };
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const emailInputChangeHandlerLogin = (event) => {
    setEnteredEmailLogin(event.target.value);
  };

  const emailInputBlurHandlerLogin = () => {
    setEnteredEmailLoginTouched(true);
  };

  const passwordInputChangeHandlerLogin = (event) => {
    setEnteredPasswordLogin(event.target.value);
  };

  const passwordInputBlurHandlerLogin = () => {
    setEnteredPasswordLoginTouched(true);
  };

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const passwordInputBlurHandler = (event) => {
    setEnteredPasswordTouched(true);
  };

  const confirmPasswordInputChangeHandler = (event) => {
    setEnteredConfirmPassword(event.target.value);
  };

  const confirmPasswordInputBlurHandler = (event) => {
    setEnteredConfirmPasswordTouched(true);
  };

  const mobileNumberInputChangeHandler = (event) => {
    setEnteredMobileNumber(event.target.value);
  };

  const mobileNumberInputBlurHandler = (event) => {
    setEnteredMobileNumberTouched(true);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    if (isLogin) {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: enteredEmailLogin,
            password: enteredPasswordLogin,
          }),
        });

        const responseData = await response.json();
        setIsLoading(false);

        if (responseData.status === "201") {
          authCtx.login(responseData.token);
          history.replace("/");
          console.log(responseData.message);
        } else {
          setEnteredEmailLogin("");
          setEnteredPasswordLogin("");

          setEnteredEmailLoginTouched(false);
          setEnteredPasswordLoginTouched(false);
          console.log(responseData.message);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        setIsLoading(true);

        const response = await fetch("http://localhost:5000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: enteredFirstName,
            lastName: enteredLastName,
            email: enteredEmail,
            mobileNumber: enteredMobileNumber,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
          }),
        });

        const responseData = await response.json();
        setIsLoading(false);

        if (
          responseData.status !== "422" &&
          enteredPassword === enteredConfirmPassword
        ) {
          authCtx.login(responseData.token);
          history.replace("/");
          console.log(responseData.message);
        } else {
          setEnteredEmail("");
          setEnteredFirstName("");
          setEnteredLastName("");
          setEnteredMobileNumber("");
          setEnteredPassword("");
          setEnteredConfirmPassword("");

          setEnteredConfirmPasswordTouched(false);
          setEnteredPasswordTouched(false);
          setEnteredEmailTouched(false);
          setEnteredFirstNameTouched(false);
          setEnteredLastNameTouched(false);
          setEnteredMobileNumberTouched(false);
          console.log(responseData.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>

      <form onSubmit={formSubmitHandler}>
        {!isLogin && (
          <div>
            <div className={classes.control}>
              <label htmlFor="text">First Name</label>
              <input
                type="text"
                id="fname"
                placeholder="First Name"
                required
                onChange={firstNameInputChangeHandler}
                onBlur={firstNameInputBlurHandler}
                value={enteredFirstName}
              />
              {firstNameInputIsInValid && <h6>First Name must not be empty</h6>}
            </div>

            <div className={classes.control}>
              <label htmlFor="text">Last Name</label>
              <input
                type="text"
                id="lname"
                placeholder="Last Name"
                required
                onChange={lastNameInputChangeHandler}
                onBlur={lastNameInputBlurHandler}
                value={enteredLastName}
              />
              {lastNameInputIsInValid && <h6>Last Name must not be empty</h6>}
            </div>

            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                id="email"
                required
                onChange={emailInputChangeHandler}
                onBlur={emailInputBlurHandler}
                value={enteredEmail}
              />
              {emailInputIsInValid && <h6>Email must not be empty</h6>}
            </div>

            <div className={classes.control}>
              <label htmlFor="text">Mobile Number</label>
              <input
                type="text"
                id="number"
                placeholder="10 digit mobile number"
                pattern="[0-9]{10}"
                required
                onChange={mobileNumberInputChangeHandler}
                onBlur={mobileNumberInputBlurHandler}
                value={enteredMobileNumber}
              />
              {mobileNumberInputIsInValid && (
                <h6>Mobile Number must not be empty</h6>
              )}
            </div>

            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                minLength="6"
                onChange={passwordInputChangeHandler}
                onBlur={passwordInputBlurHandler}
                value={enteredPassword}
              />
              {passwordInputIsInValid && <h6>Password must not be empty</h6>}
            </div>

            <div className={classes.control}>
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                id="cpassword"
                placeholder="Confirm Password"
                required
                minLength="6"
                onChange={confirmPasswordInputChangeHandler}
                onBlur={confirmPasswordInputBlurHandler}
                value={enteredConfirmPassword}
              />
              {ConfirmPasswordInputIsInValid && (
                <h6>Confirm Password must not be empty</h6>
              )}
            </div>
          </div>
        )}

        {isLogin && (
          <div>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="abc@gmail.com"
                required
                onChange={emailInputChangeHandlerLogin}
                onBlur={emailInputBlurHandlerLogin}
                value={enteredEmailLogin}
              />
              {emailInputIsInvalidLogin && <h6>Email must not be empty</h6>}
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                onChange={passwordInputChangeHandlerLogin}
                onBlur={passwordInputBlurHandlerLogin}
                value={enteredPasswordLogin}
              />
              {passwordInputIsInvalidLogin && (
                <h6>Password must not be empty</h6>
              )}
            </div>
          </div>
        )}

        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && (
            <RingLoader color="white" height={80} width={80}></RingLoader>
          )}

          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AdminForm;