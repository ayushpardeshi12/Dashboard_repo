import React from "react";

function MainDashboard() {
  const [fileOptionsVisible, setFileOptionsVisible] = React.useState(false);
  //...
  setInterval(timer_clock, 60000);
  const timer = document.getElementById("timer");
  let today = new Date();
  function timer_clock() {
    let h = today.getHours();
    let m = today.getMinutes();

    m < 10 ? "0" + m : m;
    h < 10 ? "0" + h : h;

    let currentTime = `${h}:${m}`;
    timer.textContent = currentTime;
  }

  // Format the date as Friday, March 6th
  let options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  let formattedDate = today.toLocaleString("en-US", options);

  // Display the formatted date below the clock
  let dateDiv = document.querySelector(".date-div");
  dateDiv.textContent = formattedDate;

  timer_clock();
  return (
    <div className="main-div">
      <div className="top-right-menu">
        <ul className="list-icons">
          <li>
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
          <li>
            <i className="fa-regular fa-bell"></i>
          </li>
          <li>
            <i className="fa-solid fa-wifi"></i>
          </li>
          <li>
            <i className="fa-solid fa-volume-high"></i>
          </li>
          <li>
            <i className="fa-solid fa-battery-half"></i>
          </li>
        </ul>
      </div>
      <div className="clock-date-div">
        <div id="timer">20:08</div>
        <div className="date-div">
          {/* <p id="monthEl"></p>
          <p id="dayName"></p>
          <p id="dateEl"></p> */}
        </div>
      </div>
      <div className="aside-div-menu">
        {/* In this menu there will be onclick event when user will perform right click then menu will appear and on double-right-click menu will hide itslef */}
        <ul className="aside-icons">
          <li>
            <img src="../public/Images/Diary.png" />
          </li>
          <li>
            <img src="../public/Images/Calender.png" />
          </li>
          <li>
            <img src="../public/Images/Google Chrome.png" />
          </li>
          <li>
            <img src="../public/Images/Empty Bin.png" />
          </li>
        </ul>
      </div>
      <div className="footer-div">
        <div className="footer-flex-div">
          <button
            className="file-button"
            onClick={() => setFileOptionsVisible(!fileOptionsVisible)}
          >
            File
          </button>
        </div>

        <div
          style={{ display: fileOptionsVisible ? "block" : "none" }}
          className="file_options"
        >
          <ul>
            <li>Word</li>
            <li>Excel</li>
          </ul>
        </div>

        <div className="footer-img-div">
          <img src="../public/Images/9225b8bc-2f93-4304-84d9-0868a6f62ca3 4.png" />
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;
