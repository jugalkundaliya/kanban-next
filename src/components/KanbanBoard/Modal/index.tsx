import React, { useState } from "react";
import { Button, Input, Select } from "antd";
import { ModalContainer, ModalOverlay } from "../style";
import { createPortal } from "react-dom";
import { Buttons, Form, Title } from "./style";
import InputContainer from "./InputContainer";
import { CardType } from "../Card";
type CardProps = {
  type?: CardType;
  description?: string;
  date?: Date;
  image?: any;
};
const Modal = ({ show, close }: { show: boolean; close: () => void }) => {
  const onSubmit = () => {
    const storedTasks = sessionStorage.getItem("tasks");
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    sessionStorage.setItem(
      "tasks",
      JSON.stringify([
        ...tasks,
        { ...state, status: "Todo", _id: tasks.length + 1 || 1 },
      ])
    );
    close();
  };
  const [state, setState] = useState<CardProps>({});
  const handleChange = (key: keyof CardProps, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };
  return createPortal(
    <ModalOverlay style={{ display: !show ? "none" : "flex" }}>
      <ModalContainer>
        <Title>Create Task</Title>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <InputContainer required label="Task Title">
            <Input
              placeholder="Add task name"
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </InputContainer>
          <InputContainer required label="Priority">
            <Select
              placeholder="Select Priority"
              onChange={(e) => handleChange("type", e)}
              options={[
                { label: "High", value: "error" },
                { label: "Medium", value: "warning" },
                { label: "Low", value: "success" },
              ]}
            />
          </InputContainer>
          <InputContainer required label="User Assign">
            <Select
              placeholder="Select Priority"
              onChange={(e) => handleChange("image", e)}
              options={[
                { label: "user1", value: "person1" },
                { label: "user2", value: "person2" },
                { label: "user3", value: "person3" },
                { label: "user4", value: "person4" },
              ]}
            />
          </InputContainer>
          <InputContainer required label="Date">
            <Input
              type="date"
              onChange={(e) => handleChange("date", e.target.value)}
            />
          </InputContainer>
          <Buttons>
            <Button color="secondary" onClick={close}>
              Cancel
            </Button>
            <Button
              htmlType="submit"
              disabled={
                !state.date || !state.description || !state.image || !state.type
              }
            >
              Create
            </Button>
          </Buttons>
        </Form>
      </ModalContainer>
    </ModalOverlay>,
    document.body
  );
};

export default Modal;
