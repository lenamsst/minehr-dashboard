import Header from '../../components/Header';
import Title from '../../components/Title';
import { Wrapper, TitleWrapper, CardWrapper} from './styles';
import IconFilter from '../../assets/images/filter.svg';
import Button from '../../components/Button';
import Card from '../../components/Card';
import infoIcon from '../../assets/images/info.svg';
import menuIcon from '../../assets/images/menu.svg';



function Home () {
    return (
      <div>
            <Header/>  
            <Wrapper>
                <TitleWrapper>
                <Title 
                    title="Dashboard"
                    subtitle="Desafio Técnico Front-end"
                />
                <Button image={IconFilter} text="Filtrar" />              
                </TitleWrapper>
                <CardWrapper>
                    <Card
                        title="Barras"
                        infoIcon={infoIcon}
                        menuIcon={menuIcon}
                    />
                    <Card
                        title="Scatter"
                        infoIcon={infoIcon}
                        menuIcon={menuIcon}
                    />
                </CardWrapper>
            </Wrapper>      
        </div>
    )
}

export default Home;