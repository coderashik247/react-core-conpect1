// export default function Todo({task, isDone}){
//     return(
//         <li>Task : {task}</li>
//     )
// }

/* Conditional Rendering option 1 */
// export default function Todo({task, isDone}){
//     if(isDone === true){
//         return <li><b>Finished: {task}</b></li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }

/* Conditional Rendering Option 2 */
// export default function Todo({task, isDone}){
//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }
//     return <li>Work on: {task}</li>
// }

/* Conditional Rendering Option 3 */
// export default function Todo({task, isDone}){
//     // return(isDone === true?<li>Finished: {task}</li> :<li>Worked on: {task}</li>)
//     return(
//         <li>{isDone ? 'Finished:': 'Worked on'} :{task}</li>)
// }

// Conditional Rendering Option 4: &&
// export default function Todo({task, isDone}){
//     return(
//         <li>{task}{isDone && ' : Done' }</li>
//     )
// }

// Conditional Rendering Option 5: ||
// export default function Todo({task, isDone}){
//     return(
//         <li>{task}{isDone || ' : Do it ' }</li>
//     )
// }

// Conditional Rendering Option 6: with variable
export default function Todo({task, isDone}){
    let listItem;
    if(isDone){
        listItem = <li>Al ready Done: {task}</li>
    }
    else{
        listItem = <li>Complete this : {task}</li>
    }

    return listItem;
}