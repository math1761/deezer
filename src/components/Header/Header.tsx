import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotificationCenter from '../../modules/notification-center/notification-center';
import { Chip } from '../../modules/notification-center/notification-center.style';
import { hasNoNotifications, toggleNotificationCenter } from '../../modules/notification-center/redux/notification-center.actions';
import { NotificationState, REDUCER_KEY } from '../../modules/notification-center/redux/notification-center.reducer';
import { HeaderContainer } from './Header.style';

export const Header = () => {
    const dispatch = useDispatch();
    const count = useSelector((state: NotificationState) => state[REDUCER_KEY].count);

    return (
        <HeaderContainer>
            <div>
                <p>Cocher pour avoir un cas de notifications vide</p>
                <input type="checkbox" name="hasNotifications" value="false" onChange={() => dispatch(hasNoNotifications())}/>
            </div>
            
            <div>
                <div onClick={() => dispatch(toggleNotificationCenter())} data-testid="bell">
                    <FontAwesomeIcon 
                        icon={faBell}
                        size="2x"
                        className="notificationBell" />
                    <Chip>{count}</Chip>
                </div>
                <NotificationCenter />
            </div>
        </HeaderContainer>
    );
};
