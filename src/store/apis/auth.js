import instance from ".";
export const login = async (payload) => {
  const response = await instance.post("/auth/login", payload);
  return response.data;
};