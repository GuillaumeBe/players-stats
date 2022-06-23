import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  max-width: 300px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const Flag = styled.div`
  width: 1.5rem;

  > img {
    border-radius: ${({ theme }) => theme.borderRadius};
    max-width: 100%;
    object-fit: contain;
  }
`;

export const Rank = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Points = styled.div`
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const PlayerInfo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const PlayerImage = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Details = styled.ul`
  color: black;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
