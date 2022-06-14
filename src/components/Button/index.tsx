import { useState } from "react";
import { Alert } from "react-bootstrap";
import { BackgroundButton, TextButton } from "./styles";

interface PropsButton {
  image: string;
  text: string;
}

export default function Title({ image, text }: PropsButton) {
  const [show, setShow] = useState(true);
  if (show) {

  return (
    <BackgroundButton>
      <img src={image} alt="iconfilter" />
      <TextButton>{text}</TextButton>
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
      
    </BackgroundButton>
  );

  }
}
