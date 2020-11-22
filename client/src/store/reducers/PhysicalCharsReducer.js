const initState = {
  loading: false,
  error: false,
  physicalCharacteristics: [],
  chosenChar: null,
  page: 1
}

function PhysicalCharsReducer(state = initState, action) {
  switch (action.type) {

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload
      }
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload
      }
    case "SET_PHYSICAL_CHARS":
      return {
        ...state,
        physicalCharacteristics: action.payload
      }
    case "SET_CHOSEN_CHAR":
      return {
        ...state,
        chosenChar: action.payload
      }
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload
      }
    default:
      return state
  }
}

export default PhysicalCharsReducer