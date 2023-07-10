import styled from "styled-components";

const HeaderWrapper = styled.div`
  padding: 10px 24px 0;
  font-size: 24px;
  line-height: 50px;
  font-weight: bold;
  color: #4692ff;
`;

function Header() {
  return (
    <HeaderWrapper>
      <h1>Crello</h1>
    </HeaderWrapper>
  );
}

export default Header;
