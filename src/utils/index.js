import { overrideTailwindClasses } from "tailwind-override";
import reactClasslistHelper from "react-classlist-helper";

export function mergeClassList(classObject) {
  return overrideTailwindClasses(reactClasslistHelper(classObject), {
    jit: false,
  });
}

export function classList(classObject) {
  return reactClasslistHelper(classObject);
}

export function NOOP() {}
