import bcrypt from "bcryptjs";

const users = [
    {
        name:"mahesh",
        email:"maheshtroy@gmail.com",
        password:bcrypt.hashSync("Elonson@21",10),
        isAdmin:true
    },
    {
        name:"mahesh1",
        email:"maheshtroy1@gmail.com",
        password:bcrypt.hashSync("Elonson@21",10)
    },
    {
        name:"mahesh2",
        email:"maheshtroy2@gmail.com",
        password:bcrypt.hashSync("Elonson@21",10)
    }
    ]


    export default users;