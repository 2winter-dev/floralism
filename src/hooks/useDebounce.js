

const debounce=(fn,ms)=>{
     let timer=null;
     return function (...args){
        if(timer){
            clearTimeout(timer);
        }
        timer=setTimeout(()=>{
            fn(...args);
            timer=null;
        },ms)
     }
}

const useDebounce=(fn,ms)=>{
    return debounce(fn, ms);
}

export default useDebounce; 