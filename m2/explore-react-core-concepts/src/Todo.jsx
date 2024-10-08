

// export default function Todo({task, isDone}){

//     return(
//         <li >Task: {task}</li>
//     )
// }

// conditional rendering option: 1
// export default function Todo({task, isDone}){
//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }

// conditional rendering option: 2
// export default function Todo({task, isDone}){

//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     return <li>Work on: {task}</li>
// }

// conditional rendering option: 3
// export default function Todo({task, isDone}){

//     return(
//         <li >{isDone ? 'Done' : 'Working'}: {task}</li>
//     )
// }

// conditional rendering option: 4 - &&
// export default function Todo({task, isDone}){

//     return(
//         <li >{task} {isDone && ': Done' || ': working'}</li>
//     )
// }
// conditional rendering option: 5 - ||
// export default function Todo({task, isDone}){

//     return(
//         <li >{task} {isDone || ': Do it'}</li>
//     )
// }
// conditional rendering option: 4 & 5 - &&
// export default function Todo({task, isDone}){

//     return(
//         <li >{task} {isDone && ': Done' || ': working'}</li>
//     )
// }

// conditional rendering option: 6
export default function Todo({task, isDone}){
    const developerStyle = {
        margin: '20px',
        padding: '20px',
        border: '2px solid purple',
        borderRadius: '14px'
      }
    let listItem;
    if(isDone){
             listItem = <li>Finished: {task}</li>
    }
    else{
        listItem = <li>Work on: {task}</li>
    }
    return <div style={developerStyle}>{listItem}</div>;
}




// export default "Todo"