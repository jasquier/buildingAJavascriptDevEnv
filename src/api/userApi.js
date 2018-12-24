import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export const getUsers = () => get('users');
export const deleteUser = (id) => del(`users/${id}`);


// We use get/del to provide an abstraction layer, down here we can decide how we
// want to make network calls as well as how we handle success and failure
const get = (url) => fetch(baseUrl + url).then(onSuccess, onError);
const del = (url) => {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });
  return fetch(request).then(onSuccess, onError);
}


const onSuccess = (resp) => resp.json();
const onError = (err) => {
  console.error(err); // eslint-disable-line no-console
}
