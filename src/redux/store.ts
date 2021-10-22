import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { notificationCenterMiddleware } from "../modules/notification-center/redux/notification-center.middleware";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...[thunk, logger, notificationCenterMiddleware])
  )
);
