import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UserProviders";

export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContanier>
      <h2>Topページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContanier>
  );
};

const SContanier = styled.div`
  text-align: center;
`;
