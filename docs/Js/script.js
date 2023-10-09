const iconModeElement = document.getElementById('iconMode');
const modeDarkLightElement = document.getElementById('modeDarkLight');
const locationElement = document.getElementById('location');
const headerElement = document.getElementById('header');
const adresseTextElement = document.getElementById('adresse');
const phoneElement = document.getElementById('phone');
const phoneNumberElement = document.getElementById('phoneNumber');
const menuElement = document.getElementById('menu-praxis');
const backXElement = document.getElementById('backX');
const dropdownElement = document.getElementById('dropdown');
const praxisLinkElement = document.getElementById('diePraxis');
const praxisContentElement = document.getElementById('praxisContent');
const headerTitleElement = document.getElementById('header__title');
const optionContainerleElement = document.getElementById('optionContainer');
const leistungenLinkElement = document.getElementById('leistungenLink');
const leistungenBlockElement = document.getElementById('leistungenBlock');
const readMore1Element = document.getElementById('readMoreClick1');
const moreContent1Element = document.getElementById('moreContent1');
const readMore2Element = document.getElementById('readMoreClick2');
const moreContent2Element = document.getElementById('moreContent2');
const readMore3Element = document.getElementById('readMoreClick3');
const moreContent3Element = document.getElementById('moreContent3');
const readMore4Element = document.getElementById('readMoreClick4');
const moreContent4Element = document.getElementById('moreContent4');
const headerAdreNumElement = document.getElementById('header__adreNum');
const praxisTeamElement = document.getElementById('praxisTeam');
const praxisTeamLinkElement = document.getElementById('praxisTeamLink');


const iconModeDarkLight = () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    modeDarkLightElement.textContent = 'Light mode'
  } else {
    modeDarkLightElement.textContent = 'Dark mode'
  }
};


const dropdownMenu = () => {
  dropdownElement.style.display = 'block';
  headerTitleElement.textContent = ''
};

const leistungenOptions = () => {
  optionContainerleElement.style.display = 'block'
};
const praxisOption = () => {
  praxisContentElement.style.display = 'block'
  headerAdreNumElement.style.display = 'none'
};

const praxisTeam = () => {
  praxisTeamElement.style.display = 'block'
  headerAdreNumElement.style.display = 'none'
}


const dropdownWithoutMenu = () => {
  dropdownElement.style.display = 'none';
  headerTitleElement.textContent = 'Praxis Dr. med. Univ. Graz Müller'
};

const locationText = (e) => {
  adresseTextElement.textContent = 'Müllerstraße 10 | 48529 | Nordhorn'
  adresseTextElement.classList.remove('disabled');
}

const readMore1 = () => {
  if (moreContent1Element.style.display === 'none' || moreContent1Element.style.display === '') {
    moreContent1Element.style.display = 'block';
    readMore1Element.textContent = 'Weniger lesen';
  } else {
    moreContent1Element.style.display = 'none';
    readMore1Element.textContent = 'Mehr lesen';
  }
};

const readMore2 = () => {
  if (moreContent2Element.style.display === 'none' || moreContent2Element.style.display === '') {
    moreContent2Element.style.display = 'block';
    readMore2Element.textContent = 'Weniger lesen';
  } else {
    moreContent2Element.style.display = 'none';
    readMore2Element.textContent = 'Mehr lesen';
  }
};
const readMore3 = () => {
  if (moreContent3Element.style.display === 'none' || moreContent3Element.style.display === '') {
    moreContent3Element.style.display = 'block';
    readMore3Element.textContent = 'Weniger lesen';
  } else {
    moreContent3Element.style.display = 'none';
    readMore3Element.textContent = 'Mehr lesen';
  }
};
const readMore4 = () => {
  if (moreContent4Element.style.display === 'none' || moreContent4Element.style.display === '') {
    moreContent4Element.style.display = 'block';
    readMore4Element.textContent = 'Weniger lesen';
  } else {
    moreContent4Element.style.display = 'none';
    readMore4Element.textContent = 'Mehr lesen';
  }
};

const phoneText = () => {
  adresseTextElement.textContent = '12345 12345 | Fax | 12345 12345'
  adresseTextElement.classList.remove('disabled');
}

document.addEventListener('click', (e) => {
  if (e.target !== locationElement && e.target !== phoneElement) {
    adresseTextElement.classList.add('disabled');
  }
  if (e.target !== leistungenLinkElement) {
    optionContainerleElement.style.display = 'none'
  }
  if (e.target === readMore1Element) {
    optionContainerleElement.style.display = 'block'
  }
  if (e.target === readMore2Element) {
    optionContainerleElement.style.display = 'block'
  }
  if (e.target === readMore3Element) {
    optionContainerleElement.style.display = 'block'
  }
  if (e.target === readMore4Element) {
    optionContainerleElement.style.display = 'block'
  }
  if (e.target !== praxisLinkElement) {
    praxisContentElement.style.display = 'none'
    headerAdreNumElement.style.display = 'block'
  }
  if (e.target === praxisTeamLinkElement) {
  headerAdreNumElement.style.display = 'none'
  } else if (e.target !== praxisTeamLinkElement) {
    praxisTeamElement.style.display = 'none'
  }
})

leistungenLinkElement.addEventListener('click', leistungenOptions)
iconModeElement.addEventListener('click', iconModeDarkLight);
locationElement.addEventListener('click', locationText);
phoneElement.addEventListener('click', phoneText);
menuElement.addEventListener('click', dropdownMenu);
backXElement.addEventListener('click', dropdownWithoutMenu);
readMore1Element.addEventListener('click', readMore1);
readMore2Element.addEventListener('click', readMore2);
readMore3Element.addEventListener('click', readMore3);
readMore4Element.addEventListener('click', readMore4);
praxisLinkElement.addEventListener('click', praxisOption);
praxisTeamLinkElement.addEventListener('click', praxisTeam);