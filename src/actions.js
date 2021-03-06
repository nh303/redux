import * as actions from './actionTypes';

export const bugAdded = description => ({
    type:"action.BUG_ADDED",
    payload:{
        description
    }
});

export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
    payload:{
        id
    }
});

// export function bugAdded(description) {

//     return {
//         type:"action.BUG_ADDED",
//         payload:{
//             description: "Bug1"
//         }
//     };
// }