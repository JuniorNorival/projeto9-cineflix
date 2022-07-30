import styled from "styled-components";
export default function Legenda() {
    return (
    <Subtitle>
        <div >
            <IconeLegenda color={'#8DD7CF'} borderColor={'#1AAE9E'}  />
            <p>Selecionado</p>
        </div>
        <div >
            <IconeLegenda color={'#C3CFD9'} borderColor={'#7B8B99'} />
            <p>Disponivel</p>
        </div >
        <div >
            <IconeLegenda color={'#FBE192'} borderColor={'#F7C52B'}  />
            <p>Indisponivel</p>
        </div>
    </Subtitle>
    )
}

const Subtitle = styled.div`
    margin:20px auto;
    width: 400px;
    display:flex;
    justify-content:space-around;
    cursor:pointer;
div {
    display:flex;
    flex-direction: column;
    align-items: center;
}
`
const IconeLegenda = styled.div` 
    width: 30px;
    height: 30px;
    background-color: ${props => props.color};
    border: 1px solid ${props => props.borderColor};
    border-radius: 17px;

`