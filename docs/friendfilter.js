/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ const installedModules = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ const module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Flag the module as loaded
    /******/ module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule)
      return value;
    /******/ const ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/ if (mode & 2 && typeof value != 'string')
      for (const key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = function (module) {
    /******/ const getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/ __webpack_require__.p = '';
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/ return __webpack_require__(
    (__webpack_require__.s = './projects/friendfilter/index.js')
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './node_modules/raw-loader/dist/cjs.js!./projects/friendfilter/friendfilter.html':
      /*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/friendfilter/friendfilter.html ***!
  \***************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = ("<style>\\n  * {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n    font-size: 14px;\\n  }\\n\\n  #app {\\n    width: 100vw;\\n    height: 100vh;\\n    background-color: #E5E5E5;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n  }\\n\\n  .friendsapp {\\n    width: 70%;\\n    height: 70%;\\n    border-radius: 10px;\\n    overflow: hidden;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-start;\\n  }\\n\\n  .friendsapp__title {\\n    background-color: #FE8663;\\n    color: #fff;\\n    font-size: 16px;\\n    font-weight: 500;\\n    padding: 14px;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n  }\\n\\n  .friendsapp__body {\\n    overflow: hidden;\\n  }\\n\\n  .friendsapp__filter {\\n    background-color: #F0F0F0;\\n    display: flex;\\n    justify-content: space-between;\\n    align-content: center;\\n  }\\n\\n  .filter__block {\\n    flex: 1;\\n    padding: 15px;\\n  }\\n\\n  .filter__input {\\n    width: 100%;\\n    height: 26px;\\n    border-radius: 40px;\\n    outline: none;\\n    border: 0;\\n    padding-left: 28px;\\n  }\\n\\n  .friendslist {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: flex-start;\\n    background-color: #fff;\\n  }\\n\\n  .friendslist__list {\\n    list-style-type: none;\\n    height: 300px;\\n    overflow-y: scroll;\\n    border-right: 1px solid #F0F0F0;\\n    padding: 0 20px;\\n  }\\n\\n  .friendslist__all {\\n    flex: 1;\\n  }\\n\\n  .friendslist__best {\\n    flex: 1;\\n  }\\n\\n  .friendslist__title {\\n    font-size: 12px;\\n    font-weight: 500;\\n    color: #505050;\\n    border-bottom: 1px solid #F0F0F0;\\n    padding: 12px 20px;\\n  }\\n\\n  .friend {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 8px;\\n    user-select: none;\\n  }\\n\\n  .friend:hover {\\n    background-color: #F0F0F0;\\n    cursor: pointer;\\n  }\\n\\n  .friend__img {\\n    border-radius: 50%;\\n    margin-right: 7px;\\n    flex-shrink: 0;\\n  }\\n\\n  .friend__name {\\n    font-size: 12px;\\n    font-weight: 500;\\n    color: #505050;\\n    flex: 1;\\n  }\\n\\n  .friend__btn {\\n    flex-shrink: 0;\\n    width: 14px;\\n    height: 14px;\\n    border-right: 4px solid #C4C4C4;\\n    border-top: 4px solid #C4C4C4;\\n    transform: rotate(45deg);\\n  }\\n  .friendslist__best .friend__btn {\\n    border: 0;\\n    position: relative;\\n  }\\n  .friendslist__best .friend__btn::before {\\n    content: \'\';\\n    position: absolute;\\n    width: 4px;\\n    height: 14px;\\n    background-color: #C4C4C4;\\n  }\\n  .friendslist__best .friend__btn::after {\\n    content: \'\';\\n    position: absolute;\\n    width: 4px;\\n    height: 14px;\\n    background-color: #C4C4C4;\\n    transform: rotate(90deg);\\n  }\\n\\n  .friendsapp__bottom {\\n    height: 45px;\\n    background-color: #F0F0F0;\\n  }\\n</style>\\n<div id=\\"app\\">\\n\\n</div>\\n<template id=\\"friendsAppTemplate\\">\\n  <div class=\\"friendsapp\\">\\n    <div class=\\"friendsapp__title\\">Выберите друзей</div>\\n    <div class=\\"friendsapp__body\\">\\n      <div class=\\"friendsapp__filter filter\\">\\n        <div class=\\"filter__block\\">\\n          <input type=\\"text\\" class=\\"filter__input\\" placeholder=\\"Начните вводить имя друга\\" data=\\"allfriendsfilter\\">\\n        </div>\\n        <div class=\\"filter__block\\">\\n          <input type=\\"text\\" class=\\"filter__input\\" placeholder=\\"Начните вводить имя друга\\" data=\\"bestfriendsfilter\\">\\n        </div>\\n      </div>\\n      <div class=\\"friendsapp__content friendslist\\">\\n        <div class=\\"friendslist__all\\">\\n          <div class=\\"friendslist__title\\">Ваши друзья</div>\\n          <ul class=\\"friendslist__list\\"></ul>\\n        </div>\\n        <div class=\\"friendslist__best\\">\\n          <div class=\\"friendslist__title\\">Друзья в списке</div>\\n          <ul class=\\"friendslist__list\\"></ul>\\n        </div>\\n      </div>\\n    </div>\\n    <div class=\\"friendsapp__bottom\\"></div>\\n  </div>\\n</template>\\n<template id=\\"friend\\">\\n  <li class=\\"friendslist__item friend\\">\\n    <img src=\\"\\" class=\\"friend__img\\">\\n    <div class=\\"friend__name\\"></div>\\n    <div class=\\"friend__btn\\"></div>\\n  </li>\\n</template>");\n\n//# sourceURL=webpack:///./projects/friendfilter/friendfilter.html?./node_modules/raw-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ './projects/friendfilter/controller.js':
      /*!*********************************************!*\
  !*** ./projects/friendfilter/controller.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ \"./projects/friendfilter/model.js\");\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ \"./projects/friendfilter/view.js\");\nlet oldFriends;\nconst app = document.querySelector('#app');\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  oldFriends,\n\n  async loadFriends() {\n    const friends = await _model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFriends({\n      fields: 'photo_50'\n    });\n    this.oldFriends = friends.items.map(item => {\n      return {\n        name: \"\".concat(item.first_name, \" \").concat(item.last_name),\n        img: item.photo_50,\n        isBestFriend: false,\n        id: item.id\n      };\n    });\n    _model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setLocal(this.oldFriends);\n  },\n\n  init() {\n    app.appendChild(_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderApp());\n    this.oldFriends = _model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getLocal();\n\n    if (!this.oldFriends) {\n      this.loadFriends().then(() => this.routeFriends(this.oldFriends));\n      console.log('loaded new friends');\n    } else {\n      this.routeFriends(this.oldFriends);\n      console.log('loaded old friends');\n    }\n\n    this.addClickListener();\n    this.addInputListeners();\n    this.makeDnd();\n  },\n\n  routeFriends() {\n    const filterInputAll = document.querySelector('input.filter__input[data=\"allfriendsfilter\"]').value.toLowerCase();\n    const filterInputBest = document.querySelector('input.filter__input[data=\"bestfriendsfilter\"]').value.toLowerCase();\n    const allFriends = this.oldFriends.filter(item => {\n      if (item.isBestFriend === false) {\n        if (filterInputAll === '') return true;\n        return item.name.toLowerCase().includes(filterInputAll);\n      }\n\n      return false;\n    });\n    const bestFriends = this.oldFriends.filter(item => {\n      if (item.isBestFriend === true) {\n        if (filterInputBest === '') return true;\n        return item.name.toLowerCase().includes(filterInputBest);\n      }\n\n      return false;\n    });\n    const allFriendsTarget = app.querySelector(\".friendslist__all\").querySelector('.friendslist__list');\n    allFriendsTarget.innerHTML = '';\n    allFriendsTarget.appendChild(_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render(allFriends));\n    const bestFriendsTarget = app.querySelector(\".friendslist__best\").querySelector('.friendslist__list');\n    bestFriendsTarget.innerHTML = '';\n    bestFriendsTarget.appendChild(_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render(bestFriends));\n  },\n\n  moveFriend(friend) {\n    const attr = Number(friend.getAttribute('id'));\n    const friendObject = this.oldFriends.find(item => item.id === attr);\n    friendObject.isBestFriend = friendObject.isBestFriend ? false : true;\n    this.routeFriends(this.oldFriends);\n    _model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setLocal(this.oldFriends);\n  },\n\n  addClickListener() {\n    document.addEventListener('click', e => {\n      const friend = e.target.closest('.friend');\n\n      if (friend) {\n        this.moveFriend(friend);\n      }\n    });\n  },\n\n  addInputListeners() {\n    document.querySelector('input.filter__input[data=\"allfriendsfilter\"]').addEventListener('input', e => this.routeFriends());\n    document.querySelector('input.filter__input[data=\"bestfriendsfilter\"]').addEventListener('input', e => this.routeFriends());\n  },\n\n  makeDnd() {\n    let currentDrag;\n    const zones = document.querySelectorAll('.friendslist__list');\n\n    for (const zone of zones) {\n      zone.addEventListener('dragstart', e => {\n        currentDrag = {\n          source: zone,\n          node: e.target.closest('.friend')\n        };\n        e.dataTransfer.setData('text/html', '...');\n      });\n      zone.addEventListener('dragover', e => {\n        e.preventDefault();\n      });\n      zone.addEventListener('drop', e => {\n        if (currentDrag) {\n          e.preventDefault();\n\n          if (currentDrag.source !== zone) {\n            this.moveFriend(currentDrag.node);\n          }\n\n          currentDrag = null;\n        }\n      });\n    }\n  }\n\n});\n\n//# sourceURL=webpack:///./projects/friendfilter/controller.js?"
        );

        /***/
      },

    /***/ './projects/friendfilter/friendfilter.html':
      /*!*************************************************!*\
  !*** ./projects/friendfilter/friendfilter.html ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          '\n  const html = __webpack_require__(/*! -!./node_modules/raw-loader/dist/cjs.js!./projects/friendfilter/friendfilter.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/friendfilter/friendfilter.html").default;\n  document.write(html);\n  \n\n//# sourceURL=webpack:///./projects/friendfilter/friendfilter.html?'
        );

        /***/
      },

    /***/ './projects/friendfilter/index.js':
      /*!****************************************!*\
  !*** ./projects/friendfilter/index.js ***!
  \****************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _friendfilter_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friendfilter.html */ "./projects/friendfilter/friendfilter.html");\n/* harmony import */ var _friendfilter_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_friendfilter_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.js */ "./projects/friendfilter/model.js");\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller.js */ "./projects/friendfilter/controller.js");\n\n\n\n_model_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadScript(\'https://vk.com/js/api/openapi.js?169\').then(() => _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].login(51421931, +2)).then(() => _controller_js__WEBPACK_IMPORTED_MODULE_2__["default"].init());\n\n//# sourceURL=webpack:///./projects/friendfilter/index.js?'
        );

        /***/
      },

    /***/ './projects/friendfilter/model.js':
      /*!****************************************!*\
  !*** ./projects/friendfilter/model.js ***!
  \****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\nconst key = 'VK-friends';\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  loadScript(url) {\n    return new Promise((resolve, reject) => {\n      const script = document.createElement('script');\n      script.src = url;\n\n      script.onload = () => resolve(script);\n\n      document.head.append(script);\n    });\n  },\n\n  login(appId, perms) {\n    return new Promise((resolve, reject) => {\n      VK.init({\n        apiId: appId\n      });\n      VK.Auth.login(data => {\n        if (data.session) {\n          resolve(data);\n        } else {\n          reject(new Error('Не удалось авторизоваться'));\n        }\n      }, perms);\n    });\n  },\n\n  callApi(method, params) {\n    params.v = params.v || 5.131;\n    return new Promise((resolve, reject) => {\n      VK.api(method, params, response => {\n        if (response.error) {\n          reject(new Error(response.error.error_msg));\n        } else {\n          resolve(response.response);\n        }\n      });\n    });\n  },\n\n  getFriends() {\n    let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    return this.callApi('friends.get', params);\n  },\n\n  getLocal() {\n    if (!localStorage.getItem(key)) return false;\n    return JSON.parse(localStorage.getItem(key));\n  },\n\n  setLocal(data) {\n    localStorage.setItem(key, JSON.stringify(data));\n  }\n\n});\n\n//# sourceURL=webpack:///./projects/friendfilter/model.js?"
        );

        /***/
      },

    /***/ './projects/friendfilter/view.js':
      /*!***************************************!*\
  !*** ./projects/friendfilter/view.js ***!
  \***************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  renderApp() {\n    const friendsApp = document.getElementById('friendsAppTemplate').content.cloneNode(true).firstElementChild;\n    return friendsApp;\n  },\n\n  render(friends) {\n    const fragment = document.createDocumentFragment();\n    friends.forEach(person => {\n      const friend = document.getElementById('friend').content.cloneNode(true).firstElementChild;\n      friend.setAttribute('id', person.id);\n      friend.draggable = true;\n      friend.querySelector('.friend__img').src = person.img;\n      friend.querySelector('.friend__name').textContent = person.name;\n      fragment.appendChild(friend);\n    });\n    return fragment;\n  }\n\n});\n\n//# sourceURL=webpack:///./projects/friendfilter/view.js?"
        );

        /***/
      },

    /******/
  }
);
