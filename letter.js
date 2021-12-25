/* eslint-disable no-var */
var typewriter = function(element) {
    var $this = element;
    var html = $this.innerHTML;
    var progress = 0;

    $this.innerHTML = '';

    var loop = setInterval(function() {
        var current = html.substr(progress, 1);

        if (current === '<') {
            progress = html.indexOf('>', progress) + 1;
        } else {
            progress += 1;
        }

        $this.innerHTML = html.substring(0, progress) + (progress & 1 ? '_' : '');
        if (progress >= html.length) {
            clearInterval(loop);
        }
    }, 80);
};

function run() {
    function handleClick() {
        var letter = document.querySelector('.flex');
        var tree = document.querySelector('.tree');
        letter.style.display = 'flex';
        tree.style.display = 'none';

        var element = document.querySelector('.code');
        typewriter(element);

        document.body.removeEventListener('click', handleClick);
    }

    document.body.addEventListener('click', handleClick);
}

run();
