import {
  FETCH_PRODUCT_LIST,
  FETCH_PRODUCT_LIST_SUCCESS,
  FETCH_PRODUCT_LIST_FAILURE,
  CREATE_PRODUCT,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
} from "../actions/product";

const initialState = {
  products: {
    data: [],
    isLoading: false,
    isError: false,
  },
};

export const productReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_PRODUCT_LIST:
      return{
        ...state,
        products:{
          ...state.products,
          isLoading: true,
        }
      }
    case FETCH_PRODUCT_LIST_SUCCESS:
      return{
        ...state,
        products:{
          ...state.products,
          data: action.payload.products,
          isLoading: false,
        }
      }
    case FETCH_PRODUCT_LIST_FAILURE:
      return{
        ...state,
        products:{
          ...state.products,
          isLoading: false,
          isError: action.payload.error,
        }
      }
    case CREATE_PRODUCT:
      return{
        ...state,
      }
    case CREATE_PRODUCT_SUCCESS:
      return{
        ...state,
        products:{
          ...state.products,
          data: [...state.products.data,action.payload],
        }
      }
    case CREATE_PRODUCT_FAILURE:
      console.log(action.payload.error)
      return{
        ...state,
        products:{
          ...state.products,
          isError: action.payload.error,
        }
      }
    default:
      return state;
  }
};