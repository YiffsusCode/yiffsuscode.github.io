(async function () {
    const names = ['a', 'b', 'c'];
    const startApp = () => {
        const script = document.createElement('script');
        script.src = 'app.js';
        document.body.append(script);
    };
    if (location.protocol === 'file:' && Array.isArray(window.EXAMS_V2)) {
        window.EXAMS_V2_UNAVAILABLE = false;
        startApp();
        return;
    }
    try {
        const files = await Promise.all(names.map(async name => {
            const response = await fetch(`exams/${name}.json`);
            if (!response.ok) throw new Error(`Could not load exam ${name}`);
            const file = await response.json();
            if (file.version !== '2.0' || file.exam !== name.toUpperCase() || !Array.isArray(file.questions)) throw new Error(`Invalid exam ${name}`);
            return file.questions;
        }));
        window.EXAMS_V2 = files.flat();
        window.EXAMS_V2_UNAVAILABLE = false;
    } catch (error) {
        if (!Array.isArray(window.EXAMS_V2)) {
            window.EXAMS_V2 = [];
            window.EXAMS_V2_UNAVAILABLE = true;
        }
    }
    startApp();
})();
