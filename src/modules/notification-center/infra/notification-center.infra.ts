import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNotificationSuccess,
  fetchNotificationFailure,
  fetchNotificationPending} from "../redux/notification-center.actions";
import {
  NotificationState,
  REDUCER_KEY,
} from "../redux/notification-center.reducer";

export const isExpirationDate = (expirationDate: string) => {
  const date = new Date(expirationDate);
  const expirationTime = new Date().getTime() - date.getTime();
  return expirationTime < 0 ? true : false;
};

export const useFetch = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1)
  const notifications = useSelector(
    (state: NotificationState) => state[REDUCER_KEY].notifications
  );
  const isPending = useSelector(
    (state: NotificationState) => state[REDUCER_KEY].isPending
  );
  const hasMore = useSelector(
    (state: NotificationState) => state[REDUCER_KEY].hasMore
  );
  const error = useSelector((state: NotificationState) => state[REDUCER_KEY].error);

  const sendQuery = useCallback(async () => {
    if (page < 3) {
      dispatch(fetchNotificationPending());
      fetch(`http://localhost:4280?pageSize=5&pageNumber=${page}`)
        .then((res) => res.json())
        .then((response) => {
          dispatch(
            fetchNotificationSuccess(response.notifications, response.count)
          );
          setPage(page + 1);
        })
        .catch((error) => dispatch(fetchNotificationFailure(error)));
    }
  }, [page]);

  return { isPending, notifications, sendQuery, hasMore, error };
};
