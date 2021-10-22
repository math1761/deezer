import React, { FC, useCallback, useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';
import { isExpirationDate, useFetch } from './infra/notification-center.infra';
import { NotificationState, REDUCER_KEY } from './redux/notification-center.reducer';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationCenterContainer, NotificationCenterPopin, Spinner } from './notification-center.style';

const NotificationCenter: FC<{}> = () => {
    const {notifications, sendQuery, hasMore, error} = useFetch();
    const isOpen = useSelector((state: NotificationState) => state[REDUCER_KEY].isOpen);
    const hasNoNotification = useSelector((state: NotificationState) => state[REDUCER_KEY].hasNoNotification);
    const filteredNotifications = notifications.filter(notification => isExpirationDate(notification.expirationDate));
    const loaderRef = useRef<HTMLDivElement>();
    
    const handleObserver = useCallback(async (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            hasMore && await sendQuery();
        }
    }, []);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0
          };
          const observer = new IntersectionObserver(handleObserver, option);
          if (loaderRef.current) observer.observe(loaderRef.current);
    }, [isOpen, handleObserver]);

    return (
        <div>
            {isOpen &&
                <NotificationCenterPopin>
                    <NotificationCenterContainer>
                        {hasNoNotification && <p>Votre centre de notification est vide !</p>}
                        <ul>
                            {filteredNotifications.map((notification, key) =>
                                <NotificationComponent
                                    key={key}
                                    type={notification.type}
                                    content={notification.content}
                                    thumbnail={notification.thumbnail}
                                    description={notification.description}
                                    song={notification.song}
                                    artist={notification.artist}
                                    userShare={notification.userShare} />)}
                        </ul>
                        {hasMore && <div ref={loaderRef}><Spinner/></div>}
                        {error && <p>Impossible de récupérer de nouvelles notifications</p>}
                    </NotificationCenterContainer>
                </NotificationCenterPopin>
            }
        </div>
    )
}

export default NotificationCenter;