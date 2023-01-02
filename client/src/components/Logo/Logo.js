import { LogoBtn } from './styles';
  
const Logo = (props) => {
    return (
      <>
        <LogoBtn>{props.children}</LogoBtn>
      </>
    )
};

export default Logo;