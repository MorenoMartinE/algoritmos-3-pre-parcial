import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { createUser } from '../Services/Users.js';


const CreateUser = () => {

    const [formData, setFormData] = useState({});
    const [success, setSucces] = useState(false);


    const submmitHandler = async () => {

        let rsp = await createUser(formData);

        if(rsp?.Error === false){
            window.alert('Usuario creado correctamente');
            setSucces(true);
        }else{
            window.alert('Error al crear el usuario');
        }
    }

    return(
        <section className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
            {
                success && (<Navigate to='/users' replace={true} />)
            }
            <label htmlFor="" className="text-sm text-gray-700">New Usr Name</label>
            <input type="text" className="border-double border-4 border-sky-500 text-center" onChange={e => setFormData({...formData, user_name: e.target.value})}/>
            <label htmlFor="" className="text-sm text-gray-700 mt-[.6rem]">New Usr Password</label>
            <input type="password" className="border-double border-4 border-sky-500 text-center"onChange={e => setFormData({...formData, password: e.target.value})}/>
            <button className="text-sm text-white bg-sky-500 mt-[.7rem] py-[.3rem] px-[.6rem] rounded-sm" onClick={submmitHandler}>Crear</button>
        </section>
    );
}

export default CreateUser;