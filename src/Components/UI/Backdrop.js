import classes from "../../Styles/Modal.module.css";
import { connect } from "react-redux";
import { setIsCartShown } from "../../Containers/actions";
import { setIsLoginShown } from "../../Containers/actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onCloseCart: () => dispatch(setIsCartShown(false)),
  onCloseLogin: () => dispatch(setIsLoginShown(false)),
});

const BackDrop = (props) => {
  const { onCloseCart, onCloseLogin } = props;

  const onClose = () => {
    onCloseCart();
    onCloseLogin();
  };

  return <div className={classes.backdrop} onClick={onClose} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(BackDrop);
