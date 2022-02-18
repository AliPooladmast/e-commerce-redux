import Modal from "../UI/Modal";
import { connect } from "react-redux";
import { useState } from "react";
import { setIsCartShown } from "../../Containers/actions";
import { setIsLoginShown } from "../../Containers/actions";
import { setAddCart } from "../../Containers/actions";
import { setRemoveCart } from "../../Containers/actions";
import { setCurrentUser } from "../../Containers/actions";
import classes from "../../Styles/Cart.module.css";

const mapStateToProps = (state) => ({
  items: state.cartItemChange.items,
  totalPrice: state.cartItemChange.totalPrice,
  currentUser: state.addItemsToUsers.currentUser,
  users: state.addItemsToUsers.users,
});

const mapDispatchToProps = (dispatch) => ({
  onCloseCart: () => dispatch(setIsCartShown(false)),
  onCloseLogin: () => dispatch(setIsLoginShown(false)),
  onAddCart: (item) => dispatch(setAddCart(item)),
  onRemoveCart: (item) => dispatch(setRemoveCart(item)),
  onGetUser: (item) => dispatch(setCurrentUser(item)),
});

const SignIn = (props) => {
  const { onCloseLogin, onGetUser, users } = props;

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onLogin = () => {
    let userIndex = users.findIndex((item) => {
      return item.email === email && item.pass === pass;
    });
    if (userIndex === -1) {
      alert("not signed in yet");
    } else {
      onGetUser(users[userIndex]);
      onCloseLogin();
    }
    console.log(users[userIndex]);
  };

  return (
    <Modal>
      <article>
        <fieldset id="sign_up">
          <legend>ورود کاربر</legend>
          <div class=" mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              ایمیل
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                placeholder="email@example.com"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              پسورد
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                onChange={(event) => setPass(event.target.value)}
              />
            </div>
          </div>
        </fieldset>
        <div className={classes.actions}>
          <button onClick={onLogin}>ورود</button>
          <button className={classes["button--alt"]} onClick={onCloseLogin}>
            بستن
          </button>
        </div>
      </article>
    </Modal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
