const initialState = {
    count:0,
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
              console.log("first")
          return {
            ...state,
            count: state.count + 1
        };
        case "SUBTRACT":
            console.log("sec")
          return {
            ...state,
            count: state.count - 1
          };
    
      default:
        return {...state};
    }
  };
  
  export default counterReducer;
  