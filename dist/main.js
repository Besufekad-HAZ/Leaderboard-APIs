/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/add-score.js":
/*!******************************!*\
  !*** ./modules/add-score.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_score_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-score.js */ "./modules/get-score.js");
/* harmony import */ var _message_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.js */ "./modules/message.js");



// Add scores Using Async and Await function
const scoreAdd = async (scores, userValue, scoreValue, message) => {
  if (userValue === '' || scoreValue === '') {
    (0,_message_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
      message,
      'success',
      'error',
      'Please fill all the required fields!',
    );
  } else {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mg3gGm7wJnYF5Xnfw3GZ/scores/',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userValue,
          score: scoreValue,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
    if (response.ok) {
      (0,_get_score_js__WEBPACK_IMPORTED_MODULE_0__["default"])(scores);
    } else {
      (0,_message_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
        message,
        'error',
        'success',
        'Error, something is not right..',
      );
    }
    document.querySelector('.user-name').value = '';
    document.querySelector('.user-score').value = '';

    const json = await response.json();
    (0,_message_js__WEBPACK_IMPORTED_MODULE_1__["default"])(message, 'error', 'success', json.result);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scoreAdd);


/***/ }),

/***/ "./modules/get-score.js":
/*!******************************!*\
  !*** ./modules/get-score.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Get Score from the API
const scoreGet = async (scores) => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mg3gGm7wJnYF5Xnfw3GZ/scores/',
  );
  const json = await response.json();
  scores.innerHTML = '';
  const sortScores = json.result.sort((a, b) => b.score - a.score);
  sortScores.forEach((element) => {
    if (json.result.length > 0) {
      const trophy = sortScores.indexOf(element) < 3 ? '🏆' : '';
      const number = sortScores.indexOf(element) + 1;
      scores.innerHTML += `<li class="list-container">
      <div class="name-icon"> <div>#${number}</div> <i class="fas fa-user"></i> <div>${element.user}</div> </div> <div>${element.score} ${trophy}</div></li>`;
    } else {
      scores.innerHTML = 'No Score are available!!';
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scoreGet);


/***/ }),

