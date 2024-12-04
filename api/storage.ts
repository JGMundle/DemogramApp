//1 Secure Store from expo
//jwt-decode
import * as SecureStorage from "expo-secure-store"
import { jwtDecode } from "jwt-decode"


const headerKey = "x-auth-token"//reference to our jsonwebtoken value

    //{"x-auth-token": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
//.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c}
    
//Checking to see if the user already has jwt stored in the device storage



//Get stored JWT token
const getStoredUserToken = async () => {
    try {
        return await SecureStorage.getItemAsync(headerKey) //if there is no token stored this return null
    } catch (error) {
        console.error(error)
        
    }
}

//Getting a User by checking to see if they have a jwt token 
//Decode the JWT token to extract the payload   
const getUser = async () => {
    const userToken = await getStoredUserToken()//get the stored token
    return userToken ? jwtDecode(userToken, {header: true}) : null //if there is token stored we can decode it
}

//stjwt tokens that get generated from signing up or signing in
const storeUserToken = async (authToken: string) => {
    try {
        await SecureStorage.setItemAsync(headerKey, authToken)
        //if this was local storage it will be localStorage.setItem
    } catch (error) {
        
    }
}

//Remove a jwt token for any logout actions etc...
//Ways your token will be removed
//1. JWT token expiry time has occured e.g 1hr 1 2mins 
//2. The user manual choose to logout of the application
const removeUserToken = async () => {
    try {
        return await SecureStorage.deleteItemAsync(headerKey)
    } catch (error) {
        console.log(error)
    }
}

export default {
    getUser,
    storeUserToken,
    getStoredUserToken,
    removeUserToken
}