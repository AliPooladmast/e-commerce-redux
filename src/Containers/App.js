import { Fragment } from "react";
import { connect } from "react-redux";
import Header from "../Components/Layout/Header";
import Meals from "../Components/Meals/Meals";
import Cart from "../Components/Cart/Cart";
import SignIn from "../Components/Cart/SignIn";

const mapStateToProps = (state) => ({
  IsCartShown: state.cartDisplay.IsCartShown,
  IsLoginShown: state.loginDisplay.IsLoginShown,
  route: state.routeChange.route,
});

const mapDispatchToProps = (dispatch) => ({});

function App(props) {
  const { IsCartShown, IsLoginShown, route } = props;
  return (
    <Fragment>
      {IsCartShown && <Cart />}
      {IsLoginShown && <SignIn />}
      <Header />
      <main>{route === "personal" ? <div></div> : <Meals />}</main>
    </Fragment>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
