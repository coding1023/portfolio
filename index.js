const navLinks= document.querySelectorAll('nav-link');


//ADD ACTIVE CLASS TO NAV LINK ON CLICK
document.addEventListener('click', (e)=> {

if (!e.target.classList.contains('nav-link')) {
   e.target.classList.add('active');

} else if (e.target.classList.contains('projects') ) {
   e.target.href= "https://github.com/claudiosapia";
}
for (let i=0; i<navLinks.length; i++){
    if (navLinks[i]=== e.target) continue;
  navLinks[i].classList.remove('active');
  
}
}, );


// CHANGE LINK OPEN NEW PAGE
function changeLink(navLinks) {

    window.open(
      navLinks.href,
      '_blank'
    );

    navLinks.innerHTML = "facebook";

    return false;
}
// CHANGE LINK OPEN NEW PAGE END


/////////////////////////////////////////////////////////

