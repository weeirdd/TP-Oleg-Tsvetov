import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";

// добавляю я три слайда, ну, точнее, компоненты 
import initBeyondExpectations from "./../components/initBeyondExpectations.js";
import initAlotHappens from "./../components/initAlotHappens.js";
import initMakeAStep from "./../components/initMakeAStep.js";
// мой потерянный где-то в диве футер 
import initFooter from "./../components/initFooter.js";

const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>

    <section class="section beyond_expectations_section"></section>
    <section class="section alot_happens_section"></section>
    <section class="section make_a_step_section"></section>

    <footer class="footer_section"></footer>
  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация хиро раздела
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация хиро раздела
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);


  // неприятное слово для произношения, но инициализация для моих новых секций, которые я выше написала
  const beyondExpectationsNode = rootNode.querySelector(".beyond_expectations_section");
  initBeyondExpectations(beyondExpectationsNode);

  const alotHappensNode = rootNode.querySelector(".alot_happens_section");
  initAlotHappens(alotHappensNode);

  const makeAStepNode = rootNode.querySelector(".make_a_step_section");
  initMakeAStep(makeAStepNode);

  // фуууутер
  const footerNode = rootNode.querySelector(".footer_section");
  initFooter(footerNode);

  // инициализация бургера для адаптивного меню
  initBurger(headerNode);
};

export default homePage;
