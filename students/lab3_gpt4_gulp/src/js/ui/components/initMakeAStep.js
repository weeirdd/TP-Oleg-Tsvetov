import makeAStepData from "../../mockData/makeAStepData.js";
import { makeAStepTemplate } from "../templates/makeAStepTemplate.js";

const initMakeAStep = (node) => {
  node.innerHTML = makeAStepTemplate(makeAStepData);
};

export default initMakeAStep;