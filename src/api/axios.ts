
import Axios from "axios";


async function AxiosBase() {
 
  return Axios.create({
    baseURL: 'https://revas-backend.onrender.com/api/',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'appliction/json',
    },
    timeout: 200000
  })
}

export default AxiosBase;
