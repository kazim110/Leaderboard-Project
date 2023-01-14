import URL from './url.js';

export const createGame = async (name) => fetch(`${URL}/games`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(name),
})
  .then((res) => res.json())
  .then((data) => data.result)
  .catch((error) => error);

const postScore = async (userInput, gameId = 'gTYDGIDW8fMHrK3hEdRJ') => fetch(`${URL}/games/${gameId}/scores`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(userInput),
})
  .then((response) => response.json())
  .then((data) => data.result);

export default postScore;