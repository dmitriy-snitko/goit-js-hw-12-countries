import { alert, error, defaults, Stack } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Angeler.css';

const myStack = new Stack({
  dir1: 'down',
  dir2: 'left',
  firstpos1: 25,
  firstpos2: 25,
  maxStrategy: 'close',
  maxClosureCausesWait: false,
  context: document.body,
  push: 'top',
});

defaults.delay = 5000;
defaults.styling = 'angeler';
defaults.maxTextHeight = null;
defaults.animateSpeed = 'normal';
defaults.stack = myStack;

export function onTooManyMatches() {
  return alert({
    text: 'Too many matches found. Please enter a more specific query',
  })
};

export const onError = () => {
  return error({
    text: 'No such country found',
  })
};