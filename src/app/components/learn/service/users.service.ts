export class UsersService {
  users=[
    {name:'neelan', status:'active'},
    {name:'Akhil', status:'Inactive'},
    {name:'Dhanesh', status:'active'}
  ]
  AddNewUser(name:string, status:string){
    this.users.push({name:name, status:status});
  }
}
