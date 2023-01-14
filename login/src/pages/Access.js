import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import InputGroup from '../components/InputGroup';
import Nav from '../components/Nav';
import { consultAPI } from '../api';
import { useDispatch, useSelector } from 'react-redux'; 
import { getUser } from '../redux/loginSlice';
const Access = () => {
    const { action } = useParams();
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ typeForm, setTypeForm ] = useState(action);
    const { user } = useSelector(state => state.loginSlice);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if(user) {
            navigate('/admin')
        }
    },[user, navigate])
    const changeForm = () => {
        if(typeForm === "login") setTypeForm("sigin");
        if(typeForm === "sigin") setTypeForm("login");
    }
    const requestHTTP = async e => {
        e.preventDefault();
        var result = {}
        if(typeForm === "sigin") {
            if(name === "" || email === "" || password === "") {
                alert("No tiene que haver campos vacíos a la vrg");
                return false;
            }
           result = await consultAPI('http://localhost:3000/api/create-user',{ name, email, password });
        } else {
            if(email === "" || password === "") {
                alert("No tiene que haver campos vacíos a la vrg");
                return false;
            }
           result = await consultAPI('http://localhost:3000/api/login',{ email, password });
        }
        alert(result.message);
        dispatch(getUser(result.data));
        if(result.request) {
            navigate('/admin');
        }
    }

    return (
        <div>
            <Nav page="access" />
            <div style={{width: '100%'}}>
                <form 
                    onSubmit={requestHTTP} 
                    style={{ 
                        width:'300px', 
                        padding:"15px", 
                        minHeight:'200px',
                        borderRadius:'10px',
                        borderWidth:'1px',
                        borderColor:'gray',
                        borderStyle:'solid',
                        margin:'50px auto'
                    }}
                >
                    {typeForm === "sigin" ? <h1>Crear cuenta</h1> : <h1>Iniciar sesión</h1>}
                    {typeForm === "sigin" &&
                        <InputGroup 
                            label="Nombre" 
                            name="name" 
                            setChange={setName} 
                            value={name} 
                            type="text"
                        />
                    }
                    <InputGroup 
                        label="Email" 
                        name="email" 
                        setChange={setEmail} 
                        value={email} 
                        type="email"
                    />
                    <InputGroup
                        label="Password" 
                        name="password" 
                        setChange={setPassword} 
                        value={password} 
                        type="password"
                    />
                    <button type='submit'>Aceptar</button>  
                    <button style={{marginLeft:'10px'}} onClick={() => changeForm()} type="button">
                        {typeForm === "login" ? "Crear cuenta" : "Iniciar sesión"}
                    </button>   
                </form>
            </div>
        </div>
    )
}

export default Access;