import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  padding: 10px 0px;
  ${mobile({ height: "50px", margin: "0", padding: "0" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 10px;
  border-radius: 5px;
`;

const Input = styled.input`
  border: none;
  font-size: 20px;
  ${mobile({ width: "50px" })};
`;

const Logo = styled.h1`
  font-weight: bold;

  ${mobile({ fontSize: "24px" })}
`;

const Center = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  text-decoration: none;

  justify-content: flex-end;

  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Link to={"/"}>
              <Logo>GRS.</Logo>
            </Link>
          </Left>

          {/* left */}
          <Center>
            <SearchContainer>
              <Input placeholder="Search " />
              <Search style={{ color: "grey", fontSize: 16 }} />
            </SearchContainer>
          </Center>

          {/* center */}

          {/* Right */}

          <Right>
            <Link to={"/register"}>
              <MenuItem>REGISTER</MenuItem>
            </Link>
            <Link to={"/login"}>
              <MenuItem>SIGN IN </MenuItem>
            </Link>
            <Link to={"/cart"}>
              <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
