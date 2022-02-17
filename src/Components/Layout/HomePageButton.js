import { connect } from "react-redux";
import classes from "../../Styles/HeaderCartButton.module.css";
import { setRoute } from "../../Containers/actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onChangeRoute: (route) => dispatch(setRoute(route)),
});

const HomePageButton = (props) => {
  const { onChangeRoute } = props;

  return (
    <button className={classes.button} onClick={() => onChangeRoute("home")}>
      <span className={classes.iconLogin}>
        <img
          src="https://img.icons8.com/material-outlined/24/ffffff/home-page.png"
          alt="homepage"
        />
      </span>
      <span className={classes.text}>صفحه اصلی</span>
    </button>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageButton);
