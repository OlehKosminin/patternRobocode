import { ChildrenType } from "./types/childrenTypes";
import getRandomInt from "./getRandomInt";

const pastePatternBoy = (
  { parentName, opinion, PIB }: ChildrenType,
  boyP1: string[],
  boyP3: string[],
  boyP4: string[]
): string => {
  return `
      <li class="text_item">
      <h2>kids name ${PIB} !</h2>
        <h2>Шановна ${parentName} !</h2>
        <p class="text_hello">${boyP1[getRandomInt()]}</p>
        <p class="text_o">${opinion}</p>
        <p class="text_motivation">${boyP3[getRandomInt()]}</p>
        <p class="text_end">${boyP4[0]}</p>
      </li>
    `;
};

const pastePatternGirl = (
  { parentName, opinion, PIB }: ChildrenType,
  girlP1: string[],
  girlP3: string[],
  girlP4: string[]
): string => {
  return `
      <li class="text_item">
      <h2>kids name ${PIB} !</h2>
        <h2>Шановна ${parentName} !</h2>
        <p class="text_hello">${girlP1[getRandomInt()]}</p>
        <p class="text_o">${opinion}</p>
        <p class="text_motivation">${girlP3[getRandomInt()]}</p>
        <p class="text_end">${girlP4[0]}</p>
      </li>
    `;
};

export { pastePatternBoy, pastePatternGirl };
