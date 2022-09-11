const features = document.querySelector('.features');
const company = document.querySelector('.company');
const featureBtn = document.querySelector('#features-down');
const companyBtn = document.querySelector('#company-down');
const modal = document.querySelector('.modal');
const ham = document.querySelector('.show-mobile');
const close = document.querySelector('.close');
const modalFeature = document.querySelector('.feature-drop');
const modalCompany = document.querySelector('.company-drop');
const modalFeatureBtn = document.querySelector('#modal-features');
const modalCompanyBtn = document.querySelector('#modal-company');



const showFeatures = () => {
     features.classList.toggle('features-hidden');
}

featureBtn.addEventListener('click', showFeatures);

const showCompany = () => {
    company.classList.toggle('company-hidden');
}

companyBtn.addEventListener('click', showCompany);

const showModal = () => {
    modal.classList.toggle('modal-hidden');
}

ham.addEventListener('click', showModal);

close.addEventListener('click', () => {
    modal.classList.toggle('modal-hidden');
})

const showModalFeatures = () => {
    modalFeature.classList.toggle('feature-drop-hidden');
}

modalFeatureBtn.addEventListener('click', showModalFeatures);

const showModalCompany = () => {
    modalCompany.classList.toggle('company-drop-hidden');
}

modalCompanyBtn.addEventListener('click', showModalCompany);


