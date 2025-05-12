import './image-grid.sass'
import { setElement } from "../js/utils";
import projectImage from './project-image';
import MiniMasonry from 'minimasonry';

let masonry;
let resizeTimeout;

export default function imageGrid(imageArray) {
  const cname = 'image-container masonry';
  let imageContainer = setElement("section", {
    class: `${cname}`
  });

  // Append all images to the container
  imageArray.map(image => imageContainer.append(projectImage(image)));

  // Wait for container to render, then initialize masonry
  setTimeout(() => {
    initMasonry();
    window.addEventListener("resize", debounceLayout, { passive: true });
  }, 50);

  return imageContainer;
}

function initMasonry() {
  const targetContainer = ".masonry";
  const containerEl = document.querySelector(targetContainer);
  if (!containerEl) return;

  const images = containerEl.querySelectorAll(".project-image__wrapper");
  const totalImages = images.length;

  const minWidth = 320; // base width for images
  const gutterY = 16;
  const gutterX = 16;

  const containerWidth = containerEl.offsetWidth;

  // Calculate maximum possible columns
  const maxColumns = Math.floor(containerWidth / (minWidth + gutterX));

  // Determine number of columns (no more than total images)
  let columns = Math.min(maxColumns, totalImages);

  if (columns < 1) columns = 1;

  // Add/remove the class based on number of columns
  if (columns === 1) {
    images.forEach(item => item.classList.add('one-column'));
  } else {
    images.forEach(item => item.classList.remove('one-column'));
  }

  // Initialize masonry
  masonry = new MiniMasonry({
    container: targetContainer,
    baseWidth: minWidth,
    gutterY: gutterY,
    gutterX: gutterX,
    surroundingGutter: false,
    minify: true
  });
}

function debounceLayout() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    initMasonry();
  }, 50); // Adjust debounce delay as necessary
}