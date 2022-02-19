import classes from "../../../Styles/AvailableUsers.module.css";
import UserItem from "../MealItem/UserItem";
import { DUMMY_MEALS } from "../../../Containers/constants";
import Card from "../../UI/Card";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  users: state.addItemsToUsers.users,
  currentUser: state.addItemsToUsers.currentUser,
});

const mapDispatchToProps = (dispatch) => ({});

const AvailableUsers = (props) => {
  const { users, currentUser } = props;
  let userIndex = users.findIndex((user) => user.email === currentUser.email);
  let newCurrentUser = users[userIndex];

  const userList = newCurrentUser.ordered.map((item) => (
    <UserItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      dateTime={item.dateTime}
      amount={item.amount}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{userList}</ul>
      </Card>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AvailableUsers);
