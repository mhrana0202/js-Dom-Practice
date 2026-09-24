/*---------------------------
    getElementById part
----------------------------*/
let head1 = document.getElementById('head1');
head1.innerHTML = 'Hello Milon bhaiya';

let head2 = document.getElementById('head2');
head2.innerHTML ='Welcome to my website';

let head3 = document.getElementById('head3');
head3.innerHTML =' We are provide best products';

let head4 = document.getElementById('head4');
head4.innerHTML ='We are provide best services';



/*---------------------------
    getElementsByClassName part
----------------------------*/
let para1 = document.getElementsByClassName('para1')[0];
para1.innerHTML = 'Hello Milon bhaiya 2nd';

let para01 = document.getElementsByClassName('para01')[0];
para01.innerHTML = 'Welcome to my website 2nd';

let para001 = document.getElementsByClassName('para001')[0];
para001.innerHTML = 'We are provide best products 2nd';

let para0001 = document.getElementsByClassName('para0001') [0];
para0001.innerHTML = 'We are provide best services 2nd';





/*---------------------------
    getElementsByName part
----------------------------*/
let Ami1 = document.getElementsByName('Ami1')[0];
Ami1.innerHTML ='Hello Milon bhaiya 3rd';

let Ami01 = document.getElementsByName('Ami01')[0];
Ami01.innerHTML ='Welcome to my website 3rd';

let Ami001 = document.getElementsByName('Ami001')[0];
Ami001.innerHTML='We are provide best Product 3rd';

let Ami0001 = document.getElementsByName('Ami0001')[0];
Ami0001.innerHTML ='We are provide best Services 3rd';






/*---------------------------
    getElementsByTagName part
----------------------------*/
let H1 = document.getElementsByTagName('h1')[1];
H1.innerHTML = 'Heading one is Changed';

let H2 = document.getElementsByTagName('h2')[1];
H2.innerHTML ='Heading Two id is Changed';

let H3 = document.getElementsByTagName('h3')[1];
H3.innerHTML = 'Heading Three is Changed';

let H4 = document.getElementsByTagName('h4')[1];
H4.innerHTML = 'Heading Four is Changed';







/*---------------------------
    querySelector part
----------------------------*/
let Tumi1 = document.querySelector('.Tumi1');
Tumi1.innerHTML = 'Query One Changed';

let tumi01 = document.querySelector('.Tumi01');
tumi01.innerHTML ='Query Two Changed';

let tumi001 = document.querySelector('#Tumi001');
tumi001.innerHTML ='Query Three Changed';

let tumi0001 = document.querySelector('#Tumi0001');
tumi0001.innerHTML ='Query Four Changed';







/*---------------------------
    querySelectorAll part
----------------------------*/
let mh1 = document.querySelectorAll('.Mh1')[0];
mh1.innerHTML = 'Query All One Changed';

let mh01 = document.querySelectorAll('.Mh01')[0];
mh01.innerHTML = 'Query All Two Changed';

let mh001 = document.querySelectorAll('#Mh001')[0];
mh001.innerHTML = 'Query All Three Changed';

let mh0001 = document.querySelectorAll('#Mh0001')[0];
mh0001.innerHTML = 'Query All Four Changed';


/*-------------- End ----------------------- */



/*------------------------------------
        js Button part
-------------------------------------*/

function message(){
    document.write(' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione omnis explicabo quidem eos. Et explicabo eum voluptates magnam libero expedita veniam excepturi voluptatem voluptas cupiditate, dicta perferendis molestiae quisquam eius id quidem qui numquam. Esse, ipsam sed. Vel et atque praesentium illum asperiores impedit quisquam! Perferendis dolorum ab reprehenderit vitae dolor tempora consectetur. Nemo reiciendis minus nobis quos illum natus optio ad atque vel harum officia cum, fugiat debitis aperiam quis nostrum soluta et dignissimos quo alias! Debitis repellat necessitatibus, porro dolorum excepturi pariatur reiciendis officiis assumenda voluptates a dolorem tempore quod natus aspernatur? Tenetur quidem assumenda quisquam quis sunt!')
}

function time(){
    document.getElementById('zone').innerHTML = Date()
}

function bangladesh(){
    document.querySelector('#bd-time').innerHTML = Date()
}

/*-------------- End ----------------------- */








/*------------------------------------
     js (Shortcut) li create part - 1
-------------------------------------*/
let menu = document.querySelector('#home');

function CreateMenu(name){
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
menu.appendChild(CreateMenu('Home'));
menu.appendChild(CreateMenu('Products'));
menu.appendChild(CreateMenu('Category'));
menu.appendChild(CreateMenu('Contact us'));
menu.appendChild(CreateMenu('About us'));
menu.appendChild(CreateMenu('Feedback'));






/*------------------------------------
     js (Shortcut) li create part - 2
-------------------------------------*/
let contact = document.querySelector('#menubar');

function CreateMenu(home){
    let li = document.createElement('li');
    li.textContent = home;
    return li;
}

contact.appendChild(CreateMenu('Home Page'));
contact.appendChild(CreateMenu('Products Page'));
contact.appendChild(CreateMenu('Contact Page'));
contact.appendChild(CreateMenu('About Page'));
contact.appendChild(CreateMenu('Feedback Page'));









/*------------------------------------
        js ul li create part - 3
-------------------------------------*/

let ul = document.createElement('ul');
ul.id = 'menu';

let li1 = document.createElement('li');
li1.textContent = 'Home'
ul.appendChild(li1)

let li2 = document.createElement('li');
li2.textContent = 'Products';
ul.appendChild(li2);

let li3 = document.createElement('li');
li3.textContent ='Category';
ul.appendChild(li3);

let li4 = document.createElement("li");
li4.textContent = "Contact us";
ul.appendChild(li4);

let li5 = document.createElement('li');
li5.textContent ='About us'
ul.appendChild(li5)

let li6 = document.createElement('li');
li6.textContent = 'Feedback';
ul.appendChild(li6);


document.body.appendChild(ul)

/*-------------- End ----------------------- */