/***/ "./modules/message.js":
/*!****************************!*\
  !*** ./modules/message.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const messageDisplay = (msg, removeClass, addClass, innerHTML) => {
  msg.classList.remove(removeClass);
  msg.classList.add(addClass);
  msg.innerHTML = innerHTML;
  setTimeout(() => {
    msg.classList.remove(addClass);
    msg.innerHTML = '';
  }, 2000);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (messageDisplay);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/leader-bg.jpg */ "./assets/leader-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  font-family: \"lato\", sans-serif;\r\n}\r\n\r\nhtml {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100vh;\r\n}\r\n\r\nbody {\r\n  font-family: \"lato\", sans-serif;\r\n  font-weight: 300;\r\n}\r\n\r\nheader {\r\n  width: 50%;\r\n  margin: 5% auto;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.title {\r\n  padding: 3%;\r\n  color: rgb(255, 255, 255);\r\n  font-size: 3.4vmax;\r\n  background-color: rgba(2, 69, 78, 0.8);\r\n  border: 2px solid white;\r\n  border-radius: 20px;\r\n  font-family:\r\n    system-ui,\r\n    -apple-system,\r\n    BlinkMacSystemFont,\r\n    \"Segoe UI\",\r\n    Roboto,\r\n    Oxygen,\r\n    Ubuntu,\r\n    Cantarell,\r\n    \"Open Sans\",\r\n    \"Helvetica Neue\",\r\n    sans-serif;\r\n}\r\n\r\n.all-container {\r\n  width: 93%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  border: 4px solid #fff;\r\n  border-radius: 20px;\r\n  justify-content: space-between;\r\n  margin: 5rem auto;\r\n  padding: 3%;\r\n  gap: 7%;\r\n  background-color: rgba(2, 69, 78, 0.8);\r\n}\r\n\r\n.scores-list-container {\r\n  width: 70%;\r\n  height: 50%;\r\n  overflow-y: scroll;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.scoresNreset {\r\n  display: flex;\r\n  gap: 2rem;\r\n  justify-content: space-around;\r\n}\r\n\r\n.scores-title {\r\n  font-size: calc(1rem + ((1vw + 1rem) * 0.6));\r\n}\r\n\r\n.refresh-score {\r\n  cursor: pointer;\r\n  background: none;\r\n  width: 30%;\r\n  border: 1px solid rgba(255, 255, 255);\r\n  border-radius: 15px;\r\n  color: rgba(255, 255, 255);\r\n  font-size: 19px;\r\n  font-size: 1.1rem;\r\n  font-weight: 300;\r\n  line-height: 2.5em;\r\n  -webkit-transition: all 0.2s ease;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.refresh-score:hover {\r\n  background: rgba(255, 255, 255);\r\n  color: rgba(2, 69, 78);\r\n  -webkit-transition: all 0.2s ease;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.middle-line {\r\n  border: 1px solid white;\r\n}\r\n\r\n/* Second Section Add Name and Score starts here */\r\nform {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5%;\r\n  gap: 2%;\r\n}\r\n\r\nform input {\r\n  padding: 5%;\r\n  background: transparent;\r\n  outline: none;\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.5);\r\n  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.name-score {\r\n  font-size: larger;\r\n}\r\n\r\n.bg-add {\r\n  background-color: #fff;\r\n  color: rgba(2, 69, 78);\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  padding: 2%;\r\n  font-size: 2.2vmax;\r\n}\r\n\r\n.add-nameNscore {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.add-nameNscore input {\r\n  border: none;\r\n  margin-top: 10%;\r\n  font-size: calc(2rem + ((1vw - 1.2rem) * 1.1));\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n  color: #fff;\r\n}\r\n\r\n::-moz-placeholder {\r\n  color: #fff;\r\n}\r\n\r\n:-moz-placeholder {\r\n  color: #fff;\r\n}\r\n\r\n:-ms-input-placeholder {\r\n  color: #fff;\r\n}\r\n\r\n.submit-score {\r\n  cursor: pointer;\r\n  background: none;\r\n  width: 80%;\r\n  border: 1px solid rgba(255, 255, 255);\r\n  border-radius: 10px;\r\n  color: rgba(255, 255, 255);\r\n  font-size: 19px;\r\n  font-size: 1.2rem;\r\n  font-weight: 300;\r\n  line-height: 2.5em;\r\n  margin: 25% auto;\r\n  -webkit-transition: all 0.2s ease;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.submit-score:hover {\r\n  background: rgba(255, 255, 255);\r\n  color: rgba(2, 69, 78);\r\n  -webkit-transition: all 0.2s ease;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n.user-img {\r\n  width: 20px;\r\n}\r\n\r\n.scores-list li {\r\n  display: flex;\r\n  border-bottom: 1px solid rgb(237, 237, 237);\r\n  padding: 0.7rem;\r\n  font-size: 1.1em;\r\n  align-items: center;\r\n  align-content: center;\r\n  -webkit-animation: glow 1s ease-in-out infinite alternate;\r\n  -moz-animation: glow 1s ease-in-out infinite alternate;\r\n  animation: glow 1s ease-in-out infinite alternate;\r\n}\r\n\r\n.list-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.name-icon {\r\n  font-size: large;\r\n  gap: 6%;\r\n  width: 50%;\r\n  display: flex;\r\n  justify-content: left;\r\n}\r\n\r\n@-webkit-keyframes glow {\r\n  from {\r\n    text-shadow:\r\n      0 0 10px #fff,\r\n      0 0 20px #fff,\r\n      0 0 30px #02817d,\r\n      0 0 40px #00d1c7,\r\n      0 0 50px #0adafa,\r\n      0 0 60px #00837c,\r\n      0 0 70px #00827d;\r\n  }\r\n\r\n  to {\r\n    text-shadow:\r\n      0 0 20px #fff,\r\n      0 0 30px #88fbff,\r\n      0 0 40px #88fbff,\r\n      0 0 50px #88fbff,\r\n      0 0 60px #88fbff,\r\n      0 0 70px #88fbff,\r\n      0 0 80px #88fbff;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  .all-container {\r\n    flex-direction: column;\r\n    width: 90%;\r\n    margin-top: 2%;\r\n    gap: 2rem;\r\n  }\r\n\r\n  .scores-list-container {\r\n    width: 90%;\r\n  }\r\n\r\n  .scoresNreset {\r\n    justify-content: space-between;\r\n    width: 100%;\r\n  }\r\n\r\n  form {\r\n    display: flex;\r\n    width: 90%;\r\n    align-items: center;\r\n    padding: 0;\r\n  }\r\n\r\n  form input {\r\n    padding: 3%;\r\n    width: 80%;\r\n    background: transparent;\r\n    outline: none;\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.5);\r\n    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.5);\r\n  }\r\n\r\n  .title {\r\n    padding: 1px;\r\n    color: rgb(255, 255, 255);\r\n    font-size: 2.6vmax;\r\n    background-color: rgba(2, 69, 78, 0.8);\r\n    border: 2px solid white;\r\n    border-radius: 20px;\r\n    font-family:\r\n      system-ui,\r\n      -apple-system,\r\n      BlinkMacSystemFont,\r\n      \"Segoe UI\",\r\n      Roboto,\r\n      Oxygen,\r\n      Ubuntu,\r\n      Cantarell,\r\n      \"Open Sans\",\r\n      \"Helvetica Neue\",\r\n      sans-serif;\r\n  }\r\n\r\n  .add-nameNscore {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n  }\r\n\r\n  .add-nameNscore input {\r\n    border: none;\r\n    margin-top: 5%;\r\n    font-size: calc(2rem + ((1vw - 1.2rem) * 1.1));\r\n  }\r\n\r\n  .submit-score {\r\n    cursor: pointer;\r\n    background: none;\r\n    width: 60%;\r\n    border: 1px solid rgba(255, 255, 255);\r\n    border-radius: 10px;\r\n    color: rgba(255, 255, 255);\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    line-height: 2.5em;\r\n    margin: 5% 2% auto;\r\n    -webkit-transition: all 0.2s ease;\r\n    transition: all 0.2s ease;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  font-family: \"lato\", sans-serif;\r\n}\r\n\r\nhtml {\r\n  background: url(../assets/leader-bg.jpg);\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100vh;\r\n}\r\n\r\nbody {\r\n  font-family: \"lato\", sans-serif;\r\n  font-weight: 300;\r\n}\r\n\r\nheader {\r\n  width: 50%;\r\n  margin: 5% auto;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.title {\r\n  padding: 3%;\r\n  color: rgb(255, 255, 255);\r\n  font-size: 3.4vmax;\r\n  background-color: rgba(2, 69, 78, 0.8);\r\n  border: 2px solid white;\r\n  border-radius: 20px;\r\n  font-family:\r\n    system-ui,\r\n    -apple-system,\r\n    BlinkMacSystemFont,\r\n    \"Segoe UI\",\r\n    Roboto,\r\n    Oxygen,\r\n    Ubuntu,\r\n    Cantarell,\r\n    \"Open Sans\",\r\n    \"Helvetica Neue\",\r\n    sans-serif;\r\n}\r\n\r\n.all-container {\r\n  width: 93%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  border: 4px solid #fff;\r\n  border-radius: 20px;\r\n  justify-content: space-between;\r\n  margin: 5rem auto;\r\n  padding: 3%;\r\n  gap: 7%;\r\n  background-color: rgba(2, 69, 78, 0.8);\r\n}\r\n\r\n.scores-list-container {\r\n  width: 70%;\r\n  height: 50%;\r\n  overflow-y: scroll;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.scoresNreset {\r\n  display: flex;\r\n  gap: 2rem;\r\n  justify-content: space-around;\r\n}\r\n\r\n.scores-title {\r\n  font-size: calc(1rem + ((1vw + 1rem) * 0.6));\r\n}\r\n\r\n.refresh-score {\r\n  cursor: pointer;\r\n  background: none;\r\n  width: 30%;\r\n  border: 1px solid rgba(255, 255, 255);\r\n  border-radius: 15px;\r\n  color: rgba(255, 255, 255);\r\n  font-size: 19px;\r\n  font-size: 1.1rem;\r\n  font-weight: 300;\r\n  line-height: 2.5em;\r\n  -webkit-transition: all 0.2s ease;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.refresh-score:hover {\r\n  background: rgba(255, 255, 255);\r\n  color: rgba(2, 69, 78);\r\n  -webkit-transition: all 0.2s ease;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.middle-line {\r\n  border: 1px solid white;\r\n}\r\n\r\n/* Second Section Add Name and Score starts here */\r\nform {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5%;\r\n  gap: 2%;\r\n}\r\n\r\nform input {\r\n  padding: 5%;\r\n  background: transparent;\r\n  outline: none;\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.5);\r\n  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.name-score {\r\n  font-size: larger;\r\n}\r\n\r\n.bg-add {\r\n  background-color: #fff;\r\n  color: rgba(2, 69, 78);\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  padding: 2%;\r\n  font-size: 2.2vmax;\r\n}\r\n\r\n.add-nameNscore {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.add-nameNscore input {\r\n  border: none;\r\n  margin-top: 10%;\r\n  font-size: calc(2rem + ((1vw - 1.2rem) * 1.1));\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n  color: #fff;\r\n}\r\n\r\n::-moz-placeholder {\r\n  color: #fff;\r\n}\r\n\r\n:-moz-placeholder {\r\n  color: #fff;\r\n}\r\n\r\n:-ms-input-placeholder {\r\n  color: #fff;\r\n}\r\n\r\n.submit-score {\r\n  cursor: pointer;\r\n  background: none;\r\n  width: 80%;\r\n  border: 1px solid rgba(255, 255, 255);\r\n  border-radius: 10px;\r\n  color: rgba(255, 255, 255);\r\n  font-size: 19px;\r\n  font-size: 1.2rem;\r\n  font-weight: 300;\r\n  line-height: 2.5em;\r\n  margin: 25% auto;\r\n  -webkit-transition: all 0.2s ease;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.submit-score:hover {\r\n  background: rgba(255, 255, 255);\r\n  color: rgba(2, 69, 78);\r\n  -webkit-transition: all 0.2s ease;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n.user-img {\r\n  width: 20px;\r\n}\r\n\r\n.scores-list li {\r\n  display: flex;\r\n  border-bottom: 1px solid rgb(237, 237, 237);\r\n  padding: 0.7rem;\r\n  font-size: 1.1em;\r\n  align-items: center;\r\n  align-content: center;\r\n  -webkit-animation: glow 1s ease-in-out infinite alternate;\r\n  -moz-animation: glow 1s ease-in-out infinite alternate;\r\n  animation: glow 1s ease-in-out infinite alternate;\r\n}\r\n\r\n.list-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.name-icon {\r\n  font-size: large;\r\n  gap: 6%;\r\n  width: 50%;\r\n  display: flex;\r\n  justify-content: left;\r\n}\r\n\r\n@-webkit-keyframes glow {\r\n  from {\r\n    text-shadow:\r\n      0 0 10px #fff,\r\n      0 0 20px #fff,\r\n      0 0 30px #02817d,\r\n      0 0 40px #00d1c7,\r\n      0 0 50px #0adafa,\r\n      0 0 60px #00837c,\r\n      0 0 70px #00827d;\r\n  }\r\n\r\n  to {\r\n    text-shadow:\r\n      0 0 20px #fff,\r\n      0 0 30px #88fbff,\r\n      0 0 40px #88fbff,\r\n      0 0 50px #88fbff,\r\n      0 0 60px #88fbff,\r\n      0 0 70px #88fbff,\r\n      0 0 80px #88fbff;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  .all-container {\r\n    flex-direction: column;\r\n    width: 90%;\r\n    margin-top: 2%;\r\n    gap: 2rem;\r\n  }\r\n\r\n  .scores-list-container {\r\n    width: 90%;\r\n  }\r\n\r\n  .scoresNreset {\r\n    justify-content: space-between;\r\n    width: 100%;\r\n  }\r\n\r\n  form {\r\n    display: flex;\r\n    width: 90%;\r\n    align-items: center;\r\n    padding: 0;\r\n  }\r\n\r\n  form input {\r\n    padding: 3%;\r\n    width: 80%;\r\n    background: transparent;\r\n    outline: none;\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.5);\r\n    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.5);\r\n  }\r\n\r\n  .title {\r\n    padding: 1px;\r\n    color: rgb(255, 255, 255);\r\n    font-size: 2.6vmax;\r\n    background-color: rgba(2, 69, 78, 0.8);\r\n    border: 2px solid white;\r\n    border-radius: 20px;\r\n    font-family:\r\n      system-ui,\r\n      -apple-system,\r\n      BlinkMacSystemFont,\r\n      \"Segoe UI\",\r\n      Roboto,\r\n      Oxygen,\r\n      Ubuntu,\r\n      Cantarell,\r\n      \"Open Sans\",\r\n      \"Helvetica Neue\",\r\n      sans-serif;\r\n  }\r\n\r\n  .add-nameNscore {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n  }\r\n\r\n  .add-nameNscore input {\r\n    border: none;\r\n    margin-top: 5%;\r\n    font-size: calc(2rem + ((1vw - 1.2rem) * 1.1));\r\n  }\r\n\r\n  .submit-score {\r\n    cursor: pointer;\r\n    background: none;\r\n    width: 60%;\r\n    border: 1px solid rgba(255, 255, 255);\r\n    border-radius: 10px;\r\n    color: rgba(255, 255, 255);\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    line-height: 2.5em;\r\n    margin: 5% 2% auto;\r\n    -webkit-transition: all 0.2s ease;\r\n    transition: all 0.2s ease;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./assets/leader-bg.jpg":
