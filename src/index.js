import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Main from './components/pages/Main.jsx';
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Transport from "./components/pages/Transport.jsx";
import Trips from "./components/pages/Trips.jsx";
import Client from "./components/pages/Client.jsx";
import Login from './components/pages/Login.jsx';
import ClientTrips from './components/pages/ClientTrips.jsx';
import ProfileInfo from './components/pages/ProfileInfo.jsx';
import AddTransport from './components/pages/AddTransport.jsx';
import AdminTransportList from './components/pages/AdminTransportList.jsx';
import TransportReservationForm from './components/pages/TransportReservationForm.jsx';
import AddAdminEmployee from './components/AdminEmployee/AddAdminEmployee.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="transport" element={<Transport />} />
          <Route path="trips" element={<Trips />} />
          <Route path="client" element={<Client />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<ClientTrips />} />
          <Route path="profile" element={<ProfileInfo />} />
          <Route path="addtransport" element={<AddTransport />} />
          <Route path="AddTransport/AdminTransportList" element={<AdminTransportList />} />
          <Route path="reserve" element={<TransportReservationForm />} />
          <Route path="AddClient/Driver" element={<AddAdminEmployee />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
