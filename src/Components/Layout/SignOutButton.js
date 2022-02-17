import { connect } from "react-redux";
import classes from "../../Styles/HeaderCartButton.module.css";
import { setIsLoginShown } from "../../Containers/actions";
import { setCurrentUser } from "../../Containers/actions";
import { setRoute } from "../../Containers/actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onOpenLogin: () => dispatch(setIsLoginShown(true)),
  onGetUser: (item) => dispatch(setCurrentUser(item)),
  onChangeRoute: (route) => dispatch(setRoute(route)),
});

const SignOutButton = (props) => {
  const { onGetUser, onChangeRoute } = props;

  const onSignOutButton = () => {
    onGetUser("");
    onChangeRoute("home");
  };

  return (
    <button className={classes.button} onClick={onSignOutButton}>
      <span className={classes.iconLogin}>
        <img
          src="https://img.icons8.com/material-outlined/24/ffffff/logout-rounded-left.png"
          alt="logout"
        />
      </span>
      <span className={classes.text}>خروج</span>
    </button>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SignOutButton);
