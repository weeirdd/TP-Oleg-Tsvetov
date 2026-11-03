export const createBlogCardTemplate = ({ isBig, image, date, title, link }) => {
  const cardClass = isBig ? 'blog_card_big' : 'blog_card_small';
  const titleClass = isBig ? 'big_blog_card_title' : 'blog_card_title';

  const template = `
    <div class="blog_card ${cardClass}">
      <img src="${image}" alt="blog"/>
      <div class="blog_card_content">
        <p class="blog_card_date">${date}</p>
        <h3 class="${titleClass}">${title}</h3>
        <a href="${link}" class="blog_card_link">Читать полную статью</a>
      </div>
    </div>
  `;

  return template;
};

export const alotHappensTemplate = (dataArray) => {
  const cardsHTML = dataArray
    .map((item) => createBlogCardTemplate(item))
    .join("");

  const template = `
    <div class="section alot_happens">
      <h2>
        Многое Происходит<br>
        Мы Ведем об Этом Блог.
      </h2>
      <div class="alot_happens_table">
        ${cardsHTML}
      </div>
    </div>
  `;

  return template;
};