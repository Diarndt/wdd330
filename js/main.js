
const links = [{
  label: 'Week 01 Notes',
  url: 'week01.html',
},
               {
                 label: 'Week 02 Notes',
                 url: 'week02.html',
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
