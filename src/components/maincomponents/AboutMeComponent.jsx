import { InfoContainer } from '../InfoContainer';
import { Separator } from '../Separator';

export const AboutMeComponent = ({title, text, imgLink}) => {
    return (
    <>
        <Separator>About me</Separator>
        <InfoContainer 
                title={title} 
                text={text}
                imgLink={imgLink}
        />
    </>
    );
    
}