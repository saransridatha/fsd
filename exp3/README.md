# Experiment 3 - Client Side Routing with React Router

## Learning Outcomes

After completing this experiment, we have learned:

- How to implement routing in a Single Page Application (SPA) using React Router
- The importance of routing for creating a multi-page-like experience without full page refresh
- How to navigate between different components using routes
- Understanding of the Link component for client-side navigation
- How BrowserRouter provides routing capability to the entire application
- Using Routes and Route components for defining different paths and their components

## Routing Concepts Used in Exp3

### 1. **BrowserRouter**
- This is the main wrapper that enables routing in our React application
- It wraps all the navigation and route components
- It uses the browser history API for managing URL changes
- We have to wrap our entire app with BrowserRouter for routing to work

### 2. **Routes Component**
- It acts as a container for all the Route components
- It matches the current URL with the route paths
- Only one route component is displayed at a time based on the matching path
- Routes is responsible for selecting which component to render

### 3. **Route Component**
- Each Route defines a path and which component it should render
- It has two main props:
  - `path`: The URL path (example: "/", "/about", "/contact")
  - `element`: The component to display when the path matches

### 4. **Link Component**
- It is used for navigation between routes without full page reload
- It works like an `<a>` tag but handles client-side routing
- The `to` prop specifies where the link should navigate
- The browser does not make a new HTTP request; instead, the component changes

### 5. **Navigation Structure**
- Links are placed in the navbar or menu
- When the user clicks on a Link, the URL changes
- React Router matches the new URL with routes
- The corresponding component renders

## Implementation Details

In this experiment:

- Created Spa.jsx component as the main routing component
- Defined three main routes:
  - `/` → Home component
  - `/about` → About component  
  - `/contact` → Contact component
- Using Link for navigation between pages
- No page refresh happening, it is smooth transition

## Key Points to Remember

- React Router is not a built-in package; we have to install it using npm
- BrowserRouter is required for routing functionality
- Multiple Routes can be wrapped in a single Routes component
- The Link component is preferred over `<a>` tags for internal navigation
- The URL changes in the address bar without making new HTTP requests to the server

## Summary

This experiment demonstrates how routing makes SPAs more user-friendly. Instead of having separate HTML pages, routing allows us to switch between different components by just changing the URL. This gives the experience of a traditional multi-page website but with the benefits of a single-page application like faster loading and smooth transitions.
