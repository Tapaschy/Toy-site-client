import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title= `${title} - DisneyToy World`
    },[title])
};

export default useTitle;