import { UIComponent } from './UIComponent.js';

/* Viser/skjuler procesindholdet i et case-kort*/


export class CaseToggle extends UIComponent {
  constructor(button) {
    super(button);
    this.button = button;
    this.target = document.getElementById(button.dataset.target);
  }

  init() {
    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      this.toggle();
    });
  }

  toggle() {
    const isHidden = this.target.hidden;
    this.target.hidden = !isHidden;
    this.button.textContent = isHidden ? 'Skjul' : 'Se mere';
  }
}