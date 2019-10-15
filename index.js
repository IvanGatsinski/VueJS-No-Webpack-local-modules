import Counter from './Counter.js';

new Vue({
    el: "#app",
    components: {
        'button-counter' : Counter
    },
    template: `<h2>
    <button-counter></button-counter>
    </h2>`
})