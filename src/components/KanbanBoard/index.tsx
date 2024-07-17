import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Column, ColumnHeader, Container } from "./style";
import Card from "./Card";
import person1 from "../../assets/Images/user1.png";
import person2 from "../../assets/Images/user2.png";
import person3 from "../../assets/Images/user3.png";
import person4 from "../../assets/Images/user4.png";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Dnd from "./Dnd";
import Plus from "@/assets/Icons/Plus";
import Modal from "./Modal";
import { Context } from "@/app/page";
const channels = ["Todo", "In Progress", "Completed"];

const getImage = (name: string) => {
  switch (name) {
    case "person1":
      return person1;
    case "person2":
      return person2;
    case "person3":
      return person3;
    default:
      return person4;
  }
};

const KanbanBoard = () => {
  const [cards, setCards] = useState<any[]>([]);

  const { show, setShow, search } = useContext(Context);
  useEffect(() => {
    const storedTasks = sessionStorage.getItem("tasks");
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    setCards(
      tasks.map((task: any) => ({
        ...task,
        date: new Date(task.date),
        image: getImage(task.image),
      }))
    );
  }, [show]);

  useEffect(() => {
    const storedTasks = sessionStorage.getItem("tasks");
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    setCards(
      tasks
        ?.filter((t: { description: string }) =>
          t.description?.includes(search)
        )
        .map((task: any) => ({
          ...task,
          date: new Date(task.date),
          image: getImage(task.image),
        }))
    );
  }, [search]);

  const changeTaskStatus = useCallback((id: any, status: any) => {
    setCards((prev) => {
      const storedTasks = sessionStorage.getItem("tasks");
      const tasks = storedTasks ? JSON.parse(storedTasks) : [];
      sessionStorage.setItem(
        "tasks",
        JSON.stringify(
          tasks.map((p: any) => (p._id === id ? { ...p, status } : p))
        )
      );
      return prev.map((p) => (p._id === id ? { ...p, status } : p));
    });
  }, []);
  return (
    <DndProvider backend={HTML5Backend}>
      <Modal show={show} close={() => setShow(false)} />
      <Container>
        {channels.map((channel) => (
          <KanbanColumn
            key={channel}
            status={channel}
            changeTaskStatus={changeTaskStatus}
          >
            <Column>
              <ColumnHeader>{channel}</ColumnHeader>
              {cards
                .filter((item) => item.status === channel)
                .map((item) => (
                  <KanbanItem key={item._id} id={item._id}>
                    <Card
                      type={item.type as any}
                      description={item.description}
                      date={item.date}
                      image={item.image}
                    />
                  </KanbanItem>
                ))}
              {channel === "Todo" && (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => setShow(true)}
                >
                  <Plus /> Add Card
                </div>
              )}
            </Column>
          </KanbanColumn>
        ))}
      </Container>
    </DndProvider>
  );
};

const KanbanColumn = ({ status, changeTaskStatus, children }: any) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "card",
    drop(item: any) {
      changeTaskStatus(item.id, status);
    },
  });
  drop(ref);
  return <div ref={ref}> {children}</div>;
};

const KanbanItem = ({ id, children }: any) => {
  const ref = useRef(null);
  const [collected, drag] = useDrag(() => ({
    type: "card",
    item: { id },
  }));
  const opacity = (collected as any)?.dragging ? 0 : 1;
  drag(ref);
  return (
    <div ref={ref} style={{ opacity, width: "100%" }}>
      {children}
    </div>
  );
};

export default KanbanBoard;
