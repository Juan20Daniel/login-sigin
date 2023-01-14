import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { close } from '../redux/loginSlice';

const Nav = ({page}) => {
    const { user } = useSelector(state => state.loginSlice);
    console.log(user);
    const dispath = useDispatch();
    const navigate = useNavigate();
    const closeSession = () => {
        dispath(close())
        navigate('/access/login');
    }
    return (
        <>
            <div style={{ padding:'0 20px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <p>navegación</p>  
                {page === "Home" &&
                    !user && 
                        <div>
                            <Link to='/access/login' style={{marginRight:'10px'}}>Iniciar sesión</Link>
                            <Link to='/access/sigin'>Crear cuenta</Link>
                        </div>
                }
                {page === "Home" &&
                    user && 
                        <Link to='/admin'>Mi cuenta</Link>
                }
                {page === "admin" &&
                    <div>
                        <Link to='/' style={{marginRight:'10px'}}>Inicio</Link>
                        <button onClick={() => closeSession()}>Cerrar sesión</button>
                    </div>
                }
                {page === "access" && <Link to='/'>Inicio</Link>}
            </div>
            <hr />
            <br />
        </>
    );
}

export default Nav;