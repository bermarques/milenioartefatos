import { styled } from "styled-components";
import { COLORS } from "./consts/COLORS";

export const Container = styled.div`
  padding: 0 13%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    padding: 0;
  }

  .details-container {
    margin-top: 50px;
  }

  .details-item {
    display: flex;
    gap: 22px;
  }

  .details-item-info {
    box-shadow: 0 0 2px 1px #dcdcdc;
    padding: 0 18px;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .details-main-data {
    display: flex;
    flex-direction: column;
  }

  .details-title {
    font-size: 30px;
    font-weight: 700;
    color: ${COLORS.GREEN};
  }

  .details-status {
    font-size: 18px;
    font-weight: 600;
  }

  .details-card-description-container {
  }

  .details-green-container {
    color: ${COLORS.GREEN};
  }

  .details-red-container {
    color: ${COLORS.RED};
  }

  .details-button-container {
    text-align: center;
  }

  .details-button {
    font-size: 16px;
    font-weight: 500;
    height: 50px;
    background: ${COLORS.GREEN};
    margin: 28px 0 120px 0;
    text-align: center;
    padding: 0 30px;
    display: inline-flex;
    align-items: center;
    &:hover {
      background: #0d752e !important;
    }
    text-decoration: none;
  }

  .details-description-container {
    margin-top: 75px;
    padding: 24px 18px;
    width: 100%;
    background: ${COLORS.SOFT_GREEN_TWO};
  }

  .details-description-title {
    margin: 0;
    color: ${COLORS.GREEN};
    font-size: 30px;
    font-weight: 400;
  }

  .container-item {
    width: 218px;
    transition: 200ms;
    margin: 20px;
    padding: 10px;
    margin-right: 22px;
    border-radius: 2px;
    &:hover {
      box-shadow: 0 0 7px 2px #dcdcdc;
      transform: scale(1.05);
      /* cursor: pointer; */
    }
  }

  .item-description {
    margin-top: 0;
    margin-bottom: 20px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: pre;
    overflow: hidden;
  }

  .item-details {
    background: ${COLORS.GREEN};
    &:hover {
      color: #fff !important;
      box-shadow: none !important;
    }
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 600;
    margin-bottom: 0;
  }

  .items-container {
    width: 100%;
    height: 405px;
    margin-top: 20px;
    padding: 0px 0 80px 0;
    border-radius: 1px;
  }

  .items-title {
    font-size: 30px;
    margin-bottom: 20px;
    text-align: center;
    color: ${COLORS.BLACK};
  }

  .items {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
