import axios from 'axios';
export const GET_WINES = 'GET_WINES';
export const SET_WINES_CLEAN = 'GET_WINES';
export const GET_NAME = 'GET_NAME';
export const GET_CATEGORY = 'GET_CATEGORY';

export const getWines = (num) => {
    return async function (dispatch) {
      return axios.get("http://localhost:8000/products?start="+num)
      .then(response => {
        dispatch({ type: GET_WINES, payload: response.data });
      })
      .catch(err => console.error(err))
    };
};

export const setWineClean = () => {
  return { type: SET_WINES_CLEAN };
};

export const getWinesById = (id) => {
  return async function (dispatch) {
    return axios.get("http://localhost:8000/products/"+id)
    .then(response => {
      dispatch({ type: GET_WINES, payload: response.data });
    })
    .catch(err => console.error(err))
  };
};

export const getWineName = (name) => {
    return async function(dispatch){
      return axios.get(`http://localhost:8000/products/${name}`)
    .then(response => {
      dispatch({ type: GET_NAME, payload: response.data});
    })
    .catch(err => console.error(err))
  }
}

export const getWineCategory = (name) => {
  return async function (dispatch){
    return axios.get(`http://localhost:8000/products/?category=${name}`)
    .then(response => {
      dispatch({ type: GET_CATEGORY, payload: response.data})
    })
    .catch(err => console.error(err))
  }
}