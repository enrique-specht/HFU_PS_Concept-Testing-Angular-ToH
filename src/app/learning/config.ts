import Shepherd from 'shepherd.js/';
import { offset } from '@floating-ui/dom';

type StepButtonTypes = 'back' | 'cancel' | 'next';

type StepButtons = {
  back: Shepherd.Step.StepOptionsButton & { type: StepButtonTypes };
  cancel: Shepherd.Step.StepOptionsButton & { type: StepButtonTypes };
  next: Shepherd.Step.StepOptionsButton & { type: StepButtonTypes };
};

export const STEPS_BUTTONS: StepButtons = {
  back: {
    classes: 'back-button',
    secondary: true,
    text: 'Back',
    label: 'Back',
    type: 'back',
  },
  cancel: {
    classes: 'cancel-button',
    secondary: true,
    text: 'Exit',
    label: 'Exit',
    type: 'cancel',
  },
  next: {
    classes: 'next-button',
    text: 'Next',
    label: 'Next',
    type: 'next',
  },
};

export const defaultStepOptions: Shepherd.Step.StepOptions = {
  cancelIcon: {
    enabled: true,
    label: 'Cancel',
  },
  canClickTarget: true,
  classes: 'shepherd-theme-arrows',
  floatingUIOptions: {
    middleware: [offset(10)],
  },
  highlightClass: 'highlighted-element',
  modalOverlayOpeningPadding: 1,
  scrollTo: { behavior: 'smooth', block: 'center' },
};

export const steps: Shepherd.Step.StepOptions[] = [
  {
    showOn: (): boolean => {
      return location.pathname === '/dashboard';
    },
    title: 'Start',
    text: `Titel`,
    buttons: [STEPS_BUTTONS.cancel, STEPS_BUTTONS.next],
  },

  {
    showOn: (): boolean => {
      return location.pathname === '/dashboard';
    },
    attachTo: {
      element: '#Bombasto',
      on: 'bottom-start',
    },
    title: 'Bombasto',
    text: `Anklicken`,
    advanceOn: { selector: '#Bombasto', event: 'click' },
    buttons: [STEPS_BUTTONS.cancel],
  },

  {
    showOn: (): boolean => {
      return location.pathname === '/detail/13';
    },
    title: 'Klick',
    text: `Titel`,
    buttons: [STEPS_BUTTONS.cancel, STEPS_BUTTONS.next],
  },

  {
    showOn: (): boolean => {
      return location.pathname === '/detail/13';
    },
    attachTo: {
      element: '#hero-name',
      on: 'right',
    },
    title: 'Hero Name',
    text: `Hero`,
    advanceOn: { selector: '#hero-name', event: 'input' },
    buttons: [STEPS_BUTTONS.cancel, STEPS_BUTTONS.next],
  },
];
