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

Step 3 — Storing a User Token with sessionStorage and localStorage

In this step, you’ll store the user token. You’ll implement different token storage options and learn the security implications of each approach.
Finally, you’ll learn how different approaches will change the user
experience as the user opens new tabs or closes a session.

There’s a little problem now. When you log in, the browser saves the token,
but you still see the login page

The problem is your code never alerts React that the token retrieval was
successful. You’ll still need to set some state that will trigger a re-render
when the data changes. Like most problems in React, there are multiple
ways to solve it. One of the most elegant and reusable is to create a custom
Hook.

# Creating a Custom Token Hook

A custom Hook is a function that wraps custom logic. A custom Hook
usually wraps one or more built-in React Hooks along with custom
implementations. The primary advantage of a custom Hook is that you can
remove the implementation logic from the component and you can reuse it
across multiple components
By convention, custom Hooks start with the keyword use* .


You now have a custom Hook to store your token in sessionStorage . Now
you can refresh your page and the user will remain logged in. But if you try
to open the application in another tab, the user will be logged out. sessionS
torage belongs only to the specific window session. Any data will not be
available in a new tab and will be lost when the active tab is closed. If you
want to save the token across tabs, you’ll need to convert to localStorage .


# Using localStorage to Save Data Across Windows

Unlike sessionStorage , localStorage will save data even after the session
ends. This can be more convenient, since it lets users open multiple
windows and tabs without a new login, but it does have some security
problems. If the user shares their computer, they will remain logged in to
the application even though they close the browser. It will be the user’s
responsibility to explicitly log out. The next user would have immediate
access to the application without a login. It’s a risk, but the convenience
may be worth it for some applications.
To convert to localStorage , open useToken.js 


### How To Avoid Performance Pitfalls in React with memo, useMemo, and useCallback

In React applications, performance problems can come from network
latency, overworked APIs, inefficient third-party libraries, and even wellstructured code that works fine until it encounters an unusually large load.
Identifying the root cause of performance problems can be difficult, but
many of these problems originate from component re-rendering. Either the
component re-renders more than expected or the component has a dataheavy operation that can cause each render to be slow. Because of this,
learning how to prevent unneeded re-renders can help to optimize the
performance of your React application and create a better experience for
your user.

In this tutorial, you’ll focus on optimizing performance in React
components. To explore the problem, you’ll build a component to analyze a
block of text. You’ll look at how different actions can trigger re-renders and
how you can use Hooks and memoization to minimize expensive data
calculations. By the end of this tutorial, you’ll be familiar with many
performance enhancing Hooks, such as the useMemo and useCallback
Hook, and the circumstances that will require them.

# Step 1 — Preventing Re-renders with memo

In this step, you’ll build a text analyzing component. You’ll create an input to take a block of text and a component that will calculate the frequency of letters and symbols. You’ll then create a scenario where the text analyzer performs poorly and you’ll identify the root cause of the performance problem. Finally, you’ll use the React memo function to prevent re-renders on the component when a parent changes, but the props to the child component do not change.

# Building a Text Analyzer

# Testing Performance

There are multiple ways to test performance of your application. You can
add large volumes of text or you can set your browser to use less memory.
To push the component to a performance bottleneck, copy the Wikipedia
entry for GNU and paste it in the text box. Your sample may be slightly
different depending on how the Wikipedia page is edited.
After pasting the entry into your text box, try typing the additional letter e
and notice how long it takes to display. There will be a significant pause
before the character map updates:

If the component is not slow enough and you are using Firefox, Edge, or
some other browser, add more text until you notice a slowdown.
If you are using Chrome, you can throttle the CPU inside the performance
tab. This is a great way to emulate a smartphone or an older piece of
hardware. For more information, check out the Chrome DevTools
documentation.

If the component is too slow with the Wikipedia entry, remove some text.
You want to receive a noticable delay, but you do not want to make it
unusably slow or to crash your browser.

# Preventing Re-Rendering of Child Components

The itemize function is the root of the delay identified in the last section.
The function does a lot of work on each entry by looping over the contents several times. There are optimizations you can perform directly in the function itself, but the focus of this tutorial is how to handle component re-rendering when the text does not change. In other words, you will treat the itemize function as a function that you do not have access to change. The goal will be to run it only when necessary. This will show how to handle performance for APIs or third-party libraries that you can’t control.
To start, you will explore a situation where the parent changes, but the child component does not change.
Inside of App.js , add a paragraph explaining how the component works
and a button to toggle the information:


This presents a problem. Your users shouldn’t encounter a delay when they
are toggling a small amount of JSX. The delay occurs because when the
parent component changes—App.js in this situation—the CharacterMap
component is re-rendering and re-calculating the character data. The text
prop is identical, but the component still re-renders because React will re-render the entire component tree when a parent changes.
If you profile the application with the browser’s developer tools, you’ll
discover that the component re-renders because the parent changes. For a
review of profiling using the developer tools,

Since CharacterMap contains an expensive function, it should only re-render it when the props change.
Open CharacterMap.js :
nano src/components/CharacterMap/CharacterMap.js
Next, import memo , then pass the component to memo and export the result
as the default:


In this step, you created an application with a long, slow calculation. You learned how parent re-rendering will cause a child component to re-render and how to prevent the re-render using memo. In the next step, you’ll memoize actions in a component so that you only perform actions when specific properties change.


# Step 2 — Caching Expensive Data Calculations with useMemo

In this step, you’ll store the results of slow data calculations with the useMemo Hook. You’ll then incorporate the useMemo Hook in an existing component and set conditions for data re-calculations. By the end of this step, you’ll be able to cache expensive functions so that they will only run when specific pieces of data change.

In this step, you memoized parts of your component. You isolated an
expensive function from the rest of the component and used the useMemo
Hook to run the function only when certain dependencies change. In the
next step, you’ll memoize functions to prevent shallow comparison re-renders


# Step 3 — Managing Function Equality Checks with useCallback
In this step, you’ll handle props that are difficult to compare in JavaScript. React uses strict equality checking when props change. This check determines when to re-run Hooks and when to re-render components. Since JavaScript functions and objects are difficult to compare, there are situations where a prop would be effectively the same, but still trigger a re-render.

You can use the useCallback Hook to preserve a function across re-renders. This will prevent unnecessary re-renders when a parent component recreates a function. By the end of this step, you’ll be able to prevent re-renders using the useCallback Hook.


In this step, you preserved functions across re-renders using the useCallback Hook. You also learned how those functions will retain equality when compared as props or dependencies in a Hook.

### How to Deploy a React Application with Nginx on Ubuntu 20.04

You can quickly deploy React applications to a server using the default
Create React App build tool. The build script compiles the application into
a single directory containing all of the JavaScript code, images, styles, and
HTML files. With the assets in a single location, you can deploy to a web
server with minimal configuration.
In this tutorial, you’ll deploy a React application on your local machine to
an Ubuntu 20.04 server running Nginx. You’ll build an application using
Create React App, use an Nginx config file to determine where to deploy
files, and securely copy the build directory and its contents to the server. By
the end of this tutorial, you’ll be able to build and deploy a React
application.

Step 1 — Creating a React Project
In this step, you’ll create an application using Create React App and build a deployable version of the boilerplate app.


Now that you have a project that runs successfully in a browser, you need to
create a production build. Run the create-react-app build script with the
following:
npm run build
This command will compile the JavaScript and assets into the build
directory. When the command finishes, you will receive some output with
data about your build. Notice that the filenames include a hash, so your
output will be slightly different:


