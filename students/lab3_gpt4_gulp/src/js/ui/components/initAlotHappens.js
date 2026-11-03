import alotHappensData from "../../mockData/alotHappensData.js";
import { alotHappensTemplate } from "../templates/alotHappensTemplate.js";

const initAlotHappens = (node) => {
  node.innerHTML = alotHappensTemplate(alotHappensData);
};

export default initAlotHappens;