import classes from "../../../Styles/AvailableMeals.module.css";
import MealItem from "../MealItem/MealItem";
import { DUMMY_MEALS } from "../../../Containers/constants";

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <ul>{mealList}</ul>
    </section>
  );
};

export default AvailableMeals;
