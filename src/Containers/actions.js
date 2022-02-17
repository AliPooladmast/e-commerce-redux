import { IS_CARD_SHOWN } from "./constants";
import { ADD_TO_CART } from "./constants";
import { REMOVE_FROM_CART } from "./constants";
import { IS_BUTTON_HIGHLIGHTED } from "./constants";
import { IS_LOGIN_SHOWN } from "./constants";
import { ADD_CURRENT_USER } from "./constants";
import { CHANGE_ROUTE } from "./constants";
import { ADD_USER_ITEM } from "./constants";

export const setAddUserItem = (event) => ({
  type: ADD_USER_ITEM,
  payload: event,
});

export const setRoute = (event) => ({
  type: CHANGE_ROUTE,
  payload: event,
});

export const setCurrentUser = (event) => ({
  type: ADD_CURRENT_USER,
  payload: event,
});

export const setIsCartShown = (event) => ({
  type: IS_CARD_SHOWN,
  payload: event,
});

export const setIsLoginShown = (event) => ({
  type: IS_LOGIN_SHOWN,
  payload: event,
});

export const setIsButtonHighlighted = (event) => ({
  type: IS_BUTTON_HIGHLIGHTED,
  payload: event,
});

export const setAddCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const setRemoveCart = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item,
});
