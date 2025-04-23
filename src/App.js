import './App.css';
import Laskuri from './Laskuri';
import Viesti from './Viesti';
import React, { useState } from "react";
import Posts from './Posts';
import CustomerList from './CustomerList';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserList from './UserList';
import Login from './Login'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductList from './ProductList';

const App = () => {
  const [showLaskuri, setShowLaskuri] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');
  // Logout napin tapahtumankäsittelijä
  const logout = () => {
    localStorage.clear()
    setLoggedInUser('')
  }
  return (
    <div className="App">

      {!loggedInUser && <Login setLoggedInUser={setLoggedInUser} />}
      {loggedInUser &&
        <Router>

          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href='/customers'>Customers</Nav.Link>
              <Nav.Link href='/posts'>Posts</Nav.Link>
              <Nav.Link href='/laskuri'>Laskuri</Nav.Link>
              <Nav.Link href='/users'>Users</Nav.Link>
              <Nav.Link href='/products'>Products</Nav.Link>        </Nav>
            <button onClick={() => logout()}>Logout</button>
          </Navbar>

          <h1>Northwind Corporation</h1>

          <Routes>
            <Route path="/customers"
              element={<CustomerList />}>
            </Route>

            <Route path="/posts"
              element={<Posts />}>
            </Route>

            <Route path="/laskuri"
              element={<Laskuri />}>
            </Route>

            <Route path="/users"
              element={<UserList />}>
            </Route>
            <Route path="/products"
              element={<ProductList />}>
            </Route>

          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;
