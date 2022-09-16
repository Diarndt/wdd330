
const links = [{
  label: 'Week 01 Notes',
  url: '../wdd330/week01/index.html',
},
{
   label: 'Week 02 Notes',
   url: '../wdd330/week02/index.html',
}
];
  
const ol = document.getElementById('weekly');
  
links.forEach(link => {
  let li = document.createElement('li');
  let a = document.createElement('a');
  a.setAttribute('href', link.url);
  a.innerText = link.label;
  
  li.appendChild(a);
  
  ol.appendChild(li);
  
});
