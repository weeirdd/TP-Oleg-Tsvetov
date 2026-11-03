export const footerTemplate = (data) => {
  const template = `
    <div class="links_about_contacs_top">
      <div class="footer_top">
        <div class="footer_brand">
          <img src="${data.brand.logo}" alt="gpt3" class="gpt3_logo"/>
          <p class="footer_address">${data.brand.address}</p>
          <p class="footer_rights">${data.brand.rights}</p>
        </div>

        <div class="footer_columns">
          <div class="footer_column_left">
            <h3 class="footer_header">${data.links.title}</h3>
            <ul class="footer_list">
              ${data.links.items.map(item => `<li><a href="#">${item}</a></li>`).join('')}
            </ul>
          </div>

          <div class="footer_column_center">
            <h3 class="footer_header">${data.company.title}</h3>
            <ul class="footer_list">
              ${data.company.items.map(item => `<li><a href="#">${item}</a></li>`).join('')}
            </ul>
          </div>

          <div class="footer_column_right">
            <h3 class="footer_header">${data.contacts.title}</h3>
            <ul class="footer_list">
              <li><p class="footer_text">${data.contacts.address}</p></li>
              <li><p class="footer_text">${data.contacts.phone}</p></li>
              <li><a href="#">${data.contacts.email}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer_bottom">
        <p class="footer_copyright">${data.copyright}</p>
      </div>
    </div>
  `;

  return template;
};