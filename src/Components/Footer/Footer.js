import styled from "styled-components"
export default function Footer({movie, sessao}) {
    if (movie !== undefined) {
        return (

            <Foot>
                <DataFooter>
                    <Imgbox><img src={movie.posterURL} alt="filme" /></Imgbox>
                    <div>
                        <p>{movie.title}</p>
                    </div>
                </DataFooter>
            </Foot>
        )
    }else {
        
        return (
            <Foot>
                <DataFooter>
                    <Imgbox><img src={sessao.movie.posterURL} alt="filme" /></Imgbox>
                    <div>
                        <p>{sessao.movie.title}</p>
                       <p>{sessao.day.weekday} - {sessao.day.date} </p> 
                    </div>
                </DataFooter>
            </Foot>
        )
    }






}

const Foot = styled.div`
    width: 99vw;
    height: 117px;
    left: 0px;
    bottom: 0px;
    position: fixed;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;

    

`
const DataFooter = styled.div`
    display: flex;
    align-items: center;
    
    
p{
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
    

}

`
const Imgbox = styled.div`
 width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;

img {
    width: 48px;
    height: 72px;
}
`