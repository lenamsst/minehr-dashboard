import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";

/* Routeamento para navegação entre telas, inserido para seguir um padrão de projeto
   e para facilitar implementação de futuras páginas.
*/
function Routes() {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<Home />} />
      </RoutesWrapper>
    </BrowserRouter>
  );
}

export default Routes;
