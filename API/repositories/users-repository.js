import baseUsersRepositories from "./base-users-repositories/base-users-repositories";

const resources = "users";
export default {
  async createUser(userData) {
    let route = `${resources}`;
    return await baseUsersRepositories.post(route, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  async getUser() {
    let route = `${resources}`;
    return await baseUsersRepositories.get(route, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  async getAllUser() {
    let route = `${resources}`;
    return await baseUsersRepositories.get(route, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  async putUser(userData) {
    let route = `${resources}`;
    return await baseUsersRepositories.put(route, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  async deleteUser(id) {
    let route = `${resources}`;
    return await baseUsersRepositories.delete(route, id, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
