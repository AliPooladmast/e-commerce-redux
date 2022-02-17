import classes from "../../../Styles/MealItem.module.css";
import MealItemFrom from "./MealItemForm";
import Card from "../../UI/Card";
import pen from "../../../assets/Images/pen.jpg";
import printer from "../../../assets/Images/printer.png";
import projector from "../../../assets/Images/projector.jpg";
import tablet from "../../../assets/Images/tablet.jpg";

const MealItem = (props) => {
  const { id, name, description, price } = props;
  const priceRounded = price.toFixed(0);
  return (
    <li className={classes.meal}>
      <Card>
        <div className={classes.mealImage}>
          {id === "pen" && <img src={pen} alt="" />}
          {id === "printer" && <img src={printer} alt="" />}
          {id === "projector" && <img src={projector} alt="" />}
          {id === "tablet" && <img src={tablet} alt="" />}
        </div>
        <section className={classes.mealText}>
          <div>
            <h3>{name}</h3>
            <div className={classes.description}>{description}</div>
            <div className={classes.price}>{priceRounded}</div>
          </div>
          <div>
            <MealItemFrom id={id} />
          </div>
        </section>
      </Card>
    </li>
  );
};

export default MealItem;
