import React, { FC, useState } from 'react';
import * as types from '../../notification-center.type';
import {NotificationItem, ThumbnailContainer} from './notification.style';
import {NotificationType, NotificationContent} from '../../notification-center.type';

const buildContent = () => ({
    [NotificationContent.TRACK]: 'Nouveau single',
    [NotificationContent.ALBUM]: 'Nouvel album',
    [NotificationContent.PLAYLIST]: 'Nouvelle playlist',
    [NotificationContent.PODCAST]: 'Nouveau podcast'
});

const buildType = (userShare?: string) => ({
    [NotificationType.UPDATE]: 'Playlist mise à jour',
    [NotificationType.RECOMMANDATION]: 'Titre recommandé',
    [NotificationType.RELEASE]: "Nouveau titre",
    [NotificationType.SHARE]: `${userShare} a partagé avec vous`
});

export const NotificationComponent: FC<Omit<types.NotificationItem, "expirationDate">> = ({
    type,
    content,
    thumbnail,
    description,
    song,
    artist,
    userShare
}) => {
    const [isRead, setIsRead] = useState(false);
    return (
        <>
            <NotificationItem data-testid="notificationItem" isRead={isRead} onMouseEnter={() => setIsRead(true)}>
                <ThumbnailContainer>
                    <img src={thumbnail} alt={content}/>
                    <div className="songContainer">
                        <span className="song">{song}</span>
                        <span className="artist">{artist}</span>
                    </div>
                </ThumbnailContainer>
                <p>{description.length >= 0 && description}</p>
                <p>{buildType(userShare)[type]} {buildContent()[content]}</p>
            </NotificationItem>
        </>
    )
}