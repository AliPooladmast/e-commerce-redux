import { connect } from "react-redux";
import classes from "../../Styles/HeaderCartButton.module.css";
import { setIsLoginShown } from "../../Containers/actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onOpenLogin: () => dispatch(setIsLoginShown(true)),
});

const SignInButton = (props) => {
  const { onOpenLogin } = props;

  return (
    <button className={classes.button} onClick={onOpenLogin}>
      <span className={classes.iconLogin}>
        <img
          src="https://img.icons8.com/material-sharp/24/ffffff/login-rounded-right.png"
          alt="login-icon"
        />
      </span>
      <span className={classes.text}>ورود</span>
    </button>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInButton);
