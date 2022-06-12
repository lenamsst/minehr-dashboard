import Header from '../../components/Header';
import Title from '../../components/Title';
import { Wrapper, TitleWrapper, CardWrapper, CardWrapperScatter, WrapperChart} from './styles';
import IconFilter from '../../assets/images/filter.svg';
import Button from '../../components/Button';
import ChartBar from '../../components/ChartBar';
import TasksChartScatter from '../../components/ChartScatter';




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
               <WrapperChart>
                <CardWrapper>   
            
                <ChartBar/>              
                  
                </CardWrapper>  
                
                <CardWrapperScatter >
                 <TasksChartScatter></TasksChartScatter>
          
                </CardWrapperScatter>
                </WrapperChart>
               
            </Wrapper>    
          
        </div>
    )
}

export default Home;