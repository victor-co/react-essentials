export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
//const ButtonsContainer = buttonsContainer; // não precisa se na prop em cima já estivar com B \\
// Neste caso a props "ButtonsContainer" deve ser usada como uma tag e ser retornada
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
