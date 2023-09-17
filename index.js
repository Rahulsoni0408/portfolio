// console.log("Script Running...")
// document.querySelector('.cross').style.display = 'none';
// document.querySelector('.hamburger').addEventListener("click",()=>{
//     document.querySelector('.sidebar').classList.toggle('sidebargo');
//     if(document.querySelector('.sidebar').classList.contains('sidebargo')){
//         setTimeout(() => {
//         document.querySelector('.menu').style.display='inline'
//     }, 300);        
//         document.querySelector('.cross').style.display='none'
//     }else{
//         setTimeout(() => {
//         document.querySelector('.cross').style.display='inline'
//     }, 300 );        
//         document.querySelector('.menu').style.display='none'
//     }

// })




console.log("Script Running...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        setTimeout(() => {
        document.querySelector('.menu').style.display='inline'
    }, 300);        
        document.querySelector('.cross').style.display='none'
    }else{
        setTimeout(() => {
        document.querySelector('.cross').style.display='inline'
    }, 300 );        
        document.querySelector('.menu').style.display='none'
    }

})