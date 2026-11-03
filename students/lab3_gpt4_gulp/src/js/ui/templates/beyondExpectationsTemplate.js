export const beyondExpectationsTemplate = (data) => {
  const template = `
    <div class="beyond_expectations">
      <div class="expectations_section_left">
        <img src="${data.leftImg}" alt="woman" />
      </div>

      <div class="beyond_expectations_right">
        <a href="#" class="right_cta">${data.ctaTop}</a>
        <h2 class="right_header">${data.title}</h2>
        <p class="right_text">${data.text}</p>
        <a href="#" class="right_buttom_cta">${data.ctaBottom}</a>
      </div>

      <div class="beyond_expectations_center">
        <div class="center_container">
          <a href="#" class="center_cta">${data.centerBanner.cta}</a>
          <h3 class="container_header">${data.centerBanner.title}</h3>
        </div>
        <div class="cta_buttons">
          <a href=""><button class="cta_buttons_start btn">${data.centerBanner.button}</button></a>
        </div>
      </div>
    </div>
  `;

  return template;
};