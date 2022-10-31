export default {
  renderApp() {
    const friendsApp = document
      .getElementById('friendsAppTemplate')
      .content.cloneNode(true).firstElementChild;
    return friendsApp;
  },
  render(friends) {
    const fragment = document.createDocumentFragment();
    friends.forEach((person) => {
      const friend = document
        .getElementById('friend')
        .content.cloneNode(true).firstElementChild;
      friend.setAttribute('id', person.id);
      friend.draggable = true;
      friend.querySelector('.friend__img').src = person.img;
      friend.querySelector('.friend__name').textContent = person.name;
      fragment.appendChild(friend);
    });
    return fragment;
  },
};
