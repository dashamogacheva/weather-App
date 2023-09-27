const tabs = document.querySelectorAll('.btn');
const allContent = document.querySelectorAll('.screen');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');
        allContent.forEach(content => {
            content.classList.remove('active');
        });
        allContent[index].classList.add('active');
    })
})