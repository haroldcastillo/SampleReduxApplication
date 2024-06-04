import instance from ".";
export const getUserInfo = async () => {
	return new Promise((resolve, reject) => {
		instance
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error?.response?.data ?? error);
			});
	});
};
