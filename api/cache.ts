import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

//Secure Storage is like localStorage
//Async Storage is your devices memory cache

const cachePrefix = "demogram"

export interface CacheItem<T> {
    value: T
    timestamp: Date
}


//Data caching means storing data in memory to use later
//memory - disk memory (Hard Drive) or Random access memory (RAM)
//namespace is name label a group of related activities 

const storeToken = async (key: string, namespace: string = "api", value: any) => {
    const namespaceKey = getCacheKeyWithNamespace(namespace, key)
    try {
      const item = {
        value, //jwt we are storin the cache
        timestamp: Date.now(),
      };
      await AsyncStorage.setItem(namespaceKey, JSON.stringify(item));
      ("{message: success, timestamp:192342354234}"); //<--- Stringified format
        const obj = { message: "success", timestamp: 19283434343 }; //<-- Parsed Format JSON.parse
        
    } catch (error) {
        console.error(error)
    }
}

const getCacheKeyWithNamespace = (namespace: string, key: string): string => {
    return `${cachePrefix}:${namespace}:${key}`
}

//{value: sdifosdfhosdfh0s9dfihsdf, timestamp: 102938424324}
const isExpired = (item: CacheItem<any>, expiryTimeInHours: number = 1) => {
    const currentTime = moment(Date.now())
    const storedTokenTime = item.timestamp
    //diff -= difference 
    //1,200,000,000
    //1,100,000,000
    //100,000,000
    return currentTime.diff(storedTokenTime, "hours") > expiryTimeInHours //converts the millisecond times into minutes
}
const get = async <T>(key: string, expiryTimeInHours: number = 1) => {
    try {
      const _key = cachePrefix + key;
      const value = await AsyncStorage.getItem(_key); //the value that retrieve will be stringified
      //So we have to convert into a object that so we can access it's properties
      if (!value) return null; //if the key does not exist return null
      
     const item: CacheItem<T> = JSON.parse(value)

      if (isExpired(item, expiryTimeInHours)) {
        await AsyncStorage.removeItem(key); //Command Query Seperation
        //Queries must be seperate from commands

        return null;
      } //if user token is expired
      return item.value;
    } catch (error) {
        console.error(error)
    }
}


//get rid of expired tokens
const clearExpiredTokens = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys() //get all keys
        const cachedDataKeys = keys.filter((key) => key.startsWith(cachePrefix)) //any key that starts with demogram we want to remove it  
        const items = await AsyncStorage.multiGet(cachedDataKeys) //multi get, to get multiple items
        //items is a key value pair array = [key, value]

        //for of loop = looping of arrays
        //for in loop = looping of 
        for (const [key, value] of items) {
            if (value) { 
                //check if there is value for that key
                const item: CacheItem<any> = JSON.parse(value)
                if (isExpired(item)) {
                  //check if the token expired
                  await AsyncStorage.removeItem(key);
                } 
            }
        }
    } catch (error) {
        console.error(error)
    }
}
export default {
    storeToken,
    get,
    clearExpiredTokens
}