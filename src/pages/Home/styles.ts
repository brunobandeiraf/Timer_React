import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    // Todos alinhados ao centro
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;//56 - espaçamento entre elementos
  }
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['gray-100']};

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  &:disabled {// Se estiver disabled
    opacity: 0.7;
    cursor: not-allowed;
  }
`

// Está utilizando o BaseCountdownButton + algo a mais
export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:not(:disabled):hover {// Se não estiver disabled
    background: ${(props) => props.theme['green-700']};
  }
`

// Está utilizando o BaseCountdownButton + algo a mais
export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};
  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`