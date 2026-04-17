/* ============================================================
   Additive Creature Blob Effect
   DOM-based particles with additive blending and staggered
   cursor-following animation using AnimeJS.
   ============================================================ */

const { animate, createTimeline, createTimer, stagger, utils } = anime;

(function () {
const creatureEl = document.querySelector('#creature');
if (!creatureEl) return;

const wrapper = document.querySelector('#creature-wrapper');
const viewport = { w: wrapper.offsetWidth * .5, h: wrapper.offsetHeight * .5 };
const cursor = { x: 0, y: 0 };
const rows = 13;
const grid = [rows, rows];
const from = 'center';
const scaleStagger = stagger([2, 5], { ease: 'inQuad', grid, from });
const opacityStagger = stagger([1, .1], { grid, from });

for (let i = 0; i < (rows * rows); i++) {
  creatureEl.appendChild(document.createElement('div'));
}

const particuleEls = creatureEl.querySelectorAll('div');

utils.set(creatureEl, {
  width: rows * 10 + 'em',
  height: rows * 10 + 'em'
});

utils.set(particuleEls, {
  x: 0,
  y: 0,
  scale: scaleStagger,
  opacity: opacityStagger,
  background: stagger([80, 20], { grid, from,
    modifier: v => `hsl(20, 90%, ${v}%)`,
  }),
  boxShadow: stagger([8, 1], { grid, from,
    modifier: v => `0px 0px ${utils.round(v, 0)}em 0px var(--orange)`,
  }),
  zIndex: stagger([rows * rows, 1], { grid, from, modifier: utils.round(0) }),
});

const pulse = () => {
  animate(particuleEls, {
    keyframes: [
      {
        scale: 5,
        opacity: 1,
        delay: stagger(90, { start: 1650, grid, from }),
        duration: 150,
      }, {
        scale: scaleStagger,
        opacity: opacityStagger,
        ease: 'inOutQuad',
        duration: 600
      }
    ],
  });
}

const mainLoop = createTimer({
  frameRate: 15,
  onUpdate: () => {
    animate(particuleEls, {
      x: cursor.x,
      y: cursor.y,
      delay: stagger(40, { grid, from }),
      duration: stagger(120, { start: 750, ease: 'inQuad', grid, from }),
      ease: 'inOut',
      composition: 'blend',
    });
  }
});

const autoMove = createTimeline()
.add(cursor, {
  x: [-viewport.w * .45, viewport.w * .45],
  modifier: x => x + Math.sin(mainLoop.currentTime * .0007) * viewport.w * .5,
  duration: 3000,
  ease: 'inOutExpo',
  alternate: true,
  loop: true,
  onBegin: pulse,
  onLoop: pulse,
}, 0)
.add(cursor, {
  y: [-viewport.h * .45, viewport.h * .45],
  modifier: y => y + Math.cos(mainLoop.currentTime * .00012) * viewport.h * .5,
  duration: 1000,
  ease: 'inOutQuad',
  alternate: true,
  loop: true,
}, 0);

const manualMovementTimeout = createTimer({
  duration: 1500,
  onComplete: () => autoMove.play(),
});

const followPointer = e => {
  const rect = wrapper.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const event = e.type === 'touchmove' ? e.touches[0] : e;
  cursor.x = event.clientX - centerX;
  cursor.y = event.clientY - centerY;
  autoMove.pause();
  manualMovementTimeout.restart();
}

document.addEventListener('mousemove', followPointer);
document.addEventListener('touchmove', followPointer);

// Update viewport on resize
window.addEventListener('resize', () => {
  viewport.w = wrapper.offsetWidth * .5;
  viewport.h = wrapper.offsetHeight * .5;
});

})();
