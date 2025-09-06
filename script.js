const followBtn= document.getElementById('followBtn');
followBtn.addEventListener('click',()=>{
    followBtn.textContent=followBtn.textContent=='follow'?'following':'follow';
    followBtn.classList.toggle('outline');
});

const themeBtn= document.getElementById('themeBtn');
themeBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
});
