import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-top: 1rem;
  color: white;
`;
