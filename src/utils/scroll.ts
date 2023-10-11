export const disableScroll = () => {
  document.body.style.overflowY = "hidden";
  document.body.style.marginRight = "12px";
};

export const enableScroll = () => {
  document.body.style.overflowY = "auto";
  document.body.style.marginRight = "0px";
};
