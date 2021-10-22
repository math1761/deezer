import {NotificationItem} from "../notification-center.type";

export const FETCH_NOTIFICATION_SUCCESS = 'FETCH_NOTIFICATION_SUCCESS';
export const FETCH_NOTIFICATION_PENDING = 'FETCH_NOTIFICATION_PENDING';
export const FETCH_NOTIFICATION_FAILURE = 'FETCH_NOTIFICATION_FAILURE';
export const TOGGLE_NOTIFICATION_CENTER = 'TOGGLE_NOTIFICATION_CENTER';
export const HAS_NO_NOTIFICATIONS = 'HAS_NO_NOTIFICATIONS';

export const fetchNotificationSuccess = (items: NotificationItem[], count: number) => ({
    type: FETCH_NOTIFICATION_SUCCESS,
    payload: items,
    count
});

export const fetchNotificationPending = () => ({
    type: FETCH_NOTIFICATION_PENDING
});

export const fetchNotificationFailure = (error: string) => ({
    type: FETCH_NOTIFICATION_FAILURE,
    error
});

export const toggleNotificationCenter = () => ({
    type: TOGGLE_NOTIFICATION_CENTER
});

export const hasNoNotifications = () => ({
    type: HAS_NO_NOTIFICATIONS
})