/*!******************************!*\
  !*** ./assets/leader-bg.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2511dad93912ccb703ad.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_add_score_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/add-score.js */ "./modules/add-score.js");
/* harmony import */ var _modules_get_score_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/get-score.js */ "./modules/get-score.js");




const listScores = document.querySelector('.scores-list');
const refreshScore = document.querySelector('.refresh-score');
const submitScore = document.querySelector('.submit-score');
const msg = document.querySelector('.msg');

refreshScore.addEventListener('click', (event) => {
  event.preventDefault();
  (0,_modules_get_score_js__WEBPACK_IMPORTED_MODULE_2__["default"])(listScores);
});

submitScore.addEventListener('click', (event) => {
  event.preventDefault();
  const user = document.querySelector('.user-name').value;
  const score = document.querySelector('.user-score').value;
  (0,_modules_add_score_js__WEBPACK_IMPORTED_MODULE_1__["default"])(listScores, user, score, msg);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssV0FBVyxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGdCQUFnQixNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxh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Q0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUMwQjtBQUNDOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxpRUFBUztBQUNYLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlFQUFRO0FBQ1YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRlcmJvYXJkLWFwaXMvLi9tb2R1bGVzL2FkZC1zY29yZS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcGlzLy4vbW9kdWxlcy9nZXQtc2NvcmUuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBpcy8uL21vZHVsZXMvbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcGlzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcGlzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcGlzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcGlzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBpcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcGlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLWFwaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLWFwaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcGlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLWFwaXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBpcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcGlzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcGlzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBpcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYWRlcmJvYXJkLWFwaXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcGlzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2xlYWRlcmJvYXJkLWFwaXMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBpcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBpcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2NvcmVHZXQgZnJvbSAnLi9nZXQtc2NvcmUuanMnO1xuaW1wb3J0IG1lc3NhZ2VEaXNwbGF5IGZyb20gJy4vbWVzc2FnZS5qcyc7XG5cbi8vIEFkZCBzY29yZXMgVXNpbmcgQXN5bmMgYW5kIEF3YWl0IGZ1bmN0aW9uXG5jb25zdCBzY29yZUFkZCA9IGFzeW5jIChzY29yZXMsIHVzZXJWYWx1ZSwgc2NvcmVWYWx1ZSwgbWVzc2FnZSkgPT4ge1xuICBpZiAodXNlclZhbHVlID09PSAnJyB8fCBzY29yZVZhbHVlID09PSAnJykge1xuICAgIG1lc3NhZ2VEaXNwbGF5KFxuICAgICAgbWVzc2FnZSxcbiAgICAgICdzdWNjZXNzJyxcbiAgICAgICdlcnJvcicsXG4gICAgICAnUGxlYXNlIGZpbGwgYWxsIHRoZSByZXF1aXJlZCBmaWVsZHMhJyxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvbWczZ0dtN3dKbllGNVhuZnczR1ovc2NvcmVzLycsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgdXNlcjogdXNlclZhbHVlLFxuICAgICAgICAgIHNjb3JlOiBzY29yZVZhbHVlLFxuICAgICAgICB9KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICk7XG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICBzY29yZUdldChzY29yZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlRGlzcGxheShcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgJ2Vycm9yJyxcbiAgICAgICAgJ3N1Y2Nlc3MnLFxuICAgICAgICAnRXJyb3IsIHNvbWV0aGluZyBpcyBub3QgcmlnaHQuLicsXG4gICAgICApO1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1uYW1lJykudmFsdWUgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1zY29yZScpLnZhbHVlID0gJyc7XG5cbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIG1lc3NhZ2VEaXNwbGF5KG1lc3NhZ2UsICdlcnJvcicsICdzdWNjZXNzJywganNvbi5yZXN1bHQpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzY29yZUFkZDtcbiIsIi8vIEdldCBTY29yZSBmcm9tIHRoZSBBUElcbmNvbnN0IHNjb3JlR2V0ID0gYXN5bmMgKHNjb3JlcykgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy9tZzNnR203d0puWUY1WG5mdzNHWi9zY29yZXMvJyxcbiAgKTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgc2NvcmVzLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBzb3J0U2NvcmVzID0ganNvbi5yZXN1bHQuc29ydCgoYSwgYikgPT4gYi5zY29yZSAtIGEuc2NvcmUpO1xuICBzb3J0U2NvcmVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoanNvbi5yZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdHJvcGh5ID0gc29ydFNjb3Jlcy5pbmRleE9mKGVsZW1lbnQpIDwgMyA/ICfwn4+GJyA6ICcnO1xuICAgICAgY29uc3QgbnVtYmVyID0gc29ydFNjb3Jlcy5pbmRleE9mKGVsZW1lbnQpICsgMTtcbiAgICAgIHNjb3Jlcy5pbm5lckhUTUwgKz0gYDxsaSBjbGFzcz1cImxpc3QtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibmFtZS1pY29uXCI+IDxkaXY+IyR7bnVtYmVyfTwvZGl2PiA8aSBjbGFzcz1cImZhcyBmYS11c2VyXCI+PC9pPiA8ZGl2PiR7ZWxlbWVudC51c2VyfTwvZGl2PiA8L2Rpdj4gPGRpdj4ke2VsZW1lbnQuc2NvcmV9ICR7dHJvcGh5fTwvZGl2PjwvbGk+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NvcmVzLmlubmVySFRNTCA9ICdObyBTY29yZSBhcmUgYXZhaWxhYmxlISEnO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzY29yZUdldDtcbiIsImNvbnN0IG1lc3NhZ2VEaXNwbGF5ID0gKG1zZywgcmVtb3ZlQ2xhc3MsIGFkZENsYXNzLCBpbm5lckhUTUwpID0+IHtcbiAgbXNnLmNsYXNzTGlzdC5yZW1vdmUocmVtb3ZlQ2xhc3MpO1xuICBtc2cuY2xhc3NMaXN0LmFkZChhZGRDbGFzcyk7XG4gIG1zZy5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG1zZy5jbGFzc0xpc3QucmVtb3ZlKGFkZENsYXNzKTtcbiAgICBtc2cuaW5uZXJIVE1MID0gJyc7XG4gIH0sIDIwMDApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVzc2FnZURpc3BsYXk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2xlYWRlci1iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LWZhbWlseTogXFxcImxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwibGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG1hcmdpbjogNSUgYXV0bztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIHBhZGRpbmc6IDMlO1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGZvbnQtc2l6ZTogMy40dm1heDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgNjksIDc4LCAwLjgpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgZm9udC1mYW1pbHk6XFxyXFxuICAgIHN5c3RlbS11aSxcXHJcXG4gICAgLWFwcGxlLXN5c3RlbSxcXHJcXG4gICAgQmxpbmtNYWNTeXN0ZW1Gb250LFxcclxcbiAgICBcXFwiU2Vnb2UgVUlcXFwiLFxcclxcbiAgICBSb2JvdG8sXFxyXFxuICAgIE94eWdlbixcXHJcXG4gICAgVWJ1bnR1LFxcclxcbiAgICBDYW50YXJlbGwsXFxyXFxuICAgIFxcXCJPcGVuIFNhbnNcXFwiLFxcclxcbiAgICBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcclxcbiAgICBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogOTMlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogNXJlbSBhdXRvO1xcclxcbiAgcGFkZGluZzogMyU7XFxyXFxuICBnYXA6IDclO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCA2OSwgNzgsIDAuOCk7XFxyXFxufVxcclxcblxcclxcbi5zY29yZXMtbGlzdC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbi5zY29yZXNOcmVzZXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgKCgxdncgKyAxcmVtKSAqIDAuNikpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaC1zY29yZSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBmb250LXNpemU6IDE5cHg7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBsaW5lLWhlaWdodDogMi41ZW07XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaC1zY29yZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgY29sb3I6IHJnYmEoMiwgNjksIDc4KTtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5taWRkbGUtbGluZSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2Vjb25kIFNlY3Rpb24gQWRkIE5hbWUgYW5kIFNjb3JlIHN0YXJ0cyBoZXJlICovXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDUlO1xcclxcbiAgZ2FwOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dCB7XFxyXFxuICBwYWRkaW5nOiA1JTtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtc2NvcmUge1xcclxcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxufVxcclxcblxcclxcbi5iZy1hZGQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiByZ2JhKDIsIDY5LCA3OCk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG4gIGZvbnQtc2l6ZTogMi4ydm1heDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1uYW1lTnNjb3JlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1uYW1lTnNjb3JlIGlucHV0IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG1hcmdpbi10b3A6IDEwJTtcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYygycmVtICsgKCgxdncgLSAxLjJyZW0pICogMS4xKSk7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuOjotbW96LXBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG46LW1vei1wbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1zY29yZSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBmb250LXNpemU6IDE5cHg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBsaW5lLWhlaWdodDogMi41ZW07XFxyXFxuICBtYXJnaW46IDI1JSBhdXRvO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1zY29yZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgY29sb3I6IHJnYmEoMiwgNjksIDc4KTtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWltZyB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3Jlcy1saXN0IGxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzNywgMjM3LCAyMzcpO1xcclxcbiAgcGFkZGluZzogMC43cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjFlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogZ2xvdyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxuICAtbW96LWFuaW1hdGlvbjogZ2xvdyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxuICBhbmltYXRpb246IGdsb3cgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtaWNvbiB7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgZ2FwOiA2JTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgZ2xvdyB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgdGV4dC1zaGFkb3c6XFxyXFxuICAgICAgMCAwIDEwcHggI2ZmZixcXHJcXG4gICAgICAwIDAgMjBweCAjZmZmLFxcclxcbiAgICAgIDAgMCAzMHB4ICMwMjgxN2QsXFxyXFxuICAgICAgMCAwIDQwcHggIzAwZDFjNyxcXHJcXG4gICAgICAwIDAgNTBweCAjMGFkYWZhLFxcclxcbiAgICAgIDAgMCA2MHB4ICMwMDgzN2MsXFxyXFxuICAgICAgMCAwIDcwcHggIzAwODI3ZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgdGV4dC1zaGFkb3c6XFxyXFxuICAgICAgMCAwIDIwcHggI2ZmZixcXHJcXG4gICAgICAwIDAgMzBweCAjODhmYmZmLFxcclxcbiAgICAgIDAgMCA0MHB4ICM4OGZiZmYsXFxyXFxuICAgICAgMCAwIDUwcHggIzg4ZmJmZixcXHJcXG4gICAgICAwIDAgNjBweCAjODhmYmZmLFxcclxcbiAgICAgIDAgMCA3MHB4ICM4OGZiZmYsXFxyXFxuICAgICAgMCAwIDgwcHggIzg4ZmJmZjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gIC5hbGwtY29udGFpbmVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMiU7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zY29yZXMtbGlzdC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNjb3Jlc05yZXNldCB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvcm0gaW5wdXQge1xcclxcbiAgICBwYWRkaW5nOiAzJTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGl0bGUge1xcclxcbiAgICBwYWRkaW5nOiAxcHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi42dm1heDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCA2OSwgNzgsIDAuOCk7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTpcXHJcXG4gICAgICBzeXN0ZW0tdWksXFxyXFxuICAgICAgLWFwcGxlLXN5c3RlbSxcXHJcXG4gICAgICBCbGlua01hY1N5c3RlbUZvbnQsXFxyXFxuICAgICAgXFxcIlNlZ29lIFVJXFxcIixcXHJcXG4gICAgICBSb2JvdG8sXFxyXFxuICAgICAgT3h5Z2VuLFxcclxcbiAgICAgIFVidW50dSxcXHJcXG4gICAgICBDYW50YXJlbGwsXFxyXFxuICAgICAgXFxcIk9wZW4gU2Fuc1xcXCIsXFxyXFxuICAgICAgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXHJcXG4gICAgICBzYW5zLXNlcmlmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZC1uYW1lTnNjb3JlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZC1uYW1lTnNjb3JlIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBtYXJnaW4tdG9wOiA1JTtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDJyZW0gKyAoKDF2dyAtIDEuMnJlbSkgKiAxLjEpKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zdWJtaXQtc2NvcmUge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcXHJcXG4gICAgbWFyZ2luOiA1JSAyJSBhdXRvO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsbURBQXdDO0VBQ3hDLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0Qyx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25COzs7Ozs7Ozs7OztjQVdZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsV0FBVztFQUNYLE9BQU87RUFDUCxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLGtEQUFrRDtBQUNsRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxREFBcUQ7RUFDckQsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQ0FBMkM7RUFDM0MsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlEQUF5RDtFQUN6RCxzREFBc0Q7RUFDdEQsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsVUFBVTtFQUNWLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFOzs7Ozs7O3NCQU9rQjtFQUNwQjs7RUFFQTtJQUNFOzs7Ozs7O3NCQU9rQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxREFBcUQ7SUFDckQsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkI7Ozs7Ozs7Ozs7O2dCQVdZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLDhDQUE4QztFQUNoRDs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMseUJBQXlCO0VBQzNCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJsYXRvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2xlYWRlci1iZy5qcGcpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcImxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW46IDUlIGF1dG87XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBwYWRkaW5nOiAzJTtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBmb250LXNpemU6IDMuNHZtYXg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDY5LCA3OCwgMC44KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OlxcclxcbiAgICBzeXN0ZW0tdWksXFxyXFxuICAgIC1hcHBsZS1zeXN0ZW0sXFxyXFxuICAgIEJsaW5rTWFjU3lzdGVtRm9udCxcXHJcXG4gICAgXFxcIlNlZ29lIFVJXFxcIixcXHJcXG4gICAgUm9ib3RvLFxcclxcbiAgICBPeHlnZW4sXFxyXFxuICAgIFVidW50dSxcXHJcXG4gICAgQ2FudGFyZWxsLFxcclxcbiAgICBcXFwiT3BlbiBTYW5zXFxcIixcXHJcXG4gICAgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXHJcXG4gICAgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmFsbC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDkzJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW46IDVyZW0gYXV0bztcXHJcXG4gIHBhZGRpbmc6IDMlO1xcclxcbiAgZ2FwOiA3JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgNjksIDc4LCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzLWxpc3QtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBoZWlnaHQ6IDUwJTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzTnJlc2V0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3Jlcy10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMXJlbSArICgoMXZ3ICsgMXJlbSkgKiAwLjYpKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2gtc2NvcmUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgZm9udC1zaXplOiAxOXB4O1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIuNWVtO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2gtc2NvcmU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGNvbG9yOiByZ2JhKDIsIDY5LCA3OCk7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWlkZGxlLWxpbmUge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIFNlY29uZCBTZWN0aW9uIEFkZCBOYW1lIGFuZCBTY29yZSBzdGFydHMgaGVyZSAqL1xcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1JTtcXHJcXG4gIGdhcDogMiU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXQge1xcclxcbiAgcGFkZGluZzogNSU7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLXNjb3JlIHtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctYWRkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogcmdiYSgyLCA2OSwgNzgpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICBmb250LXNpemU6IDIuMnZtYXg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtbmFtZU5zY29yZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtbmFtZU5zY29yZSBpbnB1dCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBtYXJnaW4tdG9wOiAxMCU7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMnJlbSArICgoMXZ3IC0gMS4ycmVtKSAqIDEuMSkpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbjo6LW1vei1wbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuOi1tb3otcGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtc2NvcmUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgZm9udC1zaXplOiAxOXB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIuNWVtO1xcclxcbiAgbWFyZ2luOiAyNSUgYXV0bztcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtc2NvcmU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGNvbG9yOiByZ2JhKDIsIDY5LCA3OCk7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1pbWcge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zY29yZXMtbGlzdCBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzcsIDIzNywgMjM3KTtcXHJcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IGdsb3cgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbiAgLW1vei1hbmltYXRpb246IGdsb3cgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbiAgYW5pbWF0aW9uOiBnbG93IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWljb24ge1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gIGdhcDogNiU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGdsb3cge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRleHQtc2hhZG93OlxcclxcbiAgICAgIDAgMCAxMHB4ICNmZmYsXFxyXFxuICAgICAgMCAwIDIwcHggI2ZmZixcXHJcXG4gICAgICAwIDAgMzBweCAjMDI4MTdkLFxcclxcbiAgICAgIDAgMCA0MHB4ICMwMGQxYzcsXFxyXFxuICAgICAgMCAwIDUwcHggIzBhZGFmYSxcXHJcXG4gICAgICAwIDAgNjBweCAjMDA4MzdjLFxcclxcbiAgICAgIDAgMCA3MHB4ICMwMDgyN2Q7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIHRleHQtc2hhZG93OlxcclxcbiAgICAgIDAgMCAyMHB4ICNmZmYsXFxyXFxuICAgICAgMCAwIDMwcHggIzg4ZmJmZixcXHJcXG4gICAgICAwIDAgNDBweCAjODhmYmZmLFxcclxcbiAgICAgIDAgMCA1MHB4ICM4OGZiZmYsXFxyXFxuICAgICAgMCAwIDYwcHggIzg4ZmJmZixcXHJcXG4gICAgICAwIDAgNzBweCAjODhmYmZmLFxcclxcbiAgICAgIDAgMCA4MHB4ICM4OGZiZmY7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxyXFxuICAuYWxsLWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2NvcmVzLWxpc3QtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zY29yZXNOcmVzZXQge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb3JtIGlucHV0IHtcXHJcXG4gICAgcGFkZGluZzogMyU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpdGxlIHtcXHJcXG4gICAgcGFkZGluZzogMXB4O1xcclxcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBmb250LXNpemU6IDIuNnZtYXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgNjksIDc4LCAwLjgpO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6XFxyXFxuICAgICAgc3lzdGVtLXVpLFxcclxcbiAgICAgIC1hcHBsZS1zeXN0ZW0sXFxyXFxuICAgICAgQmxpbmtNYWNTeXN0ZW1Gb250LFxcclxcbiAgICAgIFxcXCJTZWdvZSBVSVxcXCIsXFxyXFxuICAgICAgUm9ib3RvLFxcclxcbiAgICAgIE94eWdlbixcXHJcXG4gICAgICBVYnVudHUsXFxyXFxuICAgICAgQ2FudGFyZWxsLFxcclxcbiAgICAgIFxcXCJPcGVuIFNhbnNcXFwiLFxcclxcbiAgICAgIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsXFxyXFxuICAgICAgc2Fucy1zZXJpZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hZGQtbmFtZU5zY29yZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hZGQtbmFtZU5zY29yZSBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygycmVtICsgKCgxdncgLSAxLjJyZW0pICogMS4xKSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3VibWl0LXNjb3JlIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMi41ZW07XFxyXFxuICAgIG1hcmdpbjogNSUgMiUgYXV0bztcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHNjb3JlQWRkIGZyb20gJy4uL21vZHVsZXMvYWRkLXNjb3JlLmpzJztcbmltcG9ydCBnZXRTY29yZXMgZnJvbSAnLi4vbW9kdWxlcy9nZXQtc2NvcmUuanMnO1xuXG5jb25zdCBsaXN0U2NvcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3Jlcy1saXN0Jyk7XG5jb25zdCByZWZyZXNoU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVmcmVzaC1zY29yZScpO1xuY29uc3Qgc3VibWl0U2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LXNjb3JlJyk7XG5jb25zdCBtc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXNnJyk7XG5cbnJlZnJlc2hTY29yZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBnZXRTY29yZXMobGlzdFNjb3Jlcyk7XG59KTtcblxuc3VibWl0U2NvcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLW5hbWUnKS52YWx1ZTtcbiAgY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1zY29yZScpLnZhbHVlO1xuICBzY29yZUFkZChsaXN0U2NvcmVzLCB1c2VyLCBzY29yZSwgbXNnKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9