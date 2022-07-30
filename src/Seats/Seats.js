import styled from "styled-components";

export default function Seats({
    assento,
    poltrona,
    setPoltrona,
    disponivel,
    nome,
    numPoltrona, 
    setNumPoltrona
}) {

    let color = "#C3CFD9"
    let border = "#7B8B99"

    if (!disponivel) {
        color = "#FBE192"
        border = "#F7C52B"
    } else if (poltrona.includes(assento)) {
        color = "#8DD7CF"
        border = "#1AAE9E"
    } else {
        color = "#C3CFD9"
        border = "#7B8B99"
    }

    function choose(id, poltrona, setPoltrona, disponivel,nome) {

        if (!disponivel) {
            alert("Assento Indisponível")
            return null
        }
        if (poltrona.includes(id)) {
            setPoltrona(poltrona.filter((item)=> item !== id))
            setNumPoltrona(numPoltrona.filter((item)=> item !== nome))
            return
        }

        setPoltrona([...poltrona, id])
        setNumPoltrona([...numPoltrona, nome])
    }

    return (
        <Poltrona color={color} border={border} key={assento}
            onClick={() => choose(assento, poltrona, setPoltrona, disponivel,nome)}>
            {nome}
        </Poltrona>
    )
}

const Poltrona = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${props => props.color};
    border: ${props => props.border};
    border-radius: 12px;
    display: flex;
    align-items:center;
    justify-content:center;
    margin:10px 10px;
    cursor:pointer;

`