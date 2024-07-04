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



