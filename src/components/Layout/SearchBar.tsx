import React, { useContext } from "react";
import {
  Container,
  CreateTaskButton,
  PeopleContainer,
  SearchContainer,
  SearchInput,
  Title,
} from "./style";
import Search from "@/assets/Icons/Search";
import PersonImage from "../PersonImage";
import person1 from "../../assets/Images/user1.png";
import person2 from "../../assets/Images/user2.png";
import person3 from "../../assets/Images/user3.png";
import person4 from "../../assets/Images/user4.png";
import Image from "next/image";
import PlusRounded from "@/assets/Icons/PlusRounded";
import { Context } from "@/app/page";

const SearchBar = () => {
  const { setShow, setSearch, setUsername } = useContext(Context);

  return (
    <Container>
      <Title>Team Board</Title>
      <SearchContainer>
        <Search />
        <SearchInput onChange={(e) => setSearch(e.target.value)} />
      </SearchContainer>
      <PeopleContainer>
        <PersonImage src={person1} onClick={() => setUsername("person1")} />
        <PersonImage src={person2} onClick={() => setUsername("person2")} />
        <PersonImage src={person3} onClick={() => setUsername("person3")} />
        <PersonImage src={person4} onClick={() => setUsername("person4")} />
      </PeopleContainer>
      <CreateTaskButton onClick={() => setShow(true)}>
        <PlusRounded />
        Create Task
      </CreateTaskButton>
    </Container>
  );
};

export default SearchBar;
