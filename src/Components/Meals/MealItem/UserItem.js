import classes from "../../../Styles/UserItem.module.css";

const UserItem = (props) => {
  const { name, description, dateTime, amount } = props;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
      </div>
      <div>
        <div className={classes.price}>{`${dateTime}   :تاریخ خرید`}</div>
        <div className={classes.price}>{`${amount}   :تعداد کالا`}</div>
      </div>
    </li>
  );
};

export default UserItem;
