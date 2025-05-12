export default function Detail() {
  const container = document.createElement('div');
  container.classList.add('home');
  container.innerHTML = `
    <h1>This is a detail view</h1>
    <p>More to come...</p>
  `;
  return container;
}