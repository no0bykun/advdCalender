document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    if (!grid) return;

    const boxes = Array.from(grid.querySelectorAll('.box'));
    boxes.forEach(div => {
        const btn = document.createElement('button');
        btn.type = 'submit';
        btn.className = div.className;
        btn.innerHTML = div.innerHTML;
        btn.setAttribute('aria-pressed', 'false');

        btn.addEventListener('click', () => {
            const opened = btn.classList.toggle('opened');
            btn.setAttribute('aria-pressed', opened ? 'true' : 'false');

            alert('Box ' + btn.textContent.trim() + (opened ? ' opened' : ' closed'));
        });

        div.replaceWith(btn);
    });
});