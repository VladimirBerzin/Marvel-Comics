import './notification.css';
import { ROOT_MODAL } from '../../constants/root';

class Notification {
  render() {
    const htmlWrapper = `
    <div class="notification__wrapper" onclick="modal.innerHTML= ''">
      <h3 class="notification__text">Нет контента</h3>
      <button
        class="notification__btn" 
        >
        <svg fill="#000000" viewBox="0 0 50 50" width="30px" height="30px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z">
        </svg>
      </button>
    </div>;
    `;
    ROOT_MODAL.innerHTML = htmlWrapper;
  }
}

export default new Notification();
