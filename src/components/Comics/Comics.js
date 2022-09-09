import {
  API_URL,
  URL_COMICS,
  URL_CHARACTERS,
  IMG_NOT_AVAILABLE,
  IMG_STANDARD_XLARGE,
} from '../../constants/api';
import { getDataApi } from '../../util/GetDataApi';
import { ROOT_INDEX } from '../../constants/root';
import Error from '../Error';
import Characters from '../Characters';

import './Comics.css';

class Comics {
  renderComics(data) {
    let htmlContent = '';
    data.forEach(({ id, title, thumbnail: { path, extension } }) => {
      if (path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {
        const uri = `${API_URL}${URL_COMICS}/${id}/${URL_CHARACTERS}`;

        const imgSrc = `${path}/${IMG_STANDARD_XLARGE}.${extension}`;

        htmlContent += `
      <li class="comics-list__item item-comics" data-uri="${uri}">
        <h3 class="item-comics__title">
        ${title}
        </h3>
        <img class="item-comics__img" src="${imgSrc}" >
      </li>
      `;
      }
    });

    let htmlWrapper = `
    <ul class="comics-list" >
      ${htmlContent}
    </ul>
    `;

    ROOT_INDEX.innerHTML = htmlWrapper;
  }

  async render() {
    const data = await getDataApi.getData(API_URL + URL_COMICS);

    data ? this.renderComics(data) : Error.render();
  }
  eventListener() {
    document.querySelectorAll('.item-comics').forEach((element) => {
      const uri = element.getAttribute('data-uri');
      element.addEventListener('click', () => {
        Characters.render(uri);
      });
    });
  }
}

export default new Comics();
