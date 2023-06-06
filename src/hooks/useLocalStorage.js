export function useLocalStorage(key, fallbackValue) {
    const [storage, setStorage] = useState(fallbackValue);


    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storage));
    }, [key, storage]);

    useEffect(() => {
        const value = localStorage.getItem(key);
        setStorage(value ? JSON.parse(value) : fallbackValue);
    }, [fallbackValue, key]);


    return [value, setValue];
}