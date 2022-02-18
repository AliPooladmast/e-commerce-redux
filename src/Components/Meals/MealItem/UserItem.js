import classes from "../../../Styles/UserItem.module.css";

const UserItem = (props) => {
  const { name, description, dateTime } = props;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{dateTime}</div>
      </div>
    </li>
  );
};

export default UserItem;
