import { BackgroundCard, MenuIcon, TitleCard } from './styles';

interface PropsCard {
    title: string;
    infoIcon: string;
    menuIcon: string;


}

export default function Card ({title, infoIcon, menuIcon}: PropsCard) {
    return (
    <BackgroundCard >
        <div>
            <TitleCard>{title}
                <img src={infoIcon} alt="InfoCard"/>
                <MenuIcon> 
                <img src={menuIcon} alt="MenuCard"/>        
              
                </MenuIcon> 
                
            </TitleCard> 
  
        </div>

    </BackgroundCard>    
);
}