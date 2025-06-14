import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout =(e)=>{
e.preventDefault()
localStorage.removeItem('accessToken');
navigate("/login");
  }


  
   useEffect(()=>{
     let cursor = document.querySelector(".cursor");
    window.addEventListener("mousemove", (e) => {
      let cursor = document.getElementById("cursor");

      setTimeout(() => {
        if (cursor) {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  }
      }, 50);
    });

    document.querySelectorAll("h1, p, a, button").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (
          el.tagName === "P" ||
          el.tagName === "H1" ||
          el.tagName === "A" ||
          el.tagName === "BUTTON"
        ) {
          cursor.classList.add("curactive");
        }
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("curactive");
      });
    });
  })

  return (
    <div id="navbarcontainer">
        <div className="cursor" id="cursor"></div>
      <div className="icons">
        <div>
          <a href="#" onClick={handleLogout}>
            <svg
              id="login"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 37 37"
              fill="none"
            >
              <circle cx="18.5" cy="18.5" r="18.5" fill="#D9D9D9" />
              <path
                d="M26 27V25C26 23.9391 25.5786 22.9217 24.8284 22.1716C24.0783 21.4214 23.0609 21 22 21H14C12.9391 21 11.9217 21.4214 11.1716 22.1716C10.4214 22.9217 10 23.9391 10 25V27"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 17C20.2091 17 22 15.2091 22 13C22 10.7909 20.2091 9 18 9C15.7909 9 14 10.7909 14 13C14 15.2091 15.7909 17 18 17Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <div id="home">
          <a href="/home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 -960 960 960"
              width="32"
              fill="#FFFFFF"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
          </a>
        </div>
        <div id="link">
          <a href="/history">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M13.3334 17.3333C13.906 18.0988 14.6365 18.7322 15.4754 19.1906C16.3144 19.6489 17.2421 19.9215 18.1956 19.9898C19.1491 20.0581 20.1062 19.9205 21.0018 19.5864C21.8975 19.2523 22.7109 18.7294 23.3867 18.0533L27.3867 14.0533C28.6011 12.796 29.2731 11.112 29.2579 9.36399C29.2427 7.61601 28.5416 5.94393 27.3055 4.70788C26.0694 3.47182 24.3974 2.7707 22.6494 2.75551C20.9014 2.74032 19.2174 3.41228 17.96 4.62667L15.6667 6.90667"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.6667 14.6667C18.0941 13.9012 17.3635 13.2678 16.5246 12.8094C15.6857 12.3511 14.758 12.0785 13.8045 12.0102C12.851 11.9419 11.8939 12.0795 10.9982 12.4136C10.1025 12.7477 9.2892 13.2706 8.61336 13.9467L4.61336 17.9467C3.39897 19.204 2.72701 20.888 2.7422 22.636C2.75738 24.384 3.45851 26.0561 4.69457 27.2921C5.93062 28.5282 7.6027 29.2293 9.35068 29.2445C11.0987 29.2597 12.7827 28.5877 14.04 27.3733L16.32 25.0933"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <div id="bar">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 26.6667V13.3333"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24 26.6667V5.33334"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 26.6667V21.3333"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <div id="contributors">
          <a href="/contributors">
            <svg
              height="800px"
              width="800px"
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              fill="white"
              xml:space="preserve"
            >
              <g>
                <path
                  class="st0"
                  d="M435.95,287.525c32.51,0,58.87-26.343,58.87-58.853c0-32.51-26.361-58.871-58.87-58.871
		c-32.502,0-58.863,26.361-58.863,58.871C377.088,261.182,403.448,287.525,435.95,287.525z"
                />
                <path
                  class="st0"
                  d="M511.327,344.251c-2.623-15.762-15.652-37.822-25.514-47.677c-1.299-1.306-7.105-1.608-8.673-0.636
		c-11.99,7.374-26.074,11.714-41.19,11.714c-15.099,0-29.184-4.34-41.175-11.714c-1.575-0.972-7.373-0.67-8.672,0.636
		c-2.757,2.757-5.765,6.427-8.698,10.683c7.935,14.94,14.228,30.81,16.499,44.476c2.27,13.7,1.533,26.67-2.138,38.494
		c13.038,4.717,28.673,6.787,44.183,6.787C476.404,397.014,517.804,382.987,511.327,344.251z"
                />
                <path
                  class="st0"
                  d="M254.487,262.691c52.687,0,95.403-42.716,95.403-95.402c0-52.67-42.716-95.386-95.403-95.386
		c-52.678,0-95.378,42.716-95.378,95.386C159.109,219.975,201.808,262.691,254.487,262.691z"
                />
                <path
                  class="st0"
                  d="M335.269,277.303c-2.07-2.061-11.471-2.588-14.027-1.006c-19.448,11.966-42.271,18.971-66.755,18.971
		c-24.466,0-47.3-7.005-66.738-18.971c-2.555-1.583-11.956-1.055-14.026,1.006c-16.021,16.004-37.136,51.782-41.384,77.288
		c-10.474,62.826,56.634,85.508,122.148,85.508c65.532,0,132.639-22.682,122.165-85.508
		C372.404,329.085,351.289,293.307,335.269,277.303z"
                />
                <path
                  class="st0"
                  d="M76.049,287.525c32.502,0,58.862-26.343,58.862-58.853c0-32.51-26.36-58.871-58.862-58.871
		c-32.511,0-58.871,26.361-58.871,58.871C17.178,261.182,43.538,287.525,76.049,287.525z"
                />
                <path
                  class="st0"
                  d="M115.094,351.733c2.414-14.353,9.225-31.253,17.764-46.88c-2.38-3.251-4.759-6.083-6.955-8.279
		c-1.299-1.306-7.097-1.608-8.672-0.636c-11.991,7.374-26.076,11.714-41.182,11.714c-15.108,0-29.202-4.34-41.183-11.714
		c-1.568-0.972-7.382-0.67-8.681,0.636c-9.887,9.854-22.882,31.915-25.514,47.677c-6.468,38.736,34.924,52.762,75.378,52.762
		c14.437,0,29.016-1.777,41.459-5.84C113.587,379.108,112.757,365.835,115.094,351.733z"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
