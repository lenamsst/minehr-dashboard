import { TitleContainer, TitleStyle, SubTitleStyle } from "./styles";

interface PropsTitle {
  title: string;
  subtitle: string;
}

export default function Title({ title, subtitle }: PropsTitle) {
  return (
    <TitleContainer>
      <div>
        <TitleStyle>{title}</TitleStyle>
        <SubTitleStyle>{subtitle}</SubTitleStyle>
      </div>
    </TitleContainer>
  );
}
