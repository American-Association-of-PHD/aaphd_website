/* AAPHD — Iteration 05 — vanilla JS
   - Mobile nav toggle (a11y aware)
   - Dropdown chevrons (click + keyboard; CSS handles desktop hover)
*/
(() => {
  document.documentElement.classList.remove('no-js');

  const header = document.querySelector('[data-nav]');
  const toggle = document.querySelector('[data-nav-toggle]');

  // ---- Mobile primary-nav toggle ----
  if (header && toggle) {
    toggle.addEventListener('click', () => {
      const open = header.dataset.navOpen === 'true';
      header.dataset.navOpen = String(!open);
      toggle.setAttribute('aria-expanded', String(!open));
    });
  }

  // ---- Dropdown toggles (chevrons + whole-row tap on mobile) ----
  const dropdowns = document.querySelectorAll('.has-dropdown');
  const isMobile = () => window.matchMedia('(max-width: 1099px)').matches;

  const toggleDropdown = (li, e) => {
    const tog = li.querySelector('.dropdown-toggle');
    if (e) { e.preventDefault(); e.stopPropagation(); }
    const open = li.dataset.open === 'true';
    // Close all other open dropdowns (accordion behavior)
    dropdowns.forEach(other => {
      if (other !== li) {
        other.dataset.open = 'false';
        const t = other.querySelector('.dropdown-toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      }
    });
    li.dataset.open = String(!open);
    if (tog) tog.setAttribute('aria-expanded', String(!open));
  };

  dropdowns.forEach(li => {
    const tog = li.querySelector('.dropdown-toggle');
    const topLink = li.querySelector(':scope > a');

    // Chevron button always toggles (mobile and desktop)
    if (tog) {
      tog.addEventListener('click', (e) => toggleDropdown(li, e));
    }

    // Mobile only: tapping the top-level link should also expand the submenu
    // instead of navigating to the section page. Desktop still uses hover
    // (via CSS) and direct navigation on click.
    if (topLink) {
      topLink.addEventListener('click', (e) => {
        if (isMobile()) {
          toggleDropdown(li, e);
        }
      });
    }
  });

  // Click outside closes any open dropdown
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-dropdown')) {
      dropdowns.forEach(li => {
        if (li.dataset.open === 'true') {
          li.dataset.open = 'false';
          const t = li.querySelector('.dropdown-toggle');
          if (t) t.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });

  // ESC closes any open dropdown first; if none open, closes mobile nav
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    let didClose = false;
    dropdowns.forEach(li => {
      if (li.dataset.open === 'true') {
        li.dataset.open = 'false';
        const t = li.querySelector('.dropdown-toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
        didClose = true;
      }
    });
    if (!didClose && header && header.dataset.navOpen === 'true') {
      header.dataset.navOpen = 'false';
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    }
  });

  // ---- Email obfuscation: assemble mailto on the client ----
  // Markup uses data-name + data-domain so the literal address never appears
  // in the rendered HTML in one piece. After page load we wire a real mailto:.
  document.querySelectorAll('a.email[data-name][data-domain]').forEach(a => {
    const name = a.dataset.name;
    const domain = a.dataset.domain;
    a.href = 'mailto:' + name + '@' + domain;
  });
})();
