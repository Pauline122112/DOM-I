
const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//Updated Title
const domTitle = document.querySelector('title')
console.log(domTitle)
domTitle.textContent
domTitle.textContent = 'Great Idea!'

//Updating script to header
const removeLink = document.querySelector('script, src')
console.log(removeLink)
removeLink.parentNode.removeChild(removeLink)
console.log(removeLink)

//Updating Anchor Tags
const indxLink = document.querySelector('a')
indxLink.setAttribute('href', '#')
indxLink.textContent = 'Services'
 console.log(indxLink)

 const oneLink = document.querySelectorAll('a')[1]
oneLink.setAttribute('href', '#')
oneLink.textContent = 'Product'
console.log(oneLink)

 const twoLink = document.querySelectorAll('a')[2]
twoLink.setAttribute('href', '#')
twoLink.textContent = 'Vision'
console.log(twoLink)

 const threeLink = document.querySelectorAll('a')[3]
threeLink.setAttribute('href', '#')
threeLink.textContent = 'Features'
console.log(threeLink)

 const fourLink = document.querySelectorAll('a')[4]
fourLink.setAttribute('href', '#')
fourLink.textContent = 'About'
console.log(fourLink)

 const fiveLink = document.querySelectorAll('a')[5]
fiveLink.setAttribute('href', '#')
fiveLink.textContent = 'Contact'
console.log(fiveLink)

//Updating cta section

const headCta = document.querySelector('h1')
headCta.textContent = 'DOM Is Awesome'

console.log(headCta)


//Updating the cta button
const butCta = document.querySelector('button')
butCta.textContent = 'Get Started'
console.log(butCta)

//Update cta Image
const firstImage = document.querySelector('#cta-img')
firstImage.src = 'img/header-img.png'
console.log(firstImage)

//Update main-content
const featuresTitle = document.querySelectorAll(' text-content, h4')[0]
featuresTitle.textContent = 'Features'
console.log(featuresTitle)

const paraContent = document.querySelectorAll('text-content, p')[0]
paraContent.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
console.log(paraContent)

//About Content
const aboutTitle = document.querySelectorAll('.text-content, h4')[3]
aboutTitle.textContent = 'About'
console.log(aboutTitle)

const aboutContent = document.querySelectorAll('text.content, p')[1]
aboutContent.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
console.log(aboutContent)

//Updating second image content
const secondImage = document.querySelector('#middle-img')
secondImage.src = 'img/mid-page-accent.jpg'
console.log(secondImage)


//Services content- Bottom class
const serviceTitle = document.querySelectorAll('.bottom-content, .text-content, h4')[6]
serviceTitle.textContent = 'Services'
console.log(serviceTitle)

const serContent = document.querySelectorAll('p')[2]
serContent.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
console.log(serContent)

//Product Content- Bottom Class
const prodTent = document.querySelectorAll('h4')[3]
prodTent.textContent = 'Product'
console.log(prodTent)

const prodText = document.querySelectorAll('p')[3]
prodText.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis'
console.log(prodText)

//Vision Content - Bottom Class
const visionary = document.querySelectorAll('h4')[4]
visionary.textContent = 'Vision'

const visText = document.querySelectorAll('p')[4]
visText.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//Section contact update
const contactTitle = document.querySelectorAll('h4')[5]
contactTitle.textContent = 'Contact'
console.log(contactTitle)

const locate = document.querySelectorAll('p')[5]
const lineBreak = document.createElement('br')
console.log(locate)
locate.appendChild(lineBreak)

