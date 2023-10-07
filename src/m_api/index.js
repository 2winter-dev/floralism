import { constant } from "@/constant/index"
import Cookies from "js-cookie"
export default {
    sendEmail: async (data) => {
        const response = await fetch(`${constant.api_url}/api/ems/send`, {
            body: JSON.stringify(data),
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type",
            },
        })
        if (response.status !== 200) {
            //////////////////////////console.log(response);
            if (response.status === 401) {
                Cookies.remove("token");
                throw new Error("请先登录");
            }
            throw new Error("An error occurred");
        }
        return await response.json();
    },
    register: async (data) => {
        const response = await fetch(`${constant.api_url}/api/user/registerByEmail`, {
            body: JSON.stringify(data),
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type",
            }
        })
        if (response.status !== 200) {
            //////////////////////////console.log(response);
            if (response.status === 401) {
                Cookies.remove("token");
                throw new Error("请先登录");
            }
            throw new Error("An error occurred");
        }
        return await response.json();
    },
    loginByCode: async (data) => {

        const response = await fetch(`${constant.api_url}/api/user/loginByCode`, {
            body: JSON.stringify(data),
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type",
            }
        })
        if (response.status !== 200) {
            //////////////////////////console.log(response);

            if (response.status === 401) {
                Cookies.remove("token");
                throw new Error("请先登录");
            }
            throw new Error("An error occurred");
        }
        return await response.json();
    },
    loginByPassword: async (data) => {
        const response = await fetch(`${constant.api_url}/api/user/passwordLogin/`, {
            body: JSON.stringify(data),
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type",
            }
        })

        if (response.status !== 200) {
            //////////////////////////console.log(response);
            if (response.status === 401) {
                Cookies.remove("token");
                throw new Error("请先登录");
            }
            throw new Error("An error occurred");
        }
        return await response.json();
    },
    verifyCode: async (data) => {
        const response = await fetch(`${constant.api_url}/api/user/verifyCode`, {
            body: JSON.stringify(data),
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type",
            }
        })
        if (response.status !== 200) {
            //////////////////////////console.log(response);
            if (response.status === 401) {
                Cookies.remove("token");
                throw new Error("请先登录");
            }
            throw new Error("An error occurred");
        }
        return await response.json();
    },
    resetPassword: async (data) => {

        const response = await fetch(`${constant.api_url}/api/user/resetPassword`, {
            body: JSON.stringify(data),
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type",
            }
        })
        if (response.status !== 200) {
            //////////////////////////console.log(response);
            if (response.status === 401) {
                Cookies.remove("token");
                throw new Error("请先登录");
            }
            throw new Error("An error occurred");
        }
        return await response.json();
    },
    AddToCart: async (data) => {
        //////////////////////////////////////console.log(data);
        const response = await fetch(`${constant.api_url}/api/cart/create`, {
            body: JSON.stringify({
                flower_specs_id: data.flower_specs_id,
                num: data.num,
                cardtype: data.cardtype,
                cardcontent: data.cardcontent,
            }),
            method: 'POST',
            mode: 'cors',
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type",
            }
        })
        if (response.status !== 200) {
            //////////////////////////console.log(response);
            if (response.status === 401) {
                Cookies.remove("token");
                throw new Error("请先登录");
            }
            throw new Error("An error occurred");
        }
        return await response.json();
    },
    changeShopCarNumber: async (data) => {
        //////////////////////////////////////console.log(data);
        const response = await fetch(`${constant.api_url}/api/cart/updateNum`, {
            body: JSON.stringify({
                id: data.id,
                num: data.num,
            }),
            method: 'POST',
            mode: 'cors',
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type",
            }
        })
        if (response.status !== 200) {
            //////////////////////////console.log(response);
            if (response.status === 401) {
                Cookies.remove("token");
                throw new Error("请先登录");
            }
            throw new Error("An error occurred");
        }
        return await response.json();
    },
    deleteProductionFromShopCar: async (data) => {
        const response = await fetch(`${constant.api_url}/api/cart/delete`, {
            body: JSON.stringify({
                ids: data.ids,
            }),
            method: 'POST',
            mode: 'cors',
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type",
            }
        })
        if (response.status !== 200) {
            //////////////////////////console.log(response);

            if (response.status === 401) {
                Cookies.remove("token");
                throw new Error("请先登录");
            }
            throw new Error("An error occurred")

        }
        return await response.json();
    },
    addAddress: async (data) => {
        const response = await fetch(`${constant.api_url}/api/address/create`, {
            body: JSON.stringify({
                mobile: data.mobile,
                name: data.username,
                location: data.address,
            }),
            method: 'POST',
            mode: 'cors',
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type",
            }
        })
        if (response.status !== 200) {
            //////////////////////////console.log(response);
            if (response.status === 401) {
                Cookies.remove("token");
                throw new Error("请先登录");
            }
            throw new Error("An error occurred")
        }
        return await response.json();
    },
    updateAddress: async (data) => {
        //////////////////////console.log(data);
        const response = await fetch(`${constant.api_url}/api/address/update`, {
            body: JSON.stringify({
                id: data.id,
                mobile: data.mobile,
                name: data.username,
                location: data.address,
            }),
            method: 'POST',
            mode: 'cors',
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type",
            }
        })
        if (response.status !== 200) {
            //////////////////////////console.log(response);
            if (response.status === 401) {
                Cookies.remove("token");
                throw new Error("请先登录");
            }
            throw new Error("An error occurred")
        }
        return await response.json();
    },
    setDefaultAddress: async (data) => {
        const response = await fetch(`${constant.api_url}/api/address/setDefault`, {
            body: JSON.stringify({
                id: data.id,
            }),
            method: 'POST',
            mode: 'cors',
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type",
            }
        })
        if (response.status !== 200) {
            //////////////////////////console.log(response);
            if (response.status === 401) {
                Cookies.remove("token");
                throw new Error("请先登录");
            }
            throw new Error("An error occurred")
        }
        return await response.json();
    },
    createOrder: async (data) => {
        //////////////////////////////////////console.log(data);
        const response = await fetch(`${constant.api_url}/api/order/create`, {
            body: JSON.stringify(
                data
            ),
            method: 'POST',
            // mode: 'cors',
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type",
            }
        })
        if (response.status !== 200) {
            //////////////////////////console.log(response);

            if (response.status === 401) {
                Cookies.remove("token");
                throw new Error("请先登录");
            }
            throw new Error("An error occurred")
        }
        return await response.json();
    },
    deleteAddress: async (data) => {

        const response = await fetch(`${constant.api_url}/api/address/delete`, {
            body: JSON.stringify({
                id: data.id,
            }),
            method: 'POST',
            mode: 'cors',
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type",
            }

        })

        if (response.status !== 200) {
            //////////////////////////console.log(response);
            if (response.status === 401) {
                Cookies.remove("token");
                throw new Error("请先登录");
            }
            throw new Error("An error occurred")
        }
        return await response.json();
    },
    fetchGoods: async (data) => {
        ////////////////////////////////////console.log("123");
        const response = await fetch(`${constant.api_url}/api/flowers/index?keyword=${data.keyword}&flower_category_name=${data.flower_category_name}&flower_category_id=${data.flower_category_id}&listRows=${data.listRows}&page=${data.page}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "GET,POST",
                "Access-Control-Request-Headers": "Content-Type",
                // "Access-Control-Request-Credentials":"true",
            }
        })
        if (response.status !== 200) {
            //////////////////////////console.log(response);
            if (response.status === 401) {
                Cookies.remove("token");
                throw new Error("请先登录");
            }
            throw new Error("An error occurred")
        }
        return await response.json();
    },
    fetchOrderDetail: async (data) => {
        const response = await fetch(`${constant.api_url}/api/order/detail?order_id=${data.id}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "GET,POST",
                "Access-Control-Request-Headers": "Content-Type",
                // "Access-Control-Request-Credentials":"true",
            }
        })
        if (response.status !== 200) {
            if (response.status === 401) {
                Cookies.remove("token");
                throw new Error("请先登录");
            }
            throw new Error("An error occurred")
        }
        return await response.json();
    },
    updateUserMessage: async (data) => {
        const response = await fetch(`${constant.api_url}/api/User/changeUserInfo`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "GET,POST",
                "Access-Control-Request-Headers": "Content-Type",
                // "Access-Control-Request-Credentials":"true",
            }
        })
        if (response.status !== 200) {
            // //////////////////////////console.log(response);
            if (response.status === 401) {
                Cookies.remove("token");
                throw new Error("请先登录");
            }
            throw new Error("An error occurred")
        }
        return await response.json();
    },

    description: async (data) => {
        const response = await fetch(`${constant.api_url}/api/User/subscribe`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "GET,POST",
                "Access-Control-Request-Headers": "Content-Type",
                // "Access-Control-Request-Credentials":"true",
            }
        })
        if (response.status !== 200) {
            throw new Error("Network connect fail");
        }
        let _data = await response.json();
        return _data;
    },
    addOrder:async (data)=>{
        console.log(data);
        const response=await fetch(`${constant.api_url}/api/order/createOrderForClient`,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "GET,POST",
                "Access-Control-Request-Headers": "Content-Type",
            }
        })
        if (response.status !== 200) {
            throw new Error("Network connect fail");
        }
        let _data = await response.json();
        return _data;
    }
}