(() => {
    var t = {
            897: (t, e) => {
                e.isValid = () => Math.random() >= 0.5;
            },
        },
        e = {};
    function n(r) {
        var a = e[r];
        if (void 0 !== a) return a.exports;
        var g = (e[r] = { exports: {} });
        return t[r](g, g.exports, n), g.exports;
    }
    (() => {
        try {
            const { isValid: t } = n(897),
                e = document.getElementById('body'),
                r = document.getElementById('gamerTagInput'),
                a = document.getElementById('gamerTagCheckButton'),
                g = document.getElementById('resetButton'),
                d = document.getElementById('gamerTagFeedback'),
                i =
                    'background:linear-gradient(\n                90deg,\n                rgba(2, 0, 36, 1) 0%,\n                rgba(9, 9, 121, 1) 35%,\n                rgba(0, 212, 255, 1) 100%\n            ) !important',
                o =
                    'background:linear-gradient(\n                90deg,\n                rgba(2, 0, 36, 1) 0%,\n                rgba(11, 255, 168, 1) 35%,\n                rgba(0, 212, 0, 1) 100%\n            ) !important',
                c =
                    'background:linear-gradient(\n                90deg,\n                rgba(2, 0, 36, 1) 0%,\n                rgba(200, 9, 70, 1) 35%,\n                rgba(255, 0, 0, 1) 100%\n            ) !important';
            let s, l;
            r.addEventListener('change', (t) => {
                s = t.target.value;
            }),
                a.addEventListener('click', () => {
                    const n = t(s);
                    (l = n ? 'Gamer tag is not valid' : 'Gamer tag is valid'),
                        (d.textContent = l),
                        e.setAttribute('style', n ? o : c);
                }),
                g.addEventListener('click', () => {
                    (l = ''), (d.textContent = ''), e.setAttribute('style', i);
                });
        } catch (t) {
            console.error(JSON.stringify(t));
        }
    })();
})();
