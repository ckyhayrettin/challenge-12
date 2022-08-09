const pruduct = document.querySelector('#Pruduct');
const pruducts = document.querySelector('.pruducts')
const pruductAngle = document.querySelector('.pruduct-angle');
const pruductAngles = document.querySelector('.pruduct-angels');
const company = document.querySelector('#company');
const companys = document.querySelector('.companys');
const companyAngle = document.querySelector('.company-angle');
const companyAngles = document.querySelector('.company-angels');
const connect = document.querySelector('#connect');
const connects = document.querySelector('.connects');
const connecttAngle = document.querySelector('.connect-angle');
const connectAngles = document.querySelector('.connect-angels');
const bars = document.querySelector('#bars');
const bottom = document.querySelector('#bottom')

const angles = document.querySelectorAll('.angles');

pruduct.addEventListener('mouseenter', function () {

    pruducts.classList.add('pruducts-show')
    pruduct.classList.add('textborder')
    pruductAngle.classList.add('angel-off')
    pruductAngles.classList.add('angels-on')
})

pruducts.addEventListener('mouseleave', function () {

    pruducts.classList.remove('pruducts-show')
    pruduct.classList.remove('textborder')
    pruductAngle.classList.remove('angel-off')
    pruductAngles.classList.remove('angels-on')
})

company.addEventListener('mouseenter', function () {

    companys.classList.add('companys-show')
    company.classList.add('textborder')
    companyAngle.classList.add('angel-off')
    companyAngles.classList.add('angels-on')
})

companys.addEventListener('mouseleave', function () {

    companys.classList.remove('companys-show')
    company.classList.remove('textborder')
    companyAngle.classList.remove('angel-off')
    companyAngles.classList.remove('angels-on')
})

connect.addEventListener('mouseenter', function () {

    connects.classList.add('connects-show')
    connect.classList.add('textborder')
    connecttAngle.classList.add('angel-off')
    connectAngles.classList.add('angels-on')
})

connects.addEventListener('mouseleave', function () {

    connects.classList.remove('connects-show')
    connect.classList.remove('textborder')
    connecttAngle.classList.remove('angel-off')
    connectAngles.classList.remove('angels-on')
})

bars.addEventListener('click', function () {
    bottom.classList.add('slide-menu')
})

bars.addEventListener('dblclick', function () {
    bottom.classList.remove('slide-menu')
})

