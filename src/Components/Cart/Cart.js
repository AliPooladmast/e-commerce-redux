import classes from "../../Styles/Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "../Cart/CartItem";
import { connect } from "react-redux";
import { setIsCartShown } from "../../Containers/actions";
import { setAddCart } from "../../Containers/actions";
import { setRemoveCart } from "../../Containers/actions";
import { setAddUserItem } from "../../Containers/actions";
import { setRemoveCartAll } from "../../Containers/actions";

const mapStateToProps = (state) => ({
  items: state.cartItemChange.items,
  totalPrice: state.cartItemChange.totalPrice,
  currentUser: state.addItemsToUsers.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  onCloseCart: () => dispatch(setIsCartShown(false)),
  onAddCart: (item) => dispatch(setAddCart(item)),
  onRemoveCart: (item) => dispatch(setRemoveCart(item)),
  onRemoveCartAll: () => dispatch(setRemoveCartAll()),
  onAddItemsToUsers: (item) => dispatch(setAddUserItem(item)),
});

const Cart = (props) => {
  const {
    onCloseCart,
    items,
    totalPrice,
    onAddCart,
    onRemoveCart,
    onRemoveCartAll,
    onAddItemsToUsers,
    currentUser,
  } = props;

  const onAddToCart = (event) => {
    const idTag = event.target.id;
    onAddCart({ idTag, amount: 1 });
  };

  const onRemoveFromCart = (event) => {
    const idTag = event.target.id;
    onRemoveCart({ idTag, amount: -1 });
  };

  const CartItems = items.map((item) => (
    <CartItem
      {...item}
      key={item.id}
      onAddToCart={onAddToCart}
      onRemoveFromCart={onRemoveFromCart}
    />
  ));
  const totalPriceNumber = `تومان ${totalPrice.toFixed(0)}`;

  const onOrder = () => {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;
    onAddItemsToUsers({ items, currentUser, dateTime });
    onRemoveCartAll();
    alert("پرداخت انجام شد");
    onCloseCart();
  };
  return (
    <Modal>
      <ul className={classes["cart-items"]}>{CartItems}</ul>
      <div className={classes.total}>
        <span>قیمت کل</span>
        <span>{totalPriceNumber}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onCloseCart}>
          بستن
        </button>
        <button onClick={onOrder}>پرداخت</button>
      </div>
    </Modal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
