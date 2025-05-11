import { createHeader } from '../components/header';
import '../style/index.sass'

//SETUP
document.body.prepend(createHeader())






//ROUTER
function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

document.addEventListener("click", e => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigateTo(e.target.href);
  }
});

async function router() {
  const routes = [
    { path: "/", view: () => fetch("/pages/home.html").then(res => res.text()) },
    { path: "/projects", view: () => fetch("/pages/projects.html").then(res => res.text()) },
    { path: "/detail", view: () => fetch("/pages/detail.html").then(res => res.text()) }
  ];

  const potentialMatches = routes.map(route => ({
    route,
    isMatch: location.pathname === route.path
  }));

  let match = potentialMatches.find(p => p.isMatch);

  if (!match) {
    match = {
      route: { view: () => Promise.resolve("<h1>404 Not Found</h1>") }
    };
  }

  const html = await match.route.view();
  const app = document.getElementById("app");

  // Fade out current content
  app.style.opacity = "0";

  setTimeout(() => {
    app.innerHTML = html;
    app.classList.remove("fade-in"); // reset class
    void app.offsetWidth; // force reflow
    app.classList.add("fade-in");
    app.style.opacity = "1";
  }, 300);
}

window.addEventListener("popstate", router);
router();