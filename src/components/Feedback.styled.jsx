import styled from "@emotion/styled";

export const FeedbackBtnList = styled.ul
`   display: flex;
`;

export const FeedbackBtn = styled.button
`   display: flex;
 margin-left: 10px;
    background-color: beige;
    border-radius: 5px;
    cursor: pointer;
    &:focus{
    background-color: cornflowerblue;
    box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.2),
      0px 3px 3px 0px rgba(0, 0, 0, 0.14),
      0px 3px 5px 0px rgba(0, 0, 0, 0.12);
    }
}`;

export const StatisticsList = styled.li
`     margin-bottom: 5px;
`;





