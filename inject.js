//https://gist.github.com/nok/a98c7c5ce0d0803b42da50c4b901ef84

function injectScript(file_path, tag) {
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
}
injectScript(chrome.extension.getURL('main.js'), 'body');