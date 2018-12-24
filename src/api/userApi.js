import 'whatwg-fetch';

export const getUsers = () => get('users');

// We use get to provide an abstraction layer, down here we can decide how we
// want to make network calls as well as how we handle success and failure
const get = (url) => fetch(url).then(onSuccess, onError);

const onSuccess = (resp) => resp.json();

const onError = (err) => {
  console.error(err); // eslint-disable-line no-console
}

/* Original source
export function getUsers() {
  return get('users');
}

function get(url) {
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error);
}
*/
