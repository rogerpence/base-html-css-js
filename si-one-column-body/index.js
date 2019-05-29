const assignOneTimeEventHandler = function (target, eventName, fn, delay = 0) {
    // A delay of 250ms or so may be necessary when working with dynamically-added
    // DOM elements.
    const eventHandler = (event) => {
        if (fn && typeof fn === 'function') {
            setTimeout(() => {
                fn(target);
            }, delay)
        }
        target.removeEventListener(eventName, eventHandler);
    }

    target.addEventListener(eventName, eventHandler);
}

const actions = {
    searchJorge: function(e) {
        const navbar = document.getElementById('secondary-nav');        
        navbar.classList.toggle('expanded');

        document.getElementById('up-down-icon').classList.toggle('rotate180')

        if (navbar.classList.contains('expanded')) {
            document.getElementById('customer-search-value').focus();
        }            
    }
}

camelize = function camelize(str) {
    return str.replace(/\W+(.)/g, function (match, chr) {
        return chr.toUpperCase();
    });
}

const actionButtons = Array.from(document.querySelectorAll('.action-button'));
actionButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const methodName = camelize(button.id);
        actions[methodName](e);
    });

})