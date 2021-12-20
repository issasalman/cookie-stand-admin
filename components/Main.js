import Form from './Form';
import React, { useState } from "react";


const Main=()=> {
    const [cookiesData, setCookiesData] = useState("");

    const createCookieStand=(event)=> {
        event.preventDefault();
        const data = {
            location: event.target.location.value,
            averageCookies: Number(event.target.avg.value),
            minCustomers: Number(event.target.min.value),
            maxCustomers: Number(event.target.max.value),
        }

        setCookiesData(JSON.stringify(data));
        

    }
    return ( 
        <main>
            <Form cookiestand={createCookieStand} />
          
                <p className="text-center mt-1">Report Table coming Soon...</p>
                    <p className="text-center mt-2">  {cookiesData}</p>
               
        </main>
    );
}

export default Main;