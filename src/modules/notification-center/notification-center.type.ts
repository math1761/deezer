
export enum NotificationType {
    RECOMMANDATION = 'recommandation',
    RELEASE = 'release',
    SHARE = 'share',
    UPDATE = 'update'
}

export enum NotificationContent {
    ALBUM = 'album',
    PLAYLIST = 'playlist',
    TRACK = 'track',
    PODCAST = 'podcast'
}

export type NotificationItem = {
    type: string;
    content: string;
    song: string;
    artist: string;
    thumbnail: string;
    expirationDate: string;
    description: string;
    userShare?: string;
};

export type NotificationsResponse = {
    page: number;
    notifications: NotificationItem[];
};