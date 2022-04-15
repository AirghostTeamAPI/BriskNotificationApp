# About Brisk Notification App
An app that facilitates standard procedures for drivers in the event of a problem with their vehicle. In the application, he will always have warnings and recommendations notifications (named FOLs)  coming directly from the responsible company related with your vehicles.

# Sumary

|  | Topics |
| ---|---- | 
| 1 | <a href="#Team">Team</a>|
| 2 | <a href="#Technologies">Technologies</a>| 
| 3 | <a href="#Instalation-and-Execute">Instalation and Execute| 
| 4 | <a href="#Sprint-1">Sprint 1</a>|

# Team

[![Github Badge](https://img.shields.io/badge/MASTER-Letícia_Santos-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/LeticiaSan)

[![Github Badge](https://img.shields.io/badge/PO-Brenno_Richard-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/brennorichard)

[![Github Badge](https://img.shields.io/badge/DEV-Edryan_Maciel-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/edryan25)

[![Github Badge](https://img.shields.io/badge/DEV-Felipe_Silva-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Ffelipe-Ssilva)

[![Github Badge](https://img.shields.io/badge/DEV-Gabriel_Teixeira-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Gabrieltg7)

[![Github Badge](https://img.shields.io/badge/DEV-Henrique_Erzinger-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/henrique73)

[![Github Badge](https://img.shields.io/badge/DEV-Luiz_Miguel-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Salitop)

# Technologies

[![forthebadge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com)

[![forthebadge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[![forthebadge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/) 

[![forthebadge](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)

[![forthebadge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/pt-br)


# Instalation and Execute

## Back-end
1. Inside the directory '.\BriskNotificationApp\Back-end\config', create a file **'default.json'**

    ![](https://media.discordapp.net/attachments/829118904005558292/963870080305881129/unknown.png)

2. Inside the **'default.json'** file, add the following key:
   * ``{"mongoURI": "bank's credential (URI)"}``

3. Inside the directory '.\BriskNotificationApp\Back-end\', create a file **'.env'**

    ![](https://cdn.discordapp.com/attachments/829118904005558292/963874291542290462/unknown.png)

4. Inside the **'.env'** file, add the following key:
    * ``jwtSecret = jwt's secret token``

5. Open a **new terminal** and execute this comands in sequence:


    * ``cd .\Back-end\``
    * ``yarn install``
    * `` yarn server``

## Front-end
1. Open a **new terminal** and execute this comands in sequence:
    * ``cd .\Front-end\``
    * ``npm install``   
    * ``npm start``

<br>

# Sprint 1

## What have we done?
In this First Sprint, our focus was to list the **vehicles** and the **FOLs** according to the user. We concluded the login, the Home page, with the list of vehicles, and the Page with the list of FOLs. 

**Result:**
> User can view all listed documents (FOLs) related to their vehicle.

| Minimum Viable Product  | Description |
| ----------- | ---- |
| **List user vehicles** :heavy_check_mark:| return to user a list of their vehicles|
| **List FOLs by vehicle** :heavy_check_mark:| return to user a list of FOLs related with the selected vehicle|

## Prototype

![Prototype's Screen](https://media.discordapp.net/attachments/829118904005558292/964349343358386256/unknown.png?width=1020&height=418)

## Demo video

https://user-images.githubusercontent.com/62018632/163511036-9d59f5da-16ba-4b91-8cce-a8a7a83cdcaf.mp4


