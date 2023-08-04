import { constant } from '@/constant/index';

export const spliceArr = (arr, page_num,type) => {
    let newArr = [];
    // if (type) {
        for (let i = 0; i < arr.length / page_num; i++) {
            let res = arr.slice(page_num * i, page_num * (i + 1))
            newArr.push(res);
        }
        ////////////////////////////console.log(newArr);
   if(type){
    ////////////////////////////console.log("進來這裏")
     return newArr;
   }else return newArr[0];
}


/**
 * Public Utils
 */
