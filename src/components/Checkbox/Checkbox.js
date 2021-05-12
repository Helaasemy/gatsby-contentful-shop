import React, { useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../theme';

import CheckIcon from '../../icons/CheckIcon';

const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(false);
  const Container = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 22px;
    margin-bottom: 0;
    margin-left: 20px;
  }
`;
  const CheckboxWrapper = styled.div`
display: flex;
    position: relative;
    align-items: center;
    ${!checked
    && `
      .check-icon {
        path {
          stroke: none;
        }
      }
    `}

    .check-icon {
      width: 37px;
      height: 37px;
    }
    border: 4px solid ${theme.colors.black};
    width: 37px;
    height: 37px;

    input {
      opacity: 0;
      width: 37px;
      height: 37px;
      position: absolute;
      left: 0;
      &:hover {
        cursor: pointer;
      }
    }
  `;
  console.log(checked);
  return (
    <Container>
      <CheckboxWrapper checked={checked}>
        <input type="checkbox" onChange={() => setChecked(!checked)} />
        <CheckIcon />
      </CheckboxWrapper>
      <p>{label}</p>
    </Container>
  );
};

export default Checkbox;
