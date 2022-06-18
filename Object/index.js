
const generateUsers = () => {
    const users = [];
    for (let i = 0; i < 10; i++) {
        users.push({
            id: i + 1,
            name: "User " + i,
            email: "User@" + i + ".com",
            password: "123456" + i,
            computer_id: i + 1,
        });

        }
        return users;
    }

    const generateComputer = () => {
        const computer = [];
        for (let i = 0; i < 10; i++) {
            computer.push({
                id: i + 1,
                name: "Computer" + i,
                marca: "Marca " + i,
            });
    
            }
            return computer;
        }

// =======================================================

    // const users = generateUsers()
    // const computer = generateComputer()

    // console.table(users)
    // console.table(computer)


    // const ComputerAndUsers = users.map(user => {
    //     delete user.email
    //     let computers = computer.find(computer => computer.id === user.computer_id)

        

    //     return {...user, ...computers}
    // })

// =======================================================

 // NEW MAP
 
//   const users = generateUsers()
//   const computer = generateComputer()

//   const usersMAP = new Map()
//   const computerMAP = new Map()

//  computer.forEach(computer => {
//         computerMAP.set(computer.id, computer)
//   })

//  const ComputerAndUsers = users.map(user => {
//     const computers = computerMAP.get(user.computer_id)

//   return  { ...user, computer: computers }
// })


//    const computersAndUsersMAP = new Map()

//     ComputerAndUsers.forEach(user => {
//         computersAndUsersMAP.set(user.computer_id, user)
//     }
//     )



    // console.log(ComputerAndUsers)


    // =======================================================


const SET = new Set()

SET.add(1)
SET.add(2)
SET.add(3)
SET.add(1)
SET.add(2)
SET.add(3)


console.log(SET.size)