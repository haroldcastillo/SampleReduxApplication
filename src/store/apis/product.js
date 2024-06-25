import instance from ".";

export const getProductList = async () => {
  try{
    const response = await instance.get("/products");
    return response.data;
  }catch(error){
    throw error?.response?.data ?? error;
  }
}

export const createProduct = async ({name,price,image,description,category,stock,brand}) => {
  try{
    const response = await instance.post("/products",{
      name,
      price,
      image,
      description,
      category,
      stock,
      brand
    });
    console.log("response",response)
    return response.data;
  }catch(error){
    throw error?.response?.data ?? error;
  }
}