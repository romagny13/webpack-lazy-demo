import { A } from './a';

// lazy
const resolveB = cb => require.ensure([], (require) => cb(require('./b')));

const a = new A();

document.getElementById('b').addEventListener('click', () => {

    // lazy loading (look at the browser's network tab to see the bundle loaded on demand)
    resolveB((result) => {
        const b = new result.B();
    });

});
