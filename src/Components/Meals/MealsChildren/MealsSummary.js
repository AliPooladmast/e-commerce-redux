import classes from "../../../Styles/MealsSummary.module.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  currentUser: state.addItemsToUsers.currentUser,
});

const mapDispatchToProps = (dispatch) => ({});

const MealsSummary = (props) => {
  const { currentUser } = props;

  return (
    <section className={classes.summary}>
      <h2>خوش آمدید</h2>
      <p>{currentUser.email}</p>
      <p>سایت سفارش آنلاین آماده خدمت گذاری به سراسر ایران</p>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MealsSummary);
