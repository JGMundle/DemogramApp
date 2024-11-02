import { normalizeX, normalizeY } from "@/utils/normalize";

const spacingX = {
  _1: normalizeX(1),
  _3: normalizeX(3),
  _5: normalizeX(5),
  _7: normalizeX(7),
  _9: normalizeX(9),
  _10: normalizeX(10),
  _15: normalizeX(15),
  _20: normalizeX(20),
  _25: normalizeX(25),
  _30: normalizeX(30),
};
const spacingY = {
  _5: normalizeY(5),
  _7: normalizeY(7),
  _9: normalizeY(9),
  _10: normalizeY(10),
  _15: normalizeY(15),
  _20: normalizeY(20),
  _25: normalizeY(25),
  _30: normalizeY(30),
  _40: normalizeY(40),
  _50: normalizeY(50),
  _60: normalizeY(60),
  _70: normalizeY(70),
};
const radius = {
  _3: normalizeY(3),
  _5: normalizeY(5),
  _7: normalizeY(7),
  _9: normalizeY(9),
  _10: normalizeY(10),
  _15: normalizeY(15),
  _20: normalizeY(20),
  _25: normalizeY(25),
};
const height = {
  btn: normalizeY(45),
  inputField: normalizeY(40),
};

export {spacingX, spacingY, radius, height}