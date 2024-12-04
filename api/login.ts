import { apiClient } from "./client";


//Logging is a post request because we send our auth details to the server for it to authenticate users

// /login = http://localhost:3000/api/v1/login
const login = (email: string, password: string) => apiClient.post("/login", { email, password })

export default {
    login
}