import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function SharedLayout() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedLayout
// The purpose of the <Outlet> component in react-router-dom is to act as a placeholder for rendering nested routes within a parent route's layout.
// Here's a breakdown of its key functions:
        // Rendering Child Routes: When you define nested routes in your BrowserRouter or Routes configuration, the <Outlet> component in the parent route's element determines where the corresponding child route's element will be rendered.
        // Creating Layouts: It enables the creation of shared layouts or "shells" for multiple routes. For example, a common header, sidebar, or footer can be part of a parent route's component, and the <Outlet> will then render the specific content of the child route within that layout.
        // Modularizing Code: By separating the layout from the specific content of child routes, <Outlet> promotes a more modular and organized codebase, making it easier to manage and maintain complex application structures.
        // Dynamic Content Insertion: It allows for dynamic insertion of child components based on the active route, which is crucial for building single-page applications with varying content within a consistent overall structure.
