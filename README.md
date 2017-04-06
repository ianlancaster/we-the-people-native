# We The People

![](https://media.giphy.com/media/3o7bu8DjJLh9KF01mo/giphy.gif)

NOTE: We The People has been officially renamed MyGov (apparently a small company called 'The White House' took We The People already). MyGov took 1st place in the Turing School demo competition! We are currently planning a live deployment to iOS and web for the begging of June 2017. The project has also been officially moved to the [MyGov organization page](https://github.com/MyGovApp/MyGov). Please look their for future updates.

**We The People** is an application created in [React Native](https://github.com/facebook/react-native) that allows a user to track current Congressional bills and new laws. Using the [Sunlight Congress API](https://sunlightlabs.github.io/congress/), the application brings in data on bills and laws including title, date introduced, date of last action, sponsor, current progress (in House Committee, passed by Senate, enacted...), and other data. This application is meant for concerned citizens (and non-citizens) to keep track of Congressional actions and to be better informed and empowered to take action on critical issues.

The application has the following key features:

* A landing page with the [Represent.Us "Corruption is Legal in America" video](https://www.youtube.com/watch?v=5tu32CCA_Ig), a call to action, and a link to the main bills page
* The main bills page, which displays a list of bills as cards. The cards contain the key information listed in the first paragraph of this Readme, plus an SVG graphic illustrating the status of each bill (more on this below) and a link inviting the user to view further details on the bill.
* The bills detail view, which contains more detailed information and a truncated version of the title (if it is over 100 characters) and an button to expand the title. On this screen, the user can save a bill for later reference, which will appear in the "my bills" view.
  * This screen also contains a search box where the user can search for a bill via keywords.
* A "my bills" view, which shows the bills that the user has saved. On this screen, the user can click a button to go to the bill detail view for that bill and also easily delete a particular bill and delete all bills.
* A side drawer which loads via a hamburger menu. This drawer allows the user to view all bills, view their saved bills, sort bills by date introduced and status (active, enacted, failed, and tabled), and proximity to becoming law. The user can also filter bills based on a variety of issues such as health care, education, military, and many others.
* A footer containing a link to the bills screen and my bills.

Notes:
  * The Congress and Notifications links in the footer are presently "dead" links. We added these in anticipation of a later version including these features, but for now, clicking on these just takes the user to the main bills view.
  * The application presently does not authenticate users; all data is saved in React Native's [AyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html). We anticipate adding authentication and database storage soon.

Key technological and learning accomplishments:

* A powerful search feature to filter bills by topic when a user taps on a topic name in the drawer. Rather than just filtering bills by a single keyword/term per topic (like "health care" for Health Care), our search uses an array of built-in key terms to more effectively display relevant bills (for health care, the array includes terms such as "doctor", "medicine", and "hospital"). This search feature effectively utilizes React's core data logic to pass props to where they are needed and filter the relevant data using the passed-in array.
* Data scraping and creating endpoints using Express. For the bill summary information, we needed to hit an external URL coming in through the Sunlight API data, and this necessitated not only creating a separate endpoint but also a data scraper to obtain information from this external site. We learned a lot not only about manipulating external data but also about API endpoint logic.
* One of the main challenges we faced building the app was the insufficient information from the Sunlight API in some areas. The Sunlight Congress API returns a history object for every bill, but this history did not easily translate into bill progress. In order to provide the correct information for the front end we created a few complex logical functions to parse a history object and return a status with an index corresponding to bill progress and text describing the current state of the progress. In addition, Sunlight does not provide an endpoint that responds with all bills; they are split into pages. To get around this we created a script that will gather and compile all of the bills returned from Sunlight every 12 hours and save them to the server `app.locals`. This allowed us to provide the front end with the full list of bills that it needed without inundating the Sunlight API.
* The SVG graphic was one of the visual highlights of the app. We used `react-native-svg` to build a billProgress component that would take in chamber, progress, and status in order to render the correct graphic. The SVG is very flexible and can be rendered 70+ different ways depending on the parameters passed in.
* The app has a strongly modular architecture that breaks apart logic into separate components and files. This allows for better maintainability, easier testing, and easier understanding of the code base for newcomers to the project.
* An effective routing structure that changes the view based on the user's needs. In setting this up, we learned a lot about how to structure a multi-page application centered on the mobile experience.
* We built a strong and intuitive UI. In particular, the landing page clearly shows the user what he/she can/should do, and the icons in the drawer significantly improve the user experience.
* Finally, we extensively test our server and our client-side helper functions. The tests for the filter feature and for the bill progress logic are particularly robust.

Testing:

* To run the test suite, clone down the repo and run `npm run test`.
* The test runner is mocha, and our assertion library is chai.

Sources that proved helpful in creating this project:

* [Bilal Budhani, "Using Image as a Container in React Native"](http://blog.bigbinary.com/2016/04/28/using-image-as-a-container-in-react-native.html)
* The React Native docs, particularly the section on [ListView](https://facebook.github.io/react-native/docs/using-a-listview.html)

This project was built using the [Ignite starter kit.](https://github.com/infinitered/ignite)
