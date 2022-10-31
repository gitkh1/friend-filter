let oldFriends;
const app = document.querySelector('#app');

import Model from './model.js';
import View from './view.js';

export default {
  oldFriends,

  async loadFriends() {
    const friends = await Model.getFriends({ fields: 'photo_50' });
    this.oldFriends = friends.items.map((item) => {
      return {
        name: `${item.first_name} ${item.last_name}`,
        img: item.photo_50,
        isBestFriend: false,
        id: item.id,
      };
    });
    Model.setLocal(this.oldFriends);
  },

  init() {
    app.appendChild(View.renderApp());

    this.oldFriends = Model.getLocal();
    if (!this.oldFriends) {
      this.loadFriends().then(() => this.routeFriends(this.oldFriends));
      console.log('loaded new friends');
    } else {
      this.routeFriends(this.oldFriends);
      console.log('loaded old friends');
    }

    this.addClickListener();
    this.addInputListeners();
    this.makeDnd();
  },

  routeFriends() {
    const filterInputAll = document
      .querySelector('input.filter__input[data="allfriendsfilter"]')
      .value.toLowerCase();
    const filterInputBest = document
      .querySelector('input.filter__input[data="bestfriendsfilter"]')
      .value.toLowerCase();

    const allFriends = this.oldFriends.filter((item) => {
      if (item.isBestFriend === false) {
        if (filterInputAll === '') return true;
        return item.name.toLowerCase().includes(filterInputAll);
      }
      return false;
    });

    const bestFriends = this.oldFriends.filter((item) => {
      if (item.isBestFriend === true) {
        if (filterInputBest === '') return true;
        return item.name.toLowerCase().includes(filterInputBest);
      }
      return false;
    });

    const allFriendsTarget = app
      .querySelector(`.friendslist__all`)
      .querySelector('.friendslist__list');
    allFriendsTarget.innerHTML = '';
    allFriendsTarget.appendChild(View.render(allFriends));

    const bestFriendsTarget = app
      .querySelector(`.friendslist__best`)
      .querySelector('.friendslist__list');
    bestFriendsTarget.innerHTML = '';
    bestFriendsTarget.appendChild(View.render(bestFriends));
  },

  moveFriend(friend) {
    const attr = Number(friend.getAttribute('id'));
    const friendObject = this.oldFriends.find((item) => item.id === attr);
    friendObject.isBestFriend = friendObject.isBestFriend ? false : true;
    this.routeFriends(this.oldFriends);
    Model.setLocal(this.oldFriends);
  },

  addClickListener() {
    document.addEventListener('click', (e) => {
      const friend = e.target.closest('.friend');
      if (friend) {
        this.moveFriend(friend);
      }
    });
  },

  addInputListeners() {
    document
      .querySelector('input.filter__input[data="allfriendsfilter"]')
      .addEventListener('input', (e) => this.routeFriends());
    document
      .querySelector('input.filter__input[data="bestfriendsfilter"]')
      .addEventListener('input', (e) => this.routeFriends());
  },

  makeDnd() {
    let currentDrag;
    const zones = document.querySelectorAll('.friendslist__list');

    for (const zone of zones) {
      zone.addEventListener('dragstart', (e) => {
        currentDrag = {
          source: zone,
          node: e.target.closest('.friend'),
        };
        e.dataTransfer.setData('text/html', '...');
      });

      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
      });

      zone.addEventListener('drop', (e) => {
        if (currentDrag) {
          e.preventDefault();
          if (currentDrag.source !== zone) {
            this.moveFriend(currentDrag.node);
          }
          currentDrag = null;
        }
      });
    }
  },
};
