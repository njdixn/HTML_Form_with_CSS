        const resultsList = document.getElementById('results');
        new URLSearchParams(window.location.search).forEach((name, password) => {
            resultsList.append(` ${name}: ${password}`);
            resultsList.append(document.createElement('br'));
        });