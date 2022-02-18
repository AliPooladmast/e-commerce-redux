import { Fragment } from "react";
import { connect } from "react-redux";
import HeaderCartButton from "./HeaderCartButton";
import classes from "../../Styles/Header.module.css";
// import mealsImage1x from "../../Assets/Images/meals@1x.jpg";
// import mealsImageWeb1x from "../../Assets/Images/meals@1x.webp";
import mealsImage2x from "../../assets/Images/ecommerce.jpg";
import mealsImageWeb2x from "../../assets/Images/ecommerce.webp";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import PersonalPageButton from "./PersonalPageButton";
import HomePageButton from "./HomePageButton";

const mapStateToProps = (state) => ({
  currentUser: state.addItemsToUsers.currentUser,
});

const mapDispatchToProps = (dispatch) => ({});

const Header = (props) => {
  // const mealsImageWeb = `${mealsImageWeb1x} 1x, ${mealsImageWeb2x} 2x`;
  // const mealsImage = `${mealsImage1x} 1x, ${mealsImage2x} 2x`;
  const { currentUser } = props;

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>سفارش آنلاین</h1>
        {currentUser === "" ? (
          <SignInButton />
        ) : (
          <Fragment>
            <SignOutButton />
            <PersonalPageButton />
            <HomePageButton />
          </Fragment>
        )}
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <picture>
          <source type="image/webp" srcset={mealsImageWeb2x} />
          <source type="image/jpg" srcset={mealsImage2x} />
          <img src={mealsImage2x} alt="A table full of delicious food!" />
        </picture>
      </div>
    </Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
