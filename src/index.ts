import axios, { Axios, AxiosError } from "axios";

const fakeApi = async (id:number) => {
    try {
    //  const productResult = await axios("https://api.escuelajs.co/api/v1/products")
    const productResult = await axios(`https://api.escuelajs.co/api/v1/products/${id}`); // append the ID to the URL
    const data = productResult.data
       return data 
    } catch (e) {
    const error = e as AxiosError; //casting the error type
    console.log(error.message);
    } 
}
fakeApi(104).then(data => {
    console.log(data)
})
