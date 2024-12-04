import axios, { AxiosRequestConfig } from "axios";
import { create, ApiResponse } from "apisauce";
import storage from "./storage";
import cache from "./cache";

//apisauce is a lightweight wrapper
//apisauce has additional features and tools to make APIs simpler to build
//create the apiClient


"http://localhost:3000/api/v1/profile/:userId"
export const apiClient = create({
    //This is the base url of the backend server
  baseURL: process.env.API_PRODUCTION_URL ?? "http://localhost:3000/api/v1", //fallback logic
});


//Handle API responses

//Every Almost API request has three things
//1. Headers = This metadata about the request that is used by an API to know how to handle the request <-- this is always present in every request
//2. Body = This data that passed from the clients-side to the api to be stored or used for user actions .e.g login - POST, PATCH, PUT, DELETE
//3. Params = This is data after the base url that can used to send data to the api for queries. e.g www.amazon.com/products/ids/9 - GET, HEAD

apiClient.addAsyncRequestTransform(async(req) => {
    const authToken = await storage.getStoredUserToken() //get the jwt token from storage if it exists
    if (!authToken) return 
    req.headers!["x-auth-token"] = authToken
    //Anything that starts with x in header configuration of a request

    //null - falsy
    //"" - falsy
    //[]
    // false
    //0

})

//Handling get requests
const get = apiClient.get
//<T, U> = T TYPE OF THE REQUEST
//U = T, What the data type of request is that would the response also 

apiClient.get = async<T, U = T> (url: string, params?: {}, axiosConfig?: AxiosRequestConfig<any>): Promise<ApiResponse<T, U>> => {
    const response = await get<T,U>(url, params, axiosConfig)
    if (response.ok) {
        await cache.storeToken(url, "api", response.data) //store the data in the data cache
        return response
    }

    //if the data is available to cache the data

    const cachedData = await cache.get(url)
    if (cachedData) {
        return {
            ok: true,
            data: cachedData,
            originalError: null,
            problem: null, 
            status: 200,
            headers: {}, 
            config: {}
        } as ApiResponse<T, U>
    }


    //Inceptor 
    apiClient.axiosInstance.interceptors.response.use(
        (res) => res, //if the promise is fufilled (Onfufilled)
        (err) => {
            console.error("API Client Error:", err.message || err.response) //onrejected
            return Promise.reject(err)//We need to handle the promise here
        }
    )

    return response
  
}