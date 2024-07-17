"use client";
import Logo from "@/assets/Icons/Logo";
import Image from "next/image";
import { MainContainer } from "./style";
import SearchBar from "@/components/Layout/SearchBar";
import KanbanBoard from "@/components/KanbanBoard";
import { createContext, useState } from "react";
export const Context = createContext({
  show: false,
  setShow: (s: boolean) => {},
  search: "",
  setSearch: (s: string) => {},
  username: "",
  setUsername: (s: string) => {},
});
export default function Home() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [username, setUsername] = useState("");
  return (
    <Context.Provider
      value={{ show, search, setShow, setSearch, username, setUsername }}
    >
      <MainContainer>
        <SearchBar />
        <KanbanBoard />
      </MainContainer>
    </Context.Provider>
  );
}
