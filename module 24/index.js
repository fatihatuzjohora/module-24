console.log('hello js');

document.getElementById('shoplist').style.backgroundColor='red';
document.getElementById('shoplist').style.color='black';



const sections=document.querySelectorAll('section');
for (const section of sections) {
    section.style.border='2px solid blue';
    section.style.marginBottom='5px';
    section.style.backgroundColor='lightgray';
    section.style.borderRadius='15px';
    section.style.padding=('15px');
}
const section1Container=document.getElementById('section1Container');

section1Container.style.backgroundColor=('yellow');


const shortli= document.getElementById('shortli')
const li=document.createElement('li');
li.innerText='Story Book';
shortli.appendChild(li);

// where to add
const maimElement=document.getElementById('maimElement') //kothai add korbo ta bole dlm akhane mainelement a add korchi

//what to be add
const section=document.createElement('section'); //kake add korbo ta dlm akhane section ke add korchi
const h1=document.createElement('h1');  //kake add korbo ta dlm akhane h1 ke add korchi
h1.innerText='Food Blog'; // h1 ar moodhe kicho likhci ti innertext dea likhlm.
section.appendChild(h1); // abr connection dilte hobe aglo kotai bosbe, tiii aglo section ar moddhe jbe

const ul=document.createElement('ul');
const li1= document.createElement('li');
li1.innerText='fuchka';
ul.appendChild(li1);
section.appendChild(ul);

const li2= document.createElement('li');
li2.innerText='Belpuri';
ul.appendChild(li2);
section.appendChild(ul);

maimElement.appendChild(section);

// others way set inner directly
const sectionDress=document.createElement('section');
sectionDress.innerHTML=`
<h1> My Dress</h1>
<ul> 
<li> Shirt </li>
<li> T-Shirt </li>
<li> Pant </li>
</ul>
`
maimElement.appendChild(sectionDress);

