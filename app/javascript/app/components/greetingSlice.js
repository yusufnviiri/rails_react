export const ACTIONS = {
GET_GREETING:'GET_GREETING', 
  };
  const URL =`http://127.0.0.1:3000/greeting`
export const getGreeting = () => async (dispatch) => {
    const json = await fetch(`http://127.0.0.1:3000/greeting`)
    const GreetingsFromApi = await json.json()
    console.log(GreetingsFromApi)

    dispatch({type:ACTIONS.GET_GREETING,payload:GreetingsFromApi})

    return GreetingsFromApi

 


}
export function greetingsReducer(state = [], action) {
    switch (action.type) {
      case ACTIONS.GET_GREETING:
        return [...state, action.payload];
      default:
        return state;
    }
  }
  export default greetingsReducer;