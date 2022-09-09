import { IMG_STANDARD_XLARGE } from '../../constants/api';
import './Characters.css';
import { getDataApi } from '../../util/GetDataApi';
import { ROOT_MODAL } from '../../constants/root';
import Notification from '../Notification';

class Characters {
  renderContent(data) {
    let htmlContent = '';

    data.forEach(({ name, thumbnail: { path, extension } }) => {
      const imgSrc = `${path}/${IMG_STANDARD_XLARGE}.${extension}`;
      htmlContent += `
      <li class="characters-list__item" >
        <img class="characters-list__img" src="${imgSrc}"/>
        <h3 class="characters-list__title">${name}</h3>
      </li>
      `;
    });

    const htmlWrapper = `
    <div class="characters-wrapper">
      <ul class="characters-list">
        ${htmlContent}
      </ul>
      <button
        class="characters__btn" 
        onclick="modal.innerHTML= ''">
        <svg fill="#000000" viewBox="0 0 50 50" width="30px" height="30px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z">
        </svg>
      </button>
    </div>
    `;

    ROOT_MODAL.innerHTML = htmlWrapper;
  }
  async render(uri) {
    const data = await getDataApi.getData(uri);
    data.length ? this.renderContent(data) : Notification.render();
  }
}

export default new Characters();
