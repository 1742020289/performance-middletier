/*
 * @Author: Fanpingfan
 * @Date: 2022-03-20 17:45:40
 * @LastEditors: Fanpingfan
 * @LastEditTime: 2022-03-20 17:52:20
 */
import axios from "axios";

const baseUrl = 'apim/v2/server'
interface Memory{
    status:number;
    message:string;
    data:{
        usage:number;
        total:number;
        space:number;
    }
}
export async function getMemoryInfo(){
  let res =await axios.get<Memory>('http://localhost:7530/apim/v2/server/memory-info');
  return res.data.data;
}