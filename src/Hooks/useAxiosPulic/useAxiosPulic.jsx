import axios from "axios";

const data = axios.create({
    baseURL:"https://employ-edge-server.vercel.app"
})
const useAxiosPulic = () => {
    return data
};

export default useAxiosPulic;