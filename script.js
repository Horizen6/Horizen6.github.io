document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal-output');
    const entries = [
        'Welcome to the Retro Terminal',
        '---------------------------',
        'Entry 1: System boot successful. Date: 1985-01-01',
        'Entry 2: User logged in as \'admin\'',
        'Entry 3: Running diagnostic... All systems nominal.',
        'Entry 4: Awaiting input...',
        '> _'
    ];

    let currentLine = 0;
    let currentChar = 0;

    function typeWriter() {
        if (currentLine < entries.length) {
            if (currentChar < entries[currentLine].length) {
                terminal.textContent += entries[currentLine].charAt(currentChar);
                currentChar++;
                setTimeout(typeWriter, 50);
            } else {
                terminal.textContent += '\n';
                currentLine++;
                currentChar = 0;
                setTimeout(typeWriter, 200);
            }
        }
    }

    typeWriter();
});
