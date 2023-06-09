const aboutUs = document.querySelector('.about-us-project-header span');
const statisticHead = document.querySelector('.statistic-header span');
const getTested = document.querySelector('.get-tested-header span');
const recomendHead = document.querySelector('.recomendation-header span');

const statisticproj = document.querySelector('.statistic-project');
const aboutus = document.querySelector('.about-our-project-description');
const jointest = document.querySelector('.join-test-description');
const recomend = document.querySelector('.recomendate-header');


const getCoordinate = (elem) => {
    const elems = elem.getBoundingClientRect();

    window.scrollBy({
        top: elems.top - 200,
        behavior: 'smooth'
    });
}

console.log(statisticproj.getBoundingClientRect());


aboutUs.addEventListener('click', () => {
    getCoordinate(aboutus);
});

statisticHead.addEventListener('click', () => {
    getCoordinate(statisticproj);
});

getTested.addEventListener('click', () => {
    getCoordinate(jointest);
});

recomendHead.addEventListener('click', () => {
    getCoordinate(recomend);
});