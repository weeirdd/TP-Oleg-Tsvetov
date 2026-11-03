import beyondExpectationsData from "../../mockData/beyondExpectationsData.js";
import { beyondExpectationsTemplate } from "../templates/beyondExpectationsTemplate.js";

const initBeyondExpectations = (node) => {
  node.innerHTML = beyondExpectationsTemplate(beyondExpectationsData);
};

export default initBeyondExpectations;
// а давайте все файлы always будут такими же короткими и понятными...?)