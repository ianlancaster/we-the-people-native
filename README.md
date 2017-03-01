#WeThePeople

![](https://media.giphy.com/media/3o7bu8DjJLh9KF01mo/giphy.gif)

**We The People** is an application created in React Native that allows a user to track current Congressional bills and new laws. Using the [Sunlight Congress API](https://sunlightlabs.github.io/congress/), the application brings in data on bills and laws including title, date introduced, date of last action, sponsor, current progress (in House Committee, passed by Senate, enacted...), and other data. This application is meant for concerned citizens (and non-citizens) to keep track of Congressional actions and to be better informed and empowered to take action on critical issues.

The application has the following key features:

* A landing page with the [Represent.Us "Corruption is Legal in America" video](https://www.youtube.com/watch?v=5tu32CCA_Ig), a call to action, and a link to the main bills page
* The main bills page, which displays a list of bills as cards. The cards contain the key information listed in the first paragraph of this Readme, plus a graphic illustrating the status of each bill (more on this below) and a link inviting the user to see further details on the bill.
* The bills detail view, which contains more detailed information and a truncated version of the title (if it is over 100 characters) and an button to expand the title. On this screen, the user can save a bill for later reference, which will appear in the "my bills" view.
  * This screen also contains a search box where the user can search for a bill via keywords.
* A "my bills" view, which shows the bills that the user has saved. On this screen, the user can click a button to go to the bill detail view for that bill and also easily delete a particular bill and delete all bills.
* A side drawer which loads via a hamburger menu. This drawer allows the user to view all bills, view their saved bills, sort bills by date introduced and status (active, enacted, failed, and tabled), and proximity to becoming law. The user can also filter bills based on a variety of issues such as health care, education, military, and many others.
* A footer containing a link to the bills screen and my bills.

Notes:
  * The Congress and Notifications links in the footer are presently "dead" links. We added these in anticipation of a later version including these features, but for now, clicking on these just takes the user to the main bills view.
  * The application presently does not authenticate users; all data is saved in React Native's [AyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html). We anticipate adding authentication and database storage soon.

Key technological and learning accomplishments:



* The more powerful search feature
* The data scraping
* The server logic
* Creating the bills progress graphic
* Extensive tests for server and helper functions
* The strong UI with the icons



Sources that proved helpful in creating this project:
[Bilal Budhani, "Using Image as a Container in React Native"](http://blog.bigbinary.com/2016/04/28/using-image-as-a-container-in-react-native.html)
