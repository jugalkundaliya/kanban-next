import React from "react";
import {
  CardContainer,
  CardDesc,
  Chip,
  DateContainer,
  UserImageContainer,
} from "./style";
import moment from "moment";
import PersonImage from "../PersonImage";

export type CardType = "success" | "warning" | "error";

export type CardProps = {
  type: CardType;
  description: string;
  date: Date;
  image: any;
};

const Card = ({ type, description, date, image }: CardProps) => {
  return (
    <CardContainer>
      <Chip variant={type}>
        {type === "success" ? "Low" : type === "warning" ? "Medium" : "High"}
      </Chip>
      <CardDesc>{description}</CardDesc>
      <DateContainer>{moment(date).format("MMM D, YYYY")}</DateContainer>
      <UserImageContainer>
        <PersonImage src={image} />
      </UserImageContainer>
    </CardContainer>
  );
};

export default Card;
