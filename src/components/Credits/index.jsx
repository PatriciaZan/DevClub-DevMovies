import getImages from "../../utils/getImages";
import { Title, Container } from "./style";

function Credits({ credits }){
    //console.log({credits});
    
    return(
        <>
            <Title>Credits</Title>
            { credits && (
            <Container>
                {credits.slice(0, 5).map( artists => (
                    <div key={artists.id}>
                        <img src={getImages(artists.profile_path)} />
                        <p>{artists.original_name}</p>
                    </div>
                ))}
                <div></div>
            </Container>
        )}
        </>
    )
}

export default Credits