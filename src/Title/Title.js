import styled from "styled-components"
export default function Title({ text }) {
    return (
        <Heading>
            <p>{text}</p>
        </Heading>
    )
}

const Heading = styled.div`

    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    width: 100vw;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;

`