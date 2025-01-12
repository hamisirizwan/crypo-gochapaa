import {createClient} from "redis"
export const redisClient = createClient();

if(!redisClient.isOpen){
    redisClient.connect()
}