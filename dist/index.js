import ardKidsSat10 from "./children/ardKidsSat10";
import { boyP1, boyP3, boyP4 } from "./pattern/good/boy";
import { girlP1, girlP3, girlP4 } from "./pattern/good/girl";
import { pastePatternBoy } from "./pattern";
//Вітаю, пані!
// написати Вітаю, пані/пане в окрему змінну
const refs = {
    list: document.querySelector(".text_list"),
};
const markup = ardKidsSat10.map((child) => {
    let counter = [];
    if (child.isBoy) {
        counter.push(pastePatternBoy(child, boyP1, boyP3, boyP4));
    }
    if (child.isBoy) {
        counter.push(pastePatternBoy(child, girlP1, girlP3, girlP4));
    }
    return counter.join(" ");
});
if (refs.list) {
    refs.list.innerHTML = markup;
}
console.log(refs.list);
//# sourceMappingURL=index.js.map