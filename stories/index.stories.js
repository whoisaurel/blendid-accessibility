export default {
  title: 'Button',
};

import '../public/stylesheets/critical.css';
import '../public/stylesheets/app.css';


// export const Heading = () => '<h1>Title h1</h1>';

export const Button = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Hello Button';
  btn.addEventListener('click', e => console.log(e));
  return btn;
};

export const withText = () => '<button class="btn">Hello World</button>';

export const withEmoji = () => {
  const button = document.createElement('button');
  button.innerText = 'Test du bouton';
  return button;
};
