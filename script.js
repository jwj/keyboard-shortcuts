function renderKeys() {
    const collection = document.getElementsByClassName("keys");

    for (let i = 0; i < collection.length; i++) {
        let cell = collection[i];
        const words = cell.textContent.trim().split(/\s+/);

        const keys = words.map(word => {
            switch (word) {
                case 'cmd':
                    return `<span class="key">⌘</span>`;
                case 'ctrl':
                    return `<span class="key">Ctrl</span>`;
                case 'shift':
                    return `<span class="key">⇧</span>`;
                case 'left':
                    return `<span class="key">←</span>`;
                case 'right':
                    return `<span class="key">→</span>`;
                case 'up':
                    return `<span class="key">↑</span>`;
                case 'down':
                    return `<span class="key">↓</span>`;
                case 'enter':
                    return `<span class="key">↵</span>`;
                case 'space':
                    return `<span class="key">˽</span>`;
                case 'backspace':
                    return `<span class="key">⌫</span>`;
            }

            if (word.length == 1 && word.match(/[a-zA-Z]/)) {
                return `<span class="key">${word.toUpperCase()}</span>`;
            }

            return `<span class="key">${word}</span>`;
        });

        cell.innerHTML = keys.join(' ');
    };
}

function buildUi(id, data, fields) {
    var root = document.getElementById(id);

    data.sections.forEach(section => {
        // create section name
        var row = document.createElement("tr");
        const s = document.createElement("td");
        s.setAttribute("colspan", "3");
        s.setAttribute("class", "section");
        s.textContent = section.name;
        row.appendChild(s);
        root.appendChild(row);

        section.keys.forEach(key => {
            row = document.createElement("tr");

            var cell = document.createElement("td")
            cell.textContent = key.name;
            row.appendChild(cell);

            fields.forEach(field => {
                const value = key[field];
                cell = document.createElement("td");

                if (!value || value.trim() === "") {
                    //cell.textContent = "&nbsp;";
                }
                else {
                    cell.setAttribute("class", "keys");
                    cell.textContent = value;
                }

                row.appendChild(cell);
            });

            root.appendChild(row);
        });

    });
}