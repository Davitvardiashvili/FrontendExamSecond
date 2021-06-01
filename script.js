let header = document.createElement('header');
header.setAttribute('id','header')

let firstDiv = document.createElement('div');
firstDiv.setAttribute('class','navbar');
firstDiv.setAttribute('id','navbar');

let secondDiv = document.createElement('div');
secondDiv.setAttribute('class','logo');
secondDiv.textContent = 'LOGO';
secondDiv.style.color = '#FA6980';
secondDiv.style.fontFamily = 'Helvetica';
secondDiv.style.fontSize = '13px';
secondDiv.style.fontWeight = 'bold';

let thirdDiv = document.createElement('div');
thirdDiv.setAttribute('class','navbar-links');
thirdDiv.setAttribute('id','links');

let ulElement = document.createElement('ul');
ulElement.setAttribute('id','ula')

let liElement1 = document.createElement('li');
liElement1.setAttribute('class','nav-li');
liElement1.textContent = 'HOME';
liElement1.style.opacity = '100%';

let liElement2 = document.createElement('li');
liElement2.setAttribute('class','nav-li');
liElement2.textContent = 'DISCOVERY';

let liElement3 = document.createElement('li');
liElement3.setAttribute('class','nav-li');
liElement3.textContent = 'PHOTOS';

let liElement4 = document.createElement('li');
liElement4.setAttribute('class','nav-li');
liElement4.textContent = 'CONTACT';

let image = document.createElement('img');
image.setAttribute('src','img/christopher-campbell-28567-unsplash.svg');
image.setAttribute('id','userphoto');



document.body.appendChild(header);
document.getElementById('header').appendChild(firstDiv);
document.getElementById('navbar').appendChild(secondDiv);
document.getElementById('navbar').appendChild(thirdDiv);
document.getElementById('links').appendChild(ulElement);
document.getElementById('ula').appendChild(liElement1);
document.getElementById('ula').appendChild(liElement2);
document.getElementById('ula').appendChild(liElement3);
document.getElementById('ula').appendChild(liElement4);
document.getElementById('ula').appendChild(image);


let satauri = document.createElement('div');
satauri.textContent = 'TRENDING';
satauri.setAttribute('id','trending_satauri');

let block_section = document.createElement('div');
block_section.setAttribute('id','block_section');
block_section.setAttribute('class','main-block-section');

let first_block = document.createElement('div');
first_block.setAttribute('id','first_block');
first_block.setAttribute('class','boxes');

let second_block = document.createElement('div');
second_block.setAttribute('id','second_block');
second_block.setAttribute('class','boxes');

let third_block = document.createElement('div');
third_block.setAttribute('id','third_block');
third_block.setAttribute('class','boxes');



let img1 = document.createElement('img');
img1.setAttribute('src','img/1.jpg');

let img2 = document.createElement('img');
img2.setAttribute('src','img/2.jpg');

let img3 = document.createElement('img');
img3.setAttribute('src','img/3.jpg');


let inner1_text1 = document.createElement('span');
inner1_text1.textContent = 'Dolore magna aliqua';
inner1_text1.setAttribute('class','inner_header');

let inner2_text1 = document.createElement('span');
inner2_text1.textContent = 'Morbi eleifend a libero';
inner2_text1.setAttribute('class','inner_header');

let inner3_text1 = document.createElement('span');
inner3_text1.textContent = 'Morbi eleifend a libero';
inner3_text1.setAttribute('class','inner_header');


let inner1_text2 = document.createElement('p');
inner1_text2.textContent = 'Lorem ipsum dolor sit amet, ipsum labitur \r\nlucilius mel id, ad has appareat.';
inner1_text2.setAttribute('class','inner_text');
let inner1_div = document.createElement('div');
inner1_div.setAttribute('class','inner_div');
inner1_div.setAttribute('id','inner1_div');
let inner1_img = document.createElement('img');
inner1_img.setAttribute('src','img/time.svg')
let inner1_div_text = document.createElement('p');
inner1_div_text.textContent = '2m ago';
inner1_div_text.setAttribute('class','time');



let inner2_text2 = document.createElement('p');
inner2_text2.textContent = 'Lorem ipsum dolor sit amet, ipsum labitur \r\nlucilius mel id, ad has appareat.';
inner2_text2.setAttribute('class','inner_text');
let inner2_div = document.createElement('div');
inner2_div.setAttribute('class','inner_div');
inner2_div.setAttribute('id','inner2_div');
let inner2_img = document.createElement('img');
inner2_img.setAttribute('src','img/time.svg')
let inner2_div_text = document.createElement('p');
inner2_div_text.textContent = '1h ago';
inner2_div_text.setAttribute('class','time');


let inner3_text2 = document.createElement('p');
inner3_text2.textContent = 'Lorem ipsum dolor sit amet, ipsum labitur \r\nlucilius mel id, ad has appareat.';
inner3_text2.setAttribute('class','inner_text');
let inner3_div = document.createElement('div');
inner3_div.setAttribute('class','inner_div');
inner3_div.setAttribute('id','inner3_div');
let inner3_img = document.createElement('img');
inner3_img.setAttribute('src','img/time.svg')
let inner3_div_text = document.createElement('p');
inner3_div_text.textContent = '3h ago';
inner3_div_text.setAttribute('class','time');




document.body.appendChild(satauri);
document.body.appendChild(block_section);
document.getElementById('block_section').appendChild(first_block);
document.getElementById('first_block').appendChild(img1);
document.getElementById('block_section').appendChild(second_block);
document.getElementById('second_block').appendChild(img2);
document.getElementById('block_section').appendChild(third_block);
document.getElementById('third_block').appendChild(img3);

document.getElementById('first_block').appendChild(inner1_text1);
document.getElementById('second_block').appendChild(inner2_text1);
document.getElementById('third_block').appendChild(inner3_text1);

document.getElementById('first_block').appendChild(inner1_text2);
document.getElementById('first_block').appendChild(inner1_div);
document.getElementById('inner1_div').appendChild(inner1_img);
document.getElementById('inner1_div').appendChild(inner1_div_text);

document.getElementById('second_block').appendChild(inner2_text2);
document.getElementById('second_block').appendChild(inner2_div);
document.getElementById('inner2_div').appendChild(inner2_img);
document.getElementById('inner2_div').appendChild(inner2_div_text);

document.getElementById('third_block').appendChild(inner3_text2);
document.getElementById('third_block').appendChild(inner3_div);
document.getElementById('inner3_div').appendChild(inner3_img);
document.getElementById('inner3_div').appendChild(inner3_div_text);



