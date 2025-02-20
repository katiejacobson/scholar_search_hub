export const register = (email, password, name) => {
  console.log("user registered");
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "Katie", email: "katie@example.com", id: "fake-id" },
    });
  });
};

export const authorize = (email, password) => {
  // Pretend we did a fetch request that gave us back a token
  return new Promise((resolve, reject) => {
    resolve({
      token: "a fake token",
      user: { name: "Katie", email: "katie@example.com", id: "fake-id" },
    });
  });
};

export const checkToken = (token) => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "Katie", email: "katie@example.com", id: "fake-id" },
    });
  });
};

export const getUserInfo = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      user: { name: "Katie", id: "fake-id" },
    });
  });
};
