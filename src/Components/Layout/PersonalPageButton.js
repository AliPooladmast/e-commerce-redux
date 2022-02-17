import { connect } from "react-redux";
import classes from "../../Styles/HeaderCartButton.module.css";
import { setRoute } from "../../Containers/actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onChangeRoute: (route) => dispatch(setRoute(route)),
});

const PersonalPageButton = (props) => {
  const { onChangeRoute } = props;
  return (
    <button
      className={classes.button}
      onClick={() => onChangeRoute("personal")}
    >
      <span className={classes.iconLogin}>
        <img
          src="https://img.icons8.com/windows/32/ffffff/favourite-file.png"
          alt="personalpage"
        />
      </span>
      <span className={classes.text}>صفحه شخصی</span>
    </button>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalPageButton);
