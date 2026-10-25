import React from 'react';
import Header from "../Components/Header.jsx";
import Footer from '../Components/Footer.jsx';
import Sidebar from '../Components/Sidebar.jsx';
import Mainbar from '../Components/Mainbar.jsx';
import "./AppLayout.css";

function AppLayout() {
  return (
    <div className="Layout">
      <Header />

      <div className="Content">
        <Sidebar />
        <Mainbar state="none"/>
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
