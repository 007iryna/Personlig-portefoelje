import { UIComponent } from './UIComponent.js';

/* CaseGrid —  en samling af Project-objekter */
export class CaseGrid extends UIComponent {
  constructor(element, projects) {
    super(element);
    this.projects = projects;
  }

  init() {
    this.render();
  }

  render() {
    let html = '';

    for (let i = 0; i < this.projects.length; i++) {
      const project = this.projects[i];

      html += '<a href="' + project.url + '" class="cases-nav-item">';
      html += '<img src="' + project.image + '" alt="' + project.title + '">';
      html += '<span class="cases-nav-title">' + project.title + '</span>';
      html += '</a>';
    }

    this.element.innerHTML = html;
  }
}