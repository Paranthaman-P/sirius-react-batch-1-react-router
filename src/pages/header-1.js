import { useEffect, useState, Suspense } from "react"
import './style.css';

function Header1() {
    const [hidden, setHidden] = useState("hidden");

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          // Send Axios request here
          setHidden("display")
        }, 3000)
    
        // Cleanup fn
        return () => clearTimeout(delayDebounceFn)
      })

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <div className={hidden}>
                    <h1>Header Content Goes here...</h1>
                </div>
            </Suspense>
        </>
    )    
    
}

export default Header1;