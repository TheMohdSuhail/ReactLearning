# React Learning Notes

### Now i will How To Handle DOM and Window Events with React

Step 1 — Extracting Event Data with SyntheticEvent

Step 2 — Adding Multiple Event Handlers to the Same
Element

Step 3 — Adding Window Events

In the next step, you’ll add global event listeners to the Window object to
capture events that occur outside the immediate component.


### How to Build Forms in React

Step 1 — Creating a Basic Form with JSX

Step 2 — Collecting Form Data Using Uncontrolled
Components

Step 3 — Updating Form Data Using Controlled
Components

Step 4 — Dynamically Updating Form Properties

### How to Handle Async Data Loading, Lazy Loading, and Code Spitting with React

Step 1 — Loading Asynchronous Data with useEffect.

In this step, you’ll use the useEffect Hook to load asynchronous data into
a sample application. You’ll use the Hook to prevent unnecessary data
fetching, add placeholders while the data is loading, and update the
component when the data resolves. By the end of this step, you’ll be able to
load data with useEffect and set data using the useState Hook when it
resolves.
To explore the topic, you are going to create an application to display
information about the longest rivers in the world. You’ll load data using an
asynchronous function that simulates a request to an external data source

 Step 2 — Preventing Errors on Unmounted Components

 Step 3 — Lazy Loading a Component with Suspense and lazy

### How To Call Web APIs with the useEffect Hook in React

Step 1 — Creating a Project and a Local API


In this step, you’ll create a local REST API using JSON server, which you
will use as a test data source. Later, you’ll build an application to display a
grocery list and to add items to the list. JSON server will be your local API
and will give you a live URL to make GET and POST requests. With a local
API, you have the opportunity to prototype and test components while you
or another team develops live API

Step 2 — Fetching Data from an API with useEffect

Step 3 — Sending Data to an API

In this step, you’ll send data back to an API using the Fetch API and the POST method. You’ll create a component that will use a web form to send thedata with the onSubmit event handler and will display a success message when the action is complete.

### How To Manage State in React with Redux

In this tutorial, you’ll use Redux in a React application by building a bird watching test application. Users will be able to add birds they have seen and increment a bird each time they see it again. You’ll build a single data store, and you’ll create actions and reducers to update the store. You’ll then pull data into your components and dispatch new changes to update the data.

Step 2 — Creating Actions and Reducers

Next, you’ll create actions to add a bird and to increment a view. You’ll
then make a reducer that will update the information depending on the
action type. Finally, you’ll use the reducers to create a default store using combineReducers 


Step 3 — Dispatching Changes in a Component

Your Redux store is now all set up and ready for changes. In the next tep
you’ll dispatch actions from a component to update the data.

In this step, you’ll import and call your actions from your component.
You’ll use a method called dispatch to send the action and you’ll dispatch
the actions inside of event handlers for the form and the button .
By the end of this step, you’ll have a working application that combines a
Redux store and your custom components. You’ll be able to update the Redux store in real time and will be able to display the information in your component as it changes.


### How To Handle Routing in React Apps with React Router

Step 1 - Installing React Router.

In this step, you’ll install React Router into your base project. In this
project, you are going to make a small website about marine mammals.
Each mammal will need a separate component that you’ll render with the
router. After installing the library, you’ll create a series of components for each mammal. By the end of this step, you’ll have a foundation for rendering different mammals based on route.

In this step, you installed React Router and created basic components. The
components are going to be individual pages that you’ll display by route. In
the next step, you’ll add routes and use the <Link> component to create
performant hyperlinks.

Step 2 — Adding Routes
In this step, you’ll create a base router with individual routes for each page. You’ll order your routes to ensure that components are rendered correctly and you’ll use the <Link> component to add hyperlinks to your project that won’t trigger a page refresh.

Step 3 - Accessing Route Data with Hooks

In this step, you’ll use URL queries and parameters to create dynamic
routes. You’ll learn how to pull information from search parameters with
the useLocation Hook and how to read information from dynamic URLs
using the useParams Hook.

Now you need to create a new route that can capture both /whale/beluga
and /whale/blue . You could add them by hand, but this wouldn’t work in
situations where you don’t know all the possibilities ahead of time, such as
when you have a list of users or other dynamic data.
Instead of making a route for each one, add a URL param to the current
path. The URL param is a keyword prefaced with a colon. React Router will
use the parameter as a wildcard and will match any route that contains that
pattern.


In this case, create a keyword of :type . The full path will be /whale/:typ
e . This will match any route that starts with /whale and it will save the
variable information inside a parameter variable called type . This route
will not match /whale , since that does not contain an additional parameter.
You can either add /whale as a route after the new route or you can add it
before the route of /whale/:type with the exact keyword.
Add a new route of /whale/:type and add an exact property to the current
route


Step 4 — Nesting Routes

### How To Add Login Authentication to React Applications

In this tutorial, you’ll create a React application using a token-based
authentication system. You’ll create a mock API that will return a user
token, build a login page that will fetch the token, and check for
authentication without rerouting a user. If a user is not authenticated, you’ll
provide an opportunity for them to log in and then allow them to continue
without navigating to a dedicated login page. As you build the application,
you’ll explore different methods for storing tokens and will learn the
security and experience trade-offs for each approach. This tutorial will
focus on storing tokens in localStorage and sessionStorage.


Step 1 — Building a Login Page

In this step, you’ll create a login page for your application. You’ll start by installing React Router and creating components to represent a full application. Then you’ll render the login page on any route so that your users can login to the application without being redirected to a new page.


In the next step, you’ll create a local API that will return a user token.
You’ll call the API from the Login component and save the token to
memory on success

Step 2 — Creating a Token API


In this step, you’ll create a local API to fetch a user token. You’ll build a
mock API using Node.js that will return a user token. You’ll then call that
API from your login page and render the component after you successfully
retrieve the token. By the end of this step, you’ll have an application with a
working login page and protected pages that will only be accessible after
login.


In this step you created a local API and a login page for your application.
You learned how to create a Node server to send a token and how to call the
server and store the token from a login component. In the next step, you’ll
learn how to store the user token so that a session will persist across page
refreshes or tabs.



