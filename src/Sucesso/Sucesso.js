import { useParams } from "react-router-dom";
export default function Sucesso (){
    const { escolhido } = useParams();
    console.log(escolhido)
    return (
        null
    )
}