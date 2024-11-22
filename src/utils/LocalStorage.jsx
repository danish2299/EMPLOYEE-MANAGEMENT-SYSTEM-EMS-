const employee = [
        {
          "id": 1,
          "email": "employee1@example.com",
          "password": "123",
          "task": {
            "title": "Task 1",
            "description": "Complete the report by end of the week.",
            "date": "2024-11-12",
            "assign_to": "employee1",
            "category": "Documentation"
          }
        },
        {
          "id": 2,
          "email": "employee2@example.com",
          "password": "123",
          "task": {
            "title": "Task 2",
            "description": "Fix bugs in the payment gateway.",
            "date": "2024-11-13",
            "assign_to": "employee2",
            "category": "Development"
          }
        },
        {
          "id": 3,
          "email": "employee3@example.com",
          "password": "123",
          "task": {
            "title": "Task 3",
            "description": "Prepare the presentation for the client meeting.",
            "date": "2024-11-14",
            "assign_to": "employee3",
            "category": "Marketing"
          }
        }
];
const admin =[
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
      }      
];
      
export const setLocalStorage = () =>{
    localStorage.setItem('employee' , JSON.stringify(employee))
    localStorage.setItem('admin' , JSON.stringify(admin))
}     
export const getLocalStorage = () =>{
    const employee = JSON.parse(localStorage.getItem('employee'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employee , admin}


}