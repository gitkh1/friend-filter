/* eslint-disable no-undef */
const key = 'VK-friends';

export default {
  loadScript(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = () => resolve(script);
      document.head.append(script);
    });
  },
  login(appId, perms) {
    return new Promise((resolve, reject) => {
      VK.init({
        apiId: appId,
      });
      VK.Auth.login((data) => {
        if (data.session) {
          resolve(data);
        } else {
          reject(new Error('Не удалось авторизоваться'));
        }
      }, perms);
    });
  },
  callApi(method, params) {
    params.v = params.v || 5.131;
    return new Promise((resolve, reject) => {
      VK.api(method, params, (response) => {
        if (response.error) {
          reject(new Error(response.error.error_msg));
        } else {
          resolve(response.response);
        }
      });
    });
  },
  getFriends(params = {}) {
    return this.callApi('friends.get', params);
  },
  getLocal() {
    if (!localStorage.getItem(key)) return false;
    return JSON.parse(localStorage.getItem(key));
  },
  setLocal(data) {
    localStorage.setItem(key, JSON.stringify(data));
  },
};
