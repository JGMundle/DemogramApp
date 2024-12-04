import { apiClient } from "./client";

//This the end point for registering user for expo push notifications
const registerUser = (expoPushToken: any) => apiClient.post("token", { pushToken: expoPushToken })

export default { registerUser }