import messageDisplay from './message.js';

const createGame = async (myGame, msg) => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
    {
      method: 'POST',
      body: JSON.stringify({
        name: myGame,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const json = await response.json();
  messageDisplay(msg, 'error', 'success', json.result);
};

export default createGame;
