import { constant } from "@/constant/index"
export default {
    sendEmail: (data) => fetch(`${constant.api_url}/api/ems/send`, {
        body: JSON.stringify(data),
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": "Content-Type",
        },
    }),
    register: (data) => fetch(`${constant.api_url}/api/user/registerByEmail`, {
        body: JSON.stringify(data),
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": "Content-Type",
        }
    }),
    loginByCode: (data) => fetch(`${constant.api_url}/api/user/loginByCode`, {
        body: JSON.stringify(data),
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": "Content-Type",
        }
    }),
    loginByPassword: (data) => fetch(`${constant.api_url}/api/user/passwordLogin`, {
        body: JSON.stringify(data),
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": "Content-Type",
        }
    }),
    verifyCode: (data) => fetch(`${constant.api_url}/api/user/verifyCode`, {
        body: JSON.stringify(data),
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": "Content-Type",
        }
    }),
    resetPassword: (data) => fetch(`${constant.api_url}/api/user/resetPassword`, {
        body: JSON.stringify(data),
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": "Content-Type",
        }
    }),
    AddToCart: (data) => {
        console.log(data);
        return fetch(`${constant.api_url}/api/cart/create`, {
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
    },
    changeShopCarNumber: (data) => {
        console.log(data);
        return fetch(`${constant.api_url}/api/cart/updateNum`, {
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
    },
    deleteProductionFromShopCar: (data) => fetch(`${constant.api_url}/api/cart/delete`, {
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
    }),
    addAddress: (data) => fetch(`${constant.api_url}/api/address/create`, {
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
    }),
    updateAddress: (data) => fetch(`${constant.api_url}/api/address/update`, {
        body: JSON.stringify({
            id: data.id,
            mobile: data.mobile,
            name: data.username,
            location: data.position,
        }),
        method: 'POST',
        mode: 'cors',
        headers: {
            "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": "Content-Type",
        }
    }),
    setDefaultAddress: (data) => fetch(`${constant.api_url}/api/address/setDefault`, {
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
    }),
    createOrder: (data) => {
        console.log(data);
       return fetch(`${constant.api_url}/api/order/create`, {
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
    }

}