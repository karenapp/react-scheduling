import initializeKaren from "./karen-widget";

export const loadScript = () => {
  if (!window.Karen) {
    initializeKaren();
  }
};
