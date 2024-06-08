import usersRepository from "./repositories/users-repository";

const repositories = { users: usersRepository };
export const repository_factory = { get: (name) => repositories[name] };
