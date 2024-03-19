import axios from "axios";

const data = axios.create({
    baseURL:"http://localhost:5000"
})
const useAxiosPulic = () => {
    return data
};

export default useAxiosPulic;