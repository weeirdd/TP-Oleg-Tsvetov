export const makeAStepTemplate = (data) => {
  const template = `
    <div class="make_a_step">
      <h2>${data.title}</h2>
      <a href="${data.buttonLink}" class="right_buttom_cta make_a_step_button">${data.buttonText}</a>
    </div>
  `;

  return template;
};