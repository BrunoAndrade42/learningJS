
// =======================================================

// const data = new Date()

// console.log(data)
// //2022-06-17T21:28:12.142Z
// console.log(data.getFullYear())
// //2022
// console.log(data.getMonth())
// //5
// console.log(data.getDate())
// //31
// console.log(data.getHours())
// //00
// console.log(data.getMinutes())
// //00
// console.log(data.getSeconds())
// //00
// console.log(data.getMilliseconds())
// //142
// console.log(data.getTime())

// console.log(data.getDay())

// console.log(data.getUTCDate())

// console.log(data.getUTCDay())

// console.log(data.getUTCFullYear())

// console.log(data.getUTCHours())

// console.log(data.getUTCMinutes())

// console.log(data.getUTCSeconds())


// var birthday = new Date("December 17, 1995 03:24:00");
// var birthday = new Date("1995-12-17T03:24:00");
// var birthday = new Date(1995,11,17);
// var birthday = new Date(1995,11,17,3,24,0);
// const data = new Date("2022-05-31")

// =======================================================


// const data1 = new Date()
// data1.setMonth(data1.getMonth() - 2)
// data1.setFullYear(data1.getFullYear() - 1)
// const month = data1.getMonth()

// console.log(data1)
// const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

// console.log(months[month])

// =======================================================


//   const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

//    const data1 = new Date()

// //    const day = data1.setDay(data1.getDay() - 1)

// //     console.log(days[data1.getDay()])


// console.log(new Date().getDay(), 'teste')

//     console.log(days[new Date().getDay() - 1])

// =======================================================

// const dataActual = new Date().getDay() - 2

// const dataPrevious = new Date().getDate() - 1

//  if(dataActual > dataPrevious){
//      console.log('Hoje é dia de trabalhar')
//  }

//     if(dataActual < dataPrevious){

//         console.log('Hoje é dia de descansar')
//     }


// =======================================================


// const birthday = new Date('1997-04-27')

// const age = new Date().getFullYear() - birthday.getFullYear()

// console.log(age)

// =======================================================


// const data = new Date();
// const hours = data.getHours();


// if (hours >= 0 && hours <= 11) {
//   console.log("Bom dia");
// } else if (hours >= 12 &&  hours <= 18 ) {
//   console.log("Boa tarde");
// } else {
//   console.log("Boa noite");
// }


// console.log(hours.toString());

// =======================================================

// console.log(new Date().toLocaleString('pt-BR', {
//     timeZone: 'America/Sao_Paulo',
//     hour12: false,
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//     timeZoneName: 'short'
//     }));

// =======================================================



// Faz a função sem parar de executar!
// setInterval(() => {
//     const data1 = new Date()

//     console.log(data1.toLocaleString('pt-BR', {
//         timeZone: 'America/Sao_Paulo',
//         hour12: false,
//         hour: 'numeric',
//         minute: 'numeric',
//         second: 'numeric',
//         timeZoneName: 'short'
//         }))
// }, 1000);



// Faz a função 1 vez e espera o tempo!
setTimeout(() => {
    console.log('Fim')
}, 5000);