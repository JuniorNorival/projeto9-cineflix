import styled from "styled-components"
export default function Title({ text }) {
    return (
        <Heading>
            <p>{text}</p>
        </Heading>
    )
}

const Heading = styled.div`
    margin: 40px auto 25px auto;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    width: 100vw;
    
    display: flex;
    justify-content: center;
    align-items: center;

`