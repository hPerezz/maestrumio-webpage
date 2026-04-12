(function () {
  const ROWS = 11;
  const COLS = 11;
  const container = document.getElementById('physicsGrid');
  if (!container) return;

  // Build grid DOM
  for (let r = 0; r < ROWS; r++) {
    const row = document.createElement('div');
    row.className = 'pg-row';
    for (let c = 0; c < COLS; c++) {
      const cell = document.createElement('div');
      cell.className = 'pg-cell';
      cell.dataset.x = r;
      cell.dataset.y = c;
      row.appendChild(cell);
    }
    container.appendChild(row);
  }

  const rows = [...container.querySelectorAll('.pg-row')];
  const cells = [...container.querySelectorAll('.pg-cell')];

  let clicked = false;
  let reset_all = false;
  const pull_distance = 70;

  const updateCellPositions = () => {
    cells.forEach((cell) => {
      const rect = cell.getBoundingClientRect();
      cell.center_position = {
        x: (rect.left + rect.right) / 2,
        y: (rect.top + rect.bottom) / 2,
      };
    });
  };

  const handleCellClick = (e, i) => {
    if (clicked) return;
    clicked = true;

    const tl = gsap.timeline({
      onComplete: () => {
        tl.timeScale(1.3);
        tl.reverse();
      },
      onReverseComplete: () => {
        clicked = false;
        reset_all = true;
        handlePointerMove();
      },
    });

    tl.to(cells, {
      duration: 1.6,
      x: () => gsap.utils.random(-300, 300),
      y: () => gsap.utils.random(200, 600),
      rotation: () => gsap.utils.random(-180, 180),
      opacity: 0,
      ease: 'power2.in',
      stagger: {
        grid: [rows.length, rows[0].children.length],
        from: i,
        amount: 0.3,
      },
    });
  };

  const handlePointerMove = (e) => {
    if (clicked) return;

    const pointer_x = e ? e.clientX : -pull_distance;
    const pointer_y = e ? e.clientY : -pull_distance;

    cells.forEach((cell) => {
      const rect = cell.getBoundingClientRect();
      const cx = (rect.left + rect.right) / 2;
      const cy = (rect.top + rect.bottom) / 2;
      const diff_x = pointer_x - cx;
      const diff_y = pointer_y - cy;
      const distance = Math.sqrt(diff_x * diff_x + diff_y * diff_y);

      if (distance < pull_distance) {
        const percent = distance / pull_distance;
        cell.pulled = true;
        gsap.to(cell, {
          duration: 0.2,
          x: diff_x * percent,
          y: diff_y * percent,
        });
      } else {
        if (!cell.pulled) return;
        cell.pulled = false;
        gsap.to(cell, {
          duration: 1,
          x: 0,
          y: 0,
          ease: 'elastic.out(1, 0.3)',
        });
      }
    });

    if (reset_all) {
      reset_all = false;
      gsap.to(cells, {
        duration: 1,
        x: 0,
        y: 0,
        ease: 'elastic.out(1, 0.3)',
      });
    }
  };

  updateCellPositions();
  window.addEventListener('resize', updateCellPositions);
  window.addEventListener('pointermove', handlePointerMove);
  container.addEventListener('pointerleave', () => handlePointerMove());

  cells.forEach((cell, i) =>
    cell.addEventListener('pointerup', (e) => handleCellClick(e, i))
  );
})();
