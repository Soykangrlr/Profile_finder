const profile=new Profile()
const ui=new UI()
const profileSearch=document.querySelector('#profileSearch')
profileSearch.addEventListener('keyup',(e)=>{
    let text=e.target.value
    ui.clearContainer()
    if(text!==''){
        profile.getProfile(text)
        .then(res=>{
            if(res.profile.length===0){
                ui.showAlert(text)
            }
            else{
              ui.showProfile(res.profile[0]) 
              ui.showTodo(res.todo)
            }
        })
        .catch(err=> ui.showAlert(text))
    }
})