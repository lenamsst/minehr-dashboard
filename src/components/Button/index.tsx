import { BackgroundButton, TextButton } from "./styles";

interface PropsButton {
  image: string;
  text: string;
}

export default function Title({ image, text }: PropsButton) {
  return (
    <BackgroundButton>
      <img src={image} alt="iconfilter" />
      <TextButton>{text}</TextButton>
    </BackgroundButton>
  );
}
