class Profile{
    constructor(){
        this.clientid='',
        this.clientSecret=''
    }

    async getProfile(username){
        let profileReponse=await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)

        let profile=await profileReponse.json()
        let todolist=await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`)
        let todo=await todolist.json()
        
       return {
           profile,
           todo         
       }
    }
}