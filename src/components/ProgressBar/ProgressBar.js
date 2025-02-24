/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const progressPercent = Math.round((value / 100) * 370, 0);
  let borderRadius = '4px 0px 0px 4px';
  if (value >= 98) {
    let borderRadius = '4px';
  }

  const Component = {
    small: ProgressSmall,
    medium: ProgressMedium,
    large: ProgressLarge,
  };
  const Progress = Component[size];
  return (
    <Wrapper>
      <Progress
        size={size}
        value={value}
        borderRadius={borderRadius}
      ></Progress>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  max-width: 370px;
  border: 2px solid transparent;
  border-radius: 4px;
`;
const ProgressSmall = styled.div`
  background: ${COLORS.primary};
  height: 8px;
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => (props.value / 100) * 370 + 'px'};
`;

const ProgressMedium = styled(ProgressSmall)`
  height: 12px;
`;
const ProgressLarge = styled(ProgressSmall)`
  height: 24px;
  margin: 4px 2px;
`;

export default ProgressBar;
