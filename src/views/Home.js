export default function Home() {
  const container = document.createElement('div');
  container.classList.add('home');
  container.innerHTML = `
    <h1>Welcome to my Portfolio</h1>
    <p>This is the home page.</p>
  `;
  return container;
}