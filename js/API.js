const urlBase = 'http://localhost:3000';

const getFurniture = (success, failure) => {
  fetch(urlBase + '/furniture')
    .then(response => response.json())
    .then(success)
    .catch(failure);
}

const deleteFurniture = (success, failure, id) => {
  fetch(urlBase + '/furniture/' + id , { method: 'DELETE' })
  .then(success)
  .catch(failure);
}

const API = {
  getFurniture,
  deleteFurniture
};