import styled from 'styled-components';

export const NotificationItem = styled.li`
    border-left: ${({isRead = false}) => !isRead ? '2px solid blue' : ''}; 
    border-bottom: 1px solid grey;
    min-height: 32px;
    padding: 18px 16px 8px;
    position: relative;
    list-style: none;
    font-family: "Source sans Pro";
`;

export const ThumbnailContainer = styled.div`
    height: 62px;
    margin-bottom: 16px;
    display: flex;
    position: relative;
    align-items: center;

    .songContainer {
        display: flex;
        flex-direction: column;
        height: 35px;
        margin-left: 20px;
        justify-content: center;
    }
    .artist {
        font-size: 14px;
        height: 18px;
        line-height: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .song {
        font-size: 16px;
        height: 22px;
        line-height: 16px;
        margin-bottom: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: bold;
    }
`;