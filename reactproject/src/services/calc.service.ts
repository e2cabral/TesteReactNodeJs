import axios from "axios";

export const sum = async (firstValue: number, secondValue: number) => {
    return await axios.post("http://localhost:3000/sum", { firstValue, secondValue });
};