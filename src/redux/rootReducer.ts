import {combineReducers} from 'redux';
import {REDUCER_KEY as notificationReducerKey, notificationCenterReducer} from '../modules/notification-center/redux/notification-center.reducer';

export const rootReducer = combineReducers({
    [notificationReducerKey]: notificationCenterReducer
});
