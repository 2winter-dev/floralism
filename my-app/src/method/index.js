export const spliceArr = (arr, page_num) => {
    let newArr = [];
    // if (type) {
        for (let i = 0; i < arr.length / page_num; i++) {
            let res = arr.slice(page_num * i, page_num * (i + 1))
            newArr.push(res);
        }
    // } else {
    //     for (let i = 0; i < arr.length / 8; i++) {
    //         let res = arr.slice(8 * i, 8* (i + 1))
    //         newArr.push(res);
    //     }
    // }
    //console.log(newArr);

    return newArr;
}