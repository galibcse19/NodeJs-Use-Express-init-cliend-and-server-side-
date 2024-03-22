 import {useLoaderData} from "react-router-dom";;

const Phone = () => {
    const phone =useLoaderData();
    console.log(phone);
    return (
        <div>
            <ul>
                <li>{phone.name}</li>
                <li>{phone.price}</li>
                <li>{phone.description}</li>
            </ul>
        </div>
    );
};

export default Phone;