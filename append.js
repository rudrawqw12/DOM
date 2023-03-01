const places = document.getElementById('places-list');
const li =document.createElement('li');
li.innerText = "hello there!";
places.appendChild(li);

const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h1 =document.createElement('h1');
h1.innerText = 'My FOod List';
section.appendChild(h1);

const ul =document.createElement('ul');
const li1 =document.createElement('li');
li1.innerText = 'biriani';
ul.appendChild(li1);

const li2 =document.createElement('li');
li2.innerText = 'burhani';
ul.appendChild(li2);

const li3 =document.createElement('li');
li3.innerText = 'kabab';
ul.appendChild(li3);

section.appendChild(ul);
mainContainer.appendChild(section);


// new ways of create section //

const sectionDress =document.createElement('section');
sectionDress.innerHTML=`
<h1>My Dress Section</h1>
 <ul>
    <li>t shirt</li>
    <li>lungi</li>
</ul>
`

mainContainer.appendChild(sectionDress);




