import Home from '../views/home.js';
import Projects from '../views/projects.js';
import Detail from '../views/detail.js';

import { contextHeader } from '../components/header';
import '../style/index.sass';
import { navFooter } from '../components/footer.js';
import { getBasePath} from './utils.js';

// Detect basePath depending on hosting environment
const basePath = getBasePath()
console.log(basePath, typeof basePath)

// SETUP
document.body.prepend(contextHeader());

// Client-side navigation
function navigateTo(url) {
  history.pushState(null, null, basePath + url);
  router();
}

// Attach event listeners to links
document.addEventListener('click', e => {
  if (e.target.matches('[data-link]')) {
    e.preventDefault();
    navigateTo(e.target.getAttribute('href'));
  }
});

function router() {
  const routes = [
    { path: "/", view: Home },
    { path: "/projects", view: Projects },
    { path: "/detail", view: Detail }
  ];

  const currentPath = location.pathname.replace(basePath, '') || "/";

  const match = routes.find(r => r.path === currentPath);
  console.log("Current path:", location.pathname);

  const app = document.getElementById("app");
  app.innerHTML = ''; // Clear old content

  const view = match ? match.view() : document.createElement('h1');
  if (!match) view.textContent = '404 - Page Not Found';

  // Add fade-in class to the new view
  view.classList.add('fade-in');

  // Optional: force reflow to restart animation if needed
  void view.offsetWidth;

  app.appendChild(view);

  let header = document.querySelector(".header");
  app.style.paddingTop = header.offsetHeight + 16 + "px";

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  document.body.append(navFooter());
}

// Back/forward buttons
window.addEventListener("popstate", router);

// Initial load
router();