
//Mouse Hover Leaning Text

const boxes = document.querySelectorAll('.leaning-box');

document.addEventListener('mousemove', (e) => {
  boxes.forEach(box => {
    const rect = box.getBoundingClientRect();
    const boxCenterX = rect.left + rect.width / 2;
    const boxCenterY = rect.top + rect.height / 2;

    const deltaX = e.clientX - boxCenterX;
    const deltaY = e.clientY - boxCenterY;

    const maxMove = 15;
    const moveX = Math.max(-maxMove, Math.min(maxMove, -deltaX / 20));
    const moveY = Math.max(-maxMove, Math.min(maxMove, -deltaY / 20));

    box.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});

document.addEventListener('mouseleave', () => {
  boxes.forEach(box => {
    box.style.transform = `translate(0, 0)`;
  });
});


//Carousel Works

function cloneCarouselItems(carouselId) {
  const track = document.querySelector(`#${carouselId} .carousel-track`);
  const items = Array.from(track.children);

  // Only clone if not already cloned
  if (track.children.length === items.length) {
    items.forEach(item => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });
  }
}

// Initialize both carousels
cloneCarouselItems('carousel-left');
cloneCarouselItems('carousel-right');

const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
	//settings (optional). see API
});