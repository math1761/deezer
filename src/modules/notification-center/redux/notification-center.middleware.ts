import * as actions from "./notification-center.actions";
import { NotificationState, REDUCER_KEY } from "./notification-center.reducer";

const createInterceptorMiddleware =
  (interceptors) => (store) => (next) => (action) => {
    interceptors
      .filter((interceptor) => interceptor.type === action.type)
      .forEach((interceptor) =>
        interceptor.handler(action, store.dispatch, store.getState())
      );

    next(action);
  };

const interceptors = [
  {
    type: actions.TOGGLE_NOTIFICATION_CENTER,
    handler: (_, dispatch, state: NotificationState) => {
      const { hasNoNotification, isOpen, notifications } = state[REDUCER_KEY];
      if (!hasNoNotification && !isOpen && notifications.length === 0) {
        dispatch(actions.fetchNotificationPending());
        fetch(`http://localhost:4280?pageSize=5&pageNumber=1`)
          .then((res) => res.json())
          .then((response) => {
            dispatch(
              actions.fetchNotificationSuccess(
                response.notifications,
                response.count
              )
            );
          })
          .catch((error) => dispatch(actions.fetchNotificationFailure(error)));
      }
    },
  },
  {
    type: actions.HAS_NO_NOTIFICATIONS,
    handler: (_, dispatch, state: NotificationState) => {
      const { hasNoNotification, isOpen } = state[REDUCER_KEY];
      if (!hasNoNotification && isOpen) {
        dispatch(actions.toggleNotificationCenter());
      }
    },
  },
];

export const notificationCenterMiddleware =
  createInterceptorMiddleware(interceptors);
