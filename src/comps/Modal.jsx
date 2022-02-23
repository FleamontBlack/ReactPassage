import styled from "styled-components";

const StyledModal = styled.div`
  background: rgba(22, 22, 22, 0.9);
  color: white;
  top: 15%;

  left: 25%;
  border: 1px solid black;
  position: fixed;
  height: 50vh;
  width: 65vw;
  transition: all 0.5s;
`;

const Modal = (props) => {
  return (
    <>{props.showModal ? <StyledModal>{props.children}</StyledModal> : null}</>
  );
};

export default Modal;
