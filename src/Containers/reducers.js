import { IS_CARD_SHOWN } from "./constants";
import { IS_LOGIN_SHOWN } from "./constants";
import { ADD_TO_CART } from "./constants";
import { REMOVE_FROM_CART } from "./constants";
import { IS_BUTTON_HIGHLIGHTED } from "./constants";
import { DUMMY_MEALS } from "./constants";
import { CHANGE_ROUTE } from "./constants";
import { ADD_CURRENT_USER } from "./constants";
import { ADD_USER_ITEM } from "./constants";
import { REMOVE_FROM_CART_ALL } from "./constants";

const initUsers = {
  users: [
    {
      id: "user1",
      email: "pokemon4ever72@gmail.com",
      pass: "pokemon4ever",
      ordered: [],
    },
    { id: "user2", email: "Caraqu@gmail.com", pass: "a123789654", ordered: [] },
    {
      id: "user3",
      email: "bahogbelat@gmail.com",
      pass: "iyot14398",
      ordered: [],
    },
    {
      id: "user4",
      email: "updateios27@gmail.com",
      pass: "rosie124",
      ordered: [],
    },
    { id: "user5", email: "cmonster@gmail.com", pass: "554533", ordered: [] },
  ],
  currentUser: "",
};

export const addItemsToUsers = (state = initUsers, action = {}) => {
  const { users, currentUser } = state;

  switch (action.type) {
    case ADD_CURRENT_USER:
      return { ...state, currentUser: action.payload };

    case ADD_USER_ITEM: {
      const { items, dateTime } = action.payload;
      let userIndex = users.findIndex(
        (user) => user.email === currentUser.email
      );

      let timedItems = items.map((item) => ({ ...item, dateTime }));
      console.log(timedItems);

      let newCurrentUser = users[userIndex];
      let updatedItems = [...newCurrentUser.ordered, ...timedItems];
      let updatedUser = {
        ...newCurrentUser,
        ordered: updatedItems,
        dateTime,
      };
      users[userIndex] = updatedUser;

      return {
        ...state,
        users: users,
      };
    }

    default:
      return state;
  }
};

const initStateRoute = {
  route: "home",
};

export const routeChange = (state = initStateRoute, action = {}) => {
  switch (action.type) {
    case CHANGE_ROUTE:
      return { ...state, route: action.payload };
    default:
      return state;
  }
};

const initStateCartDisplay = {
  IsCartShown: false,
};

export const cartDisplay = (state = initStateCartDisplay, action = {}) => {
  switch (action.type) {
    case IS_CARD_SHOWN:
      return { ...state, IsCartShown: action.payload };
    default:
      return state;
  }
};

const initStateLoginDisplay = {
  IsLoginShown: false,
};

export const loginDisplay = (state = initStateLoginDisplay, action = {}) => {
  switch (action.type) {
    case IS_LOGIN_SHOWN:
      return { ...state, IsLoginShown: action.payload };
    default:
      return state;
  }
};

const initStateHeadeButton = {
  IsButtonHighlighted: false,
};

export const buttonHighlight = (state = initStateHeadeButton, action = {}) => {
  switch (action.type) {
    case IS_BUTTON_HIGHLIGHTED:
      return { ...state, IsButtonHighlighted: action.payload };
    default:
      return state;
  }
};

const initStateItems = {
  items: [],
  totalPrice: 0,
};

export const cartItemChange = (state = initStateItems, action = {}) => {
  const { items, totalPrice } = state;

  switch (action.type) {
    case ADD_TO_CART: {
      const { idTag, amount } = action.payload;

      const addedItemIndex = DUMMY_MEALS.findIndex((item) => item.id === idTag);
      const addedItem = DUMMY_MEALS[addedItemIndex];

      const addedItemComplete = { ...addedItem, amount };

      const updatedTotalPrice = totalPrice + addedItemComplete.price * amount;

      let updatedItem;
      let updatedItems;

      const existingItemIndex = items.findIndex((item) => item.id === idTag);
      const existingItem = items[existingItemIndex];

      if (existingItem) {
        updatedItem = { ...existingItem, amount: existingItem.amount + amount };
        updatedItems = [...items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = items.concat(addedItemComplete);
      }

      return {
        ...state,
        items: updatedItems,
        totalPrice: updatedTotalPrice,
      };
    }

    case REMOVE_FROM_CART: {
      const { idTag, amount } = action.payload;

      const removedItemIndex = items.findIndex((item) => item.id === idTag);
      const removedItem = items[removedItemIndex];

      const updatedTotalPrice = totalPrice + removedItem.price * amount;

      let updatedItem;
      let updatedItems;

      if (removedItem.amount === 1) {
        updatedItems = items.filter((item) => item.id !== idTag);
      } else {
        updatedItem = { ...removedItem, amount: removedItem.amount + amount };
        updatedItems = [...items];
        updatedItems[removedItemIndex] = updatedItem;
      }

      return {
        ...state,
        items: updatedItems,
        totalPrice: updatedTotalPrice,
      };
    }

    case REMOVE_FROM_CART_ALL: {
      return {
        ...state,
        items: [],
        totalPrice: 0,
      };
    }

    default:
      return state;
  }
};
