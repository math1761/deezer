import { AnyAction } from "redux";
import { NotificationItem } from "../notification-center.type";
import * as actions from "./notification-center.actions";
import * as R from 'ramda';

const initialState = {
  notifications: [],
  isPending: false,
  isOpen: false,
  count: 1,
  hasMore: true,
  hasNoNotification: false,
  error: ''
};

export const REDUCER_KEY = "notification-center";

export type NotificationState = {
  [REDUCER_KEY]: {
    notifications: NotificationItem[];
    isPending: boolean;
    isOpen: boolean;
    count: number;
    hasMore: boolean;
    hasNoNotification: boolean;
    error: string;
  };
};

const notificationStateBuilder = (state, action: AnyAction) => {
  if (state.hasNoNotification) {
    return R.empty(state.notifications);
  }
  if (state.notifications.length < state.count) {
    return state.notifications.concat(action.payload);
  }
  return state.notifications;
};


export const notificationCenterReducer = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case actions.FETCH_NOTIFICATION_PENDING:
      return { ...state, isPending: true };
    case actions.FETCH_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notifications: notificationStateBuilder(state, action),
        hasMore: state.notifications.length === state.count ? false : true,
        isPending: false,
        count: action.count
      };
    case actions.FETCH_NOTIFICATION_FAILURE:
      return { ...state, error: action.error, isPending: false };
    case actions.TOGGLE_NOTIFICATION_CENTER:
      return { ...state, isOpen: !state.isOpen };
    case actions.HAS_NO_NOTIFICATIONS:
      return { ...state, hasNoNotification: !state.hasNoNotification, notifications: []}
    default:
      return state;
  }
};
