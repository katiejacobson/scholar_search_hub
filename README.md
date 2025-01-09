# Final Project: Scholar Search Hub

### Overview

- Intro
- Figma
- Images

**Description of Project**

This project builds a webpage that allows users to search a database of open-access journal articles based on a keyword. Information returned includes the title, publication date, authors, and the abstract of journal articles where the abstract contains the keyword. Users can also open the journal article to a new page by clicking on an "Open article" icon.

Logged-in users can save journal articles to their profile and then delete them if needed.

Link to backend repo: TBD

**Description of Techniques**

In this project, React + Vite were utilized to create an interactive webpage. The Core API was utilized to fetch open-access journal articles based on keyword.

Up to 50 journal articles are returned from the keyword and 3 cards including article title, publication date, authors, and abstract are displayed at a time. A "show more" button allows 3 more articles to be added.

**Figma**

- [Link to the project on Figma] (https://www.figma.com/design/zMqxdcDRBeQFG15rH7Q4MN/Jacobson-Final-Project?node-id=16208-318&m=dev&t=Gju54wKAW4aQC66t-1)

**Images**
src/assets/screenshots/DesktopView_AddArticleModal.png
src/assets/screenshots/DesktopView_ArticleSearch.png
src/assets/screenshots/DesktopView_ConfirmationModal.png
src/assets/screenshots/DesktopView_LoggedIn.png
src/assets/screenshots/DesktopView_LoggedOut.png
src/assets/screenshots/DesktopView_LoginModal.png
src/assets/screenshots/DesktopView_ProfileWithDeleteConfirmation.png
src/assets/screenshots/DesktopView_ProfileWithSavedArticles.png
src/assets/screenshots/Mobile_View_LoggedOut.png
src/assets/screenshots/MobileView_ArticleSearch.pngsrc/assets/screenshots/TabletView_ArticleSearch.png

**Deployment Information**
run locally on port 3000 with 'npm run dev'

**Github Pages URL**
https://katiejacobson.github.io/scholar_search_hub/

**To Improve**

In the deployed website, information is not being returned from the Core API due to CORs policy so a server-side proxy will be built next to deal with the CORS headers.

To Be Built in Stage 2: An api that can fetch data from a local server and a db.json file will be added. Items can be added and deleted from the database.

To Be Built in Stage 3: A currentUser context will be added so that once authorization has occurred, users can access items that they have added. An api that can fetch data from a local server that is running an Express server that was created by me will been added. Users will be able to register, sign-in, as well as add, save, and delete articles from their profile.
