import URL from './url.js';

export const getGames = async () => fetch(`${URL}/games`)
  .then((res) => res.json())
  .then((data) => data.result)
  .catch((error) => error)

const getScore = async (gameId = "gTYDGIDW8fMHrK3hEdRJ") => fetch(`${URL}/games/${gameId}/scores`)
  .then((response) => response.json())
  .then((data) => data.result)
  .catch((error) => error);

export default getScore;