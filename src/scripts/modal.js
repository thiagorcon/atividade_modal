function openNewBox() {
     const formLink = document.querySelector('.form__register-link')
     const newModal = document.querySelector('#modalControle')
     
     formLink.addEventListener('click',() =>{
     newModal.showModal() 
     })     
     
     
}

openNewBox()
