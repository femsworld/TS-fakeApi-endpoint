import axios from "axios"

const fakeApi = async (max:number) => {
    const productResult = await axios("https://api.escuelajs.co/api/v1/products")
    const data = productResult.data
    return data
}
console.log(fakeApi)

