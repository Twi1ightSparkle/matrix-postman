function copy(text, info = false) {
    if (info === 'room') {
        text = encodeURIComponent(text);
        text = 'https://example.com/matrixinfo/room=' + text;
    }
    else if (info == 'user') {
        text = encodeURIComponent(text);
        text = 'https://example.com/matrixinfo/user=' + text;
    }
    navigator.clipboard.writeText(text)
}

function save(text, destination) {
    pm.environment.set(destination, text);
}
