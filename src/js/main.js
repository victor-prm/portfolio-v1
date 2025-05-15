import Home from '../views/home.js';
import Projects from '../views/projects.js';
import Detail from '../views/detail.js';

import { contextHeader } from '../components/header';
import '../style/index.sass'
import { navFooter } from '../components/footer.js';
import { getCurrentRoute } from './utils.js';

//SETUP
document.body.prepend(contextHeader())


// Client-side navigation
function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

// Attach event listeners to links
document.addEventListener('click', e => {
  if (e.target.matches('[data-link]')) {
    e.preventDefault();
    navigateTo(e.target.href);
  }
});

function router() {
  const routes = [
    { path: "/", view: Home },
    { path: "/projects", view: Projects },
    { path: "/detail", view: Detail }
  ];

  const match = routes.find(r => r.path === location.pathname);

  const app = document.getElementById("app");
  app.innerHTML = ''; // Clear old content

  const view = match ? match.view() : document.createElement('h1');
  if (!match) view.textContent = '404 - Page Not Found';

  // Add fade-in class to the new view
  view.classList.add('fade-in');

  // Optional: force reflow to restart animation if needed
  void view.offsetWidth;

  app.appendChild(view);

  let header = document.querySelector(".header")
  app.style.paddingTop = header.offsetHeight + 16 + "px"
  console.log(header.offsetHeight)
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });


  document.body.append(navFooter())
}

// Back/forward buttons
window.addEventListener("popstate", router);

// Initial load
router();


