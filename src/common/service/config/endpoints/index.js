export const ENDPOINTS = {
	auth: {
		login: {
			method: "POST",
			url: "api/v1/login",
		},
		signup: {
			method: "POST",
			url: "api/v1/signup",
		},
		google: {
			method: 'POST',
			url: "api/v1/auth/google",
		},
		userInfo: {
			method:"GET",
			url: "api/v1/users/",
		}
	}
};
