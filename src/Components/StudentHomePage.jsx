import React, { useState, useEffect } from 'react';
import './StudentHomePage.css';

const StudentHomePage = () => {
  const [hoursAvailable, setHoursAvailable] = useState('');
  const [areasOfInterest, setAreasOfInterest] = useState('');

  useEffect(() => {
    // Fetch data from the database and update the state
    const fetchData = async () => {
      // Replace with your database fetching logic
      const hours = await fetchHoursFromDB();
      const areas = await fetchAreasFromDB();
      setHoursAvailable(hours);
      setAreasOfInterest(areas);
    };

    fetchData();
  }, []);

  const handleEditHours = () => {
    // Logic to edit hours available
  };

  const handleEditAreas = () => {
    // Logic to edit areas of interest
  };

  return (
    <div className="student-home-page">
      <header className="header">
        <h1>Smith Hire</h1>
        <nav>
          <a href="/home">Home</a>
          <a href="/profile">Profile</a>
          <a href="/logout">Logout</a>
        </nav>
      </header>
      <div className="main-content">
        <div className="top-section">
          <div className="card edit-profile-card">
            <div className="profile-header">
              <h2>Edit Profile</h2>
            </div>
            <p>Update your personal information and resume to stand out to potential employers.</p>
            <button>Edit Profile</button>
          </div>
        </div>
        <div className="middle-section">
          <div className="card hours-available-card">
            <h2>Number of Hours Available</h2>
            <p>{hoursAvailable}</p>
            <button onClick={handleEditHours}>Edit</button>
          </div>
          <div className="card areas-of-interest-card">
            <h2>Areas of Interest</h2>
            <p>{areasOfInterest}</p>
            <button onClick={handleEditAreas}>Edit</button>
          </div>
        </div>
        <div className="bottom-section">
          <div className="card faq-card small-card">
            <h2>FAQ</h2>
            <ul>
              <li><a href="/faq#q1">How to apply for jobs?</a></li>
              <li><a href="/faq#q2">How to update resume?</a></li>
              <li><a href="/faq#q3">How to contact support?</a></li>
            </ul>
          </div>
          <div className="card it-support-card small-card">
            <h2>IT Support</h2>
            <p>For technical issues, please <a href="/it-support">contact IT support</a>.</p>
          </div>
          <div className="card important-links-card small-card">
            <h2>Important Links</h2>
            <ul>
              <li><a href="/link1">Link 1</a></li>
              <li><a href="/link2">Link 2</a></li>
              <li><a href="/link3">Link 3</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mock functions to simulate fetching data from the database
const fetchHoursFromDB = async () => {
  // Simulate a database call
  return '20 hours/week';
};

const fetchAreasFromDB = async () => {
  // Simulate a database call
  return 'Web Development, Data Science';
};

export default StudentHomePage;
