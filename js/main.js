import { Nav } from './Nav.js';
import { ContactForm } from './ContactForm.js';
import { CaseGrid } from './CaseGrid.js';
import { CaseToggle } from './CaseToggle.js';
import { Project } from './Project.js';



document.addEventListener('DOMContentLoaded', () => {

  /* Navigation (burger-menu) */
  const navEl = document.getElementById('primary-nav');
  const navToggle = document.getElementById('navToggle');
  if (navEl && navToggle) {
    new Nav(navEl, navToggle).init();
  }

  /* Kontaktformular */
  const contactFormEl = document.getElementById('contactForm');
  if (contactFormEl) {
    new ContactForm(contactFormEl).init();
  }

  /* Cases-grid */
  const projects = [
    new Project(
      'Interaktiv interface & Gamification',
      'img/ii.webp',
      'case-design.html'
    ),
    
    new Project(
      'Branding & Identitet',
      'img/brand.webp',
      'case-branding.html'
    ),
    new Project(
      'Digital illustration & Visuelt indhold',
      'img/di.webp',
      'case-indhold'
    ),
  ];

  const casesGridEl = document.querySelector('.cases-nav-grid');
  if (casesGridEl) {
    new CaseGrid(casesGridEl, projects).init();
  }

  const caseToggleButtons = document.querySelectorAll('.case-toggle-btn');
 caseToggleButtons.forEach((button) => {
  new CaseToggle(button).init();
 });

  /* Footer */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
