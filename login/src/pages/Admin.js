import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
const Admin = () => {
    const {loginSlice} = useSelector(state => state);
    const navigate = useNavigate();
    console.log(loginSlice);
    useEffect(() => {
        if(!loginSlice.user) {
            navigate("/access/login")
        }
    },[loginSlice, navigate]);
    return (
        <>
            <Nav page="admin"/> 
            <div style={{ padding:'0 50px' }}>
                <h1>{loginSlice.user.name}</h1>
                <p>{loginSlice.user.email}</p>
                <p>Administrador</p>
            </div>
        </>
    )
}

export default Admin;