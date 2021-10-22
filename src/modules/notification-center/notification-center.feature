Feature: Centre de notification

    Scenario: En tant qu'utilisateur je peux voir des notifications en cliquant sur l'icone de centre de notifications
        Given Je vois le header de la page d'accueil
        When Je click sur l'icone de centre de notifications
        Then Je vois 5 notifications

    Scenario: En tant qu'utilisateur je peux charger de nouvelles notifications si je scroll vers le bas de la zone de notification
        Given J'ai ouvert le centre de notification
        When Je scroll vers le bas de la zone de notification
        Then Je vois 5 nouvelles notifications