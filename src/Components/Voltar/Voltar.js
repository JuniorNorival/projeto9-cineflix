import { useLocation, useNavigate } from "react-router-dom"

export default function Voltar() {
    const navigate = useNavigate();
    const location = useLocation();
    return (

        location.pathname === '/' || location.pathname === '/sucesso'  ? null :
            <ion-icon onClick={() => navigate(-1)}
                name="arrow-back-circle-sharp"></ion-icon>


    )

}