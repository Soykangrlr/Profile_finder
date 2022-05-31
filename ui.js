class UI{
    constructor(){
        this.profileConatiner=document.querySelector('#profileConatiner')
        this.alert=document.querySelector('#alert')
    }
    showProfile(text){
        this.profileConatiner.innerHTML=`
            <div class="card card-body">
                <div class="row">
                <div class="col-md-3">
                <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x150" class="img-thumbnail"></a>
                </div>
                <div class="col-md-9">
                <h4>Contact</h4>
                <ul class="list-group">
                    <li class="list-group-item">
                    name: ${text.name}
                    </li>
                    <li class="list-group-item">
                    username: ${text.username}
                    </li>
                    <li class="list-group-item">
                    email: ${text.email}
                    </li>
                    <li class="list-group-item">
                    adress:
                    ${text.address.street}
                    ${text.address.city}
                    ${text.address.zipcode}
                    ${text.address.suite}
                    </li>
                    </li>
                    <li class="list-group-item">
                    phone: ${text.phone}
                    </li>
                    <li class="list-group-item">
                    website: ${text.website}
                    </li>
                    <li class="list-group-item">
                    company:${text.company.name}
                    </li>
                </ul>
                <h4 class="mt-3"> To Do </h4>
                <ul id="todo" class="list-group">
                </ul>
                </div>
            </div>
        `
    }
    showAlert(text){
        this.alert.innerHTML=`${text} not found`
    }
    showTodo(todo){
        let html=''
        todo.forEach(item => {
            if(item.completed){
                html+=` <li class="list-group-item bg-success">
                ${item.title}</li>
                `
            }else{
                html+=` <li class="list-group-item bg-warning">
                ${item.title}</li>
                `
            }
        });
        this.profileConatiner.querySelector('#todo').innerHTML=html
    }

    clearContainer(){
        this.profileConatiner.innerHTML=''
        this.alert.innerHTML=''
    }
}

