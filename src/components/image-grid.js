import './image-grid.sass'
import { setElement } from "../js/utils";
import imageItem from './image-item.js';
import MiniMasonry from '../libs/masonry.min.js';

let masonry;
let resizeTimeout;

export default function imageGrid(imageArray) {
  const cname = 'image-container masonry';
  let imageContainer = setElement("section", {
    class: `${cname}`
  });

  // Append all images to the container
  imageArray.map(image => imageContainer.append(imageItem(image)));

  // Wait for container to render, then initialize masonry
  setTimeout(() => {
    initMasonry();
    window.addEventListener("resize", debounceLayout, { passive: true });

    // Listen for imageLoaded events to re-layout
    imageContainer.addEventListener("imageLoaded", () => {
      if (masonry) {
        masonry.layout();
      }
    });
  }, 50);

  return imageContainer;
}

function initMasonry() {
  const targetContainer = ".masonry";
  const containerEl = document.querySelector(targetContainer);
  if (!containerEl) return;

  // Destroy existing masonry instance if it exists
  if (masonry) {
    masonry.destroy();
  }

  // Initialize MiniMasonry
  masonry = new MiniMasonry({
    container: targetContainer,
    baseWidth: 320,
    gutterX: 16,
    gutterY: 16,
    ultimateGutter: 16,
    surroundingGutter: false,
    minify: true
  });
}

function debounceLayout() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    initMasonry();
  }, 50);
}