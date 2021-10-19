import { useState } from "react";

export function useInfo(key, iniValue) {

    const [value, setValu] = useState(()=>{
        try{

            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : iniValue
        }catch(error){  
            return iniValue
        }
    });

    const setValue = (val) => {

        try {
            setValu(val);
            window.localStorage.setItem(key, JSON.stringify(val));
        } catch (error) {
            console.log(error);
        }

    }

    return [value, setValue]
}