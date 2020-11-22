import axios from 'axios'


export function SET_LOADING(status) {
  return {
    type: "SET_LOADING",
    payload: status
  }
}

export function SET_ERROR(status) {
  return {
    type: "SET_ERROR",
    payload: status
  }
}

export function SET_PHYSICAL_CHARS(data) {
  
  return {
      type: "SET_PHYSICAL_CHARS",
      payload: data
  }
}

export function SET_CHOSEN_CHAR(data) {
  return {
      type: "SET_CHOSEN_CHAR",
      payload: data
  }
}

export function FETCH_PHYSICAL_CHARS(pageNumber) {
  return (dispatch, getState) => {

    if (localStorage[`fetchPage_${pageNumber}`]) {
      const data = JSON.parse(localStorage[`fetchPage_${pageNumber}`])
      console.log(data,'data dari storage')
      dispatch(SET_PHYSICAL_CHARS(data))
    }
    else {
    dispatch(SET_LOADING(true))
    axios({
      url: `https://swapi.dev/api/people/?page=${pageNumber}`,
      method: 'GET',
    })
      .then(({ data }) => { 
        let result = []
        for (let i = 0; i < data.results.length; i++) {
          data.results[i] = {...data.results[i], index: i+1}
        }
        localStorage.setItem(`fetchPage_${pageNumber}`, JSON.stringify(data.results))
        dispatch(SET_PHYSICAL_CHARS(data.results))
      })
      .catch(err =>  dispatch(SET_ERROR(err)))
      .finally(() => dispatch(SET_LOADING(false)))
    }
  }
}

export function SET_PAGE(data) {
  return(dispatch, getState) => {
    dispatch({
      type: "SET_PAGE",
      payload: data
    })
  }
}