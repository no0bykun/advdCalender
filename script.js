document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    if (!grid) return;

    const boxes = Array.from(grid.querySelectorAll('.box'));
    const storageKey = 'advent-opened';
    const openedSet = new Set(JSON.parse(localStorage.getItem(storageKey) || '[]'));

    boxes.forEach((div, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button'; // kein submit, verhindert unerwünschtes Abschicken von Formularen
        btn.className = div.className;
        btn.innerHTML = div.innerHTML;
        btn.setAttribute('aria-pressed', 'false');
        btn.dataset.index = idx;

        // Zustand wiederherstellen (falls bereits gespeichert oder HTML schon 'opened' hatte)
        if (openedSet.has(String(idx)) || div.classList.contains('opened')) {
            btn.classList.add('opened');
            btn.setAttribute('aria-pressed', 'true');
        }

        btn.addEventListener('click', () => {
            const opened = btn.classList.toggle('opened');
            btn.setAttribute('aria-pressed', opened ? 'true' : 'false');

            if (opened) openedSet.add(String(idx));
            else openedSet.delete(String(idx));

            localStorage.setItem(storageKey, JSON.stringify(Array.from(openedSet)));
        });

        div.replaceWith(btn);
    });
});