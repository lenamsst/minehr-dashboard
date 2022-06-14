import Header from "../../components/Header";
import Title from "../../components/Title";
import {
  Wrapper,
  TitleWrapper,
  CardWrapper,
  CardWrapperScatter,
  WrapperChart,
} from "./styles";
import ChartBar from "../../components/ChartBar";
import TasksChartScatter from "../../components/ChartScatter";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonFilter from "../../components/ButtonModal";

function Home() {
  return (
    <div>
      <Header />
      <Wrapper>
        <TitleWrapper>
          <Title title="Dashboard" subtitle="Desafio Técnico Front-end" />

          <ButtonFilter />
        </TitleWrapper>
        <WrapperChart>
          <CardWrapper>
            <ChartBar />
          </CardWrapper>

          <CardWrapperScatter>
            <TasksChartScatter />
          </CardWrapperScatter>
        </WrapperChart>
      </Wrapper>
    </div>
  );
}

export default Home;
