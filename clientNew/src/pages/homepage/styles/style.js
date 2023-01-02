import { isMobile } from 'react-device-detect';
import styled from 'styled-components';

export const Logo = styled.button`
  border-radius: ${props => props.borderRadius || '10px'};
  border: 0px solid #292929;
  background-color: ${props => colors(props.color)};
  width: ${props => props.width || '40px'};
  height: ${props => props.height || '40px'};
  color: ${props => props.buttonColor || (props.color === 'primary' ? 'white' : '#292929')};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${props => props.padding || '4px 6px 4px 6px !important'};
  cursor: pointer;
  text-align: ${props => props.textAlign || 'center'};
  margin-right: ${props => props.space ? props.space : 'auto'};
  margin-left: ${props => props.space ? props.space : 'auto'};
  margin-bottom: ${props => props.marginBottom || '0'};
  margin-top: ${props => props.marginTop || '0'};
`;