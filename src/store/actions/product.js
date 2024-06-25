export const FETCH_PRODUCT_LIST = "FETCH_PRODUCT_LIST";
export const FETCH_PRODUCT_LIST_SUCCESS = "FETCH_PRODUCT_LIST_SUCCESS";
export const FETCH_PRODUCT_LIST_FAILURE = "FETCH_PRODUCT_LIST_FAILURE";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";
export const CREATE_PRODUCT_FAILURE = "CREATE_PRODUCT_FAILURE";

export const fetchProductList = () => ({
  type: FETCH_PRODUCT_LIST,
});

export const fetchProductListSuccess = ({products}) => ({
  type: FETCH_PRODUCT_LIST_SUCCESS,
  payload: {
    products,
  },
});

export const fetchProductListFailure = ({ error }) => ({
  type: FETCH_PRODUCT_LIST_FAILURE,
  payload: {
    error,
  },
});

export const createProduct = ({name,price,image,description,stock,category,brand}) => {
  return {
    type: CREATE_PRODUCT,
    payload: {
      name,
      price,
      image,
      description,
      stock,
      category,
      brand
    }
  }
}
export const createProductSuccess = ({_id,name,price,image,description,brand,category,stock}) => ({
  type: CREATE_PRODUCT_SUCCESS,
  payload: {
    _id,
    name,
    price,
    image,
    description,
    stock,
    category,
    brand
  },
});

export const createProductFailure = ({ error }) => ({
  type: CREATE_PRODUCT_FAILURE,
  payload: {
    error,
  },
});
