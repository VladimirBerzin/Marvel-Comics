import { ROOT_INDEX } from '../../constants/root';

import './Error.css';

class Error {
  render() {
    const htmlWrapper = `
    <div class="error__wrapper">
      <span class="error__item">
      <p class="error__text">Что-то пошло не так</p> 
      <p class="error__text">Попробуйте заглянуть позже</p> 
      </span>
    </div>
    `;

    ROOT_INDEX.innerHTML = htmlWrapper;
  }
}

export default new Error();
