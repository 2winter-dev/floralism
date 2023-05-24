import { constant } from "@/constant/index"
export default {
    sendEmail: (data) => fetch(`${constant.api_url}/api/ems/send`, {
        body: JSON.stringify(data),
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
    }),
    register: (data) => fetch(`${constant.api_url}/api/user/registerByEmail`, {
        body: JSON.stringify(data),
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        }
    }),
    loginByCode: (data) => fetch(`${constant.api_url}/api/user/loginByCode`, {
        body: JSON.stringify(data),
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        }
    }),
    loginByPassword: (data) => fetch(`${constant.api_url}/api/user/passwordLogin`, {
        body: JSON.stringify(data),
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        }
    }),
    verifyCode: (data) => fetch(`${constant.api_url}/api/user/verifyCode`, {
        body: JSON.stringify(data),
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        }
    }),
    resetPassword: (data) => fetch(`${constant.api_url}/api/user/resetPassword`, {
        body: JSON.stringify(data),
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
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
                "Content-Type":"application/json"
            }
        })
    },
    changeShopCarNumber:(data)=>fetch(`${constant.api_url}/api/cart/updateNum`,{
        body:JSON.stringify({
            id:data.id,
            num:data.num,
        }),
        method: 'POST',
        mode: 'cors',
        headers: {
            "Authorization": `Bearer ${data.cookie}`,
            "Content-Type":"application/json"
        }
    }),
    deleteProductionFromShopCar:(data)=>fetch(`${constant.api_url}/api/cart/delete`,{
        body:JSON.stringify({
            ids:data.ids,    
        }),
        method: 'POST',
        mode: 'cors',
        headers: {
            "Authorization": `Bearer ${data.cookie}`,
            "Content-Type":"application/json"
        }
    }),
}