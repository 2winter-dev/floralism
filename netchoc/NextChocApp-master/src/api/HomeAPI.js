
import { ST_request } from "../common/utils";

export default HomeApi = {
    // fetchshoplist: async (data) => await ST_request({method: 'GET', data: data, path: '/api/merchant/index'}),
    // loginByPassword:async (data)=>await ST_request({method:'POST',data:data,path:'/api/user/loginByEmailOrMobilePassword'}),
    fetchHomepage:async (data)=>await ST_request({method:'GET',data,path:`/api/index/index?token=${data.token}`}),
    fetchHomepagev2:async (data)=>await ST_request({method:'GET',data,path:`/api/index/indexV2?token=${data.token}`}),
    // fetchList
    fetchShopList:async (data)=>await ST_request({method:'GET',data,path:`/api/api/merchant/indexV2?sort_type=${data?.sort_type??""}&address=${data?.address??""}&keywords=${data?.keywords??""}&listRows=${data?.listRows??""}&page=${data?.page??""}`}),
    uploadLocation:async (data)=>await ST_request({method:'POST',data,path:'/api/user/updateLocation'}),
    fetchnotification:async (data)=>await ST_request({method:'GET',data,path:'/api/Expopushrecord/index'}),
}