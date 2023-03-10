import scoreGet from './get-score.js';
import messageDisplay from './message.js';

// Add scores Using Async and Await function
const scoreAdd = async (scores, userValue, scoreValue, message) => {
  if (userValue === '' || scoreValue === '') {
    messageDisplay(
      message,
      'success',
      'error',
      'Please fill all the required fields!',
    );
  } else {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mg3gGm7wJnYF5Xnfw3GZ/scores/',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userValue,
          score: scoreValue,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
    if (response.ok) {
      scoreGet(scores);
    } else {
      messageDisplay(
        message,
        'error',
        'success',
        'Error, something is not right..',
      );
    }
    document.querySelector('.user-name').value = '';
    document.querySelector('.user-score').value = '';

    const json = await response.json();
    messageDisplay(message, 'error', 'success', json.result);
  }
};

export default scoreAdd;
