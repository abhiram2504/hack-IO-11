import React, { useState } from "react";
import Solutions from './Solutions';
import Overview from './Overview';
import Complaints from './Complaints';
import LogOut from "./LogOut";
import Settings from "./Settings";
import CarbonCalculator from "./CarbonCalculator";
import './Sidebar_main_style.css'; // Use the correct path to your CSS file
import { AiOutlineHome, AiOutlineRobot, AiOutlineBook, AiFillHome, AiFillRobot, AiFillBook, AiOutlineCalculator, AiFillCalculator } from 'react-icons/ai';
import { BiHelpCircle, BiSolidHelpCircle } from 'react-icons/bi';
import { IoSettingsOutline, IoSettingsSharp } from 'react-icons/io5';
import Logo from '../Sidebar/Ellipse.png';

function Sidebar() {
  const [activeTab, setActiveTab] = useState('Overview');

  const changeTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="sidebar">
        <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="selected-div">
        <button
          className={activeTab === 'Overview' ? 'tab-button active' : 'tab-button'}
          onClick={() => changeTab('Overview')}
        >
          {activeTab === 'Overview' ? (
            <AiFillHome style={{ marginRight: '10px' }} />
          ) : (
            <AiOutlineHome style={{ marginRight: '10px' }} />
          )}
          Overview
        </button>
      </div>

      <div className="selected-div">
        <button
          className={activeTab === 'Model' ? 'tab-button active' : 'tab-button'}
          onClick={() => changeTab('Model')}
        >
          {activeTab === 'Model' ? (
            <AiFillRobot style={{ marginRight: '10px' }} />
          ) : (
            <AiOutlineRobot style={{ marginRight: '10px' }} />
          )}
          Model
        </button>
      </div>

      <div className="selected-div">
        <button
          className={activeTab === 'Complaints' ? 'tab-button active' : 'tab-button'}
          onClick={() => changeTab('Complaints')}
        >
          {activeTab === 'Complaints' ? (
            <AiFillBook style={{ marginRight: '10px' }} />
          ) : (
            <AiOutlineBook style={{ marginRight: '10px' }} />
          )}
          Complaints
        </button>
      </div>

      <div className="selected-div">
        <button
          className={activeTab === 'CarbonCalculator' ? 'tab-button active' : 'tab-button'}
          onClick={() => changeTab('CarbonCalculator')}
        >
          {activeTab === 'CarbonCalculator' ? (
            <AiFillCalculator style={{ marginRight: '10px' }} />
          ) : (
            <AiOutlineCalculator style={{ marginRight: '10px' }} />
          )}
          Carbon Calculator
        </button>
      </div>

      <div className="marginss">
        <div className="selected-div">
          <button
            className={activeTab === 'Settings' ? 'tab-button active' : 'tab-button'}
            onClick={() => changeTab('Settings')}
          >
            {activeTab === 'Settings' ? (
              <IoSettingsSharp style={{ marginRight: '10px' }} />
            ) : (
              <IoSettingsOutline style={{ marginRight: '10px' }} />
            )}
            Settings
          </button>
        </div>
      </div>

      <div className="selected-div">
        <button
          className={activeTab === 'LogOut' ? 'tab-button active' : 'tab-button'}
          onClick={() => changeTab('LogOut')}
        >
          {activeTab === 'LogOut' ? (
            <BiSolidHelpCircle style={{ marginRight: '10px' }} />
          ) : (
            <BiHelpCircle style={{ marginRight: '10px' }} />
          )}
          Log Out
        </button>
      </div>

      <div className="section-content">
        {activeTab === 'Overview' && <Overview />}
        {activeTab === 'Model' && <Model />}
        {activeTab === 'Complaints' && <Complaints />}
        {activeTab === 'CarbonCalculator' && <CarbonCalculator />}
        {activeTab === 'Settings' && <Settings />}
        {activeTab === 'LogOut' && <LogOut />}
      </div>
    </div>
  );
}

export default Sidebar;
