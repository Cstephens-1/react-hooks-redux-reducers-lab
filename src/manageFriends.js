export function manageFriends(state= {friends: []}, action) {
  // your code here
  
  
  switch(action.type){
    case "friends/add":
      return {
        ...state
      }
      case "friends/remove":
        return {

        }
  
    default: return state
  
  
  
  
}
}
