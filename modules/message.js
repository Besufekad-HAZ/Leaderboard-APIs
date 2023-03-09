const messageDisplay = (msg, removeClass, addClass, innerHTML) => {
  msg.classList.remove(removeClass);
  msg.classList.add(addClass);
  msg.innerHTML = innerHTML;
  setTimeout(() => {
    msg.classList.remove(addClass);
    msg.innerHTML = '';
  }, 2000);
};

export default messageDisplay;
