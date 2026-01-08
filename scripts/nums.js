async function loadNums() {
    try {
        let arr = [];
        while (arr.length < 6) {
            let r = Math.floor(Math.random() * 45) + 1;
            if (arr.indexOf(r) === -1) { arr.push(r); }
        }
        arr.sort();
        const randomNums = `${arr.join(' ').toString()}`;
        document.querySelector('.luckyNumbers').textContent = randomNums;
    } catch (error) {
        console.error('Error loading nums:', error);
        document.querySelector('.luckyNumbers').textContent = 'Nums is coming...';
    }
}

document.addEventListener('DOMContentLoaded', loadNums);