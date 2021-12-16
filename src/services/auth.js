export const isAuthenticated = () => localStorage.getItem("token") !== null;

export const getToken = () => localStorage.getItem("token");

export const login = (token) => {
  localStorage.setItem("token", token);
};

export const SetToken = (token,valor) => {
  localStorage.setItem(token, valor);
};

export const logout = () => {
  localStorage.removeItem("id");
  localStorage.removeItem("token");
  localStorage.removeItem("name");
};

export const validateToken = async (json) => {
  if (
    json.status === "Token is Invalid" ||
    json.status === "Token is Expired"
  ) {
    window.location.href = "/logout";
    return;
  }
};