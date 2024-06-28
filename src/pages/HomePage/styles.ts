import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  padding: 4em;
`;

export const CardWrapper = styled.div`
  flex: 0 1 calc(25% - 20px);
  box-sizing: border-box;
  margin-bottom: 20px;
`;