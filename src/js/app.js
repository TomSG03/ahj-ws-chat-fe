import Chat from './chat';

const domElmt = document.querySelector('.chat');

// const servetPath = 'https://netology-ahj-http-heroku.herokuapp.com';
const serverPath = 'ws://localhost:7070';

const chat = new Chat(domElmt, serverPath);
chat.init();
