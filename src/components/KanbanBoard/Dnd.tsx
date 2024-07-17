import React, { useCallback, useRef, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const channels = ["todo", "in progress"];
const Dnd = () => {
  const [tasks, setTaskStatus] = useState<any[]>([
    { _id: 1, title: "Task 1", status: "todo" },
  ]);
  const changeTaskStatus = useCallback(
    (id: any, status: any) => {
      let task = tasks.find((task) => task._id === id);
      const taskIndex = tasks.indexOf(task);
      task = { ...task, status };
      console.log({ task });
      //   let newTasks = update(tasks, {
      //     [taskIndex]: { $set: task },
      //   });

      setTaskStatus((prev) => prev.map((p) => (p._id === id ? task : p)));
    },
    [tasks]
  );
  return (
    <DndProvider backend={HTML5Backend}>
      <section style={{ display: "flex", gap: "55px" }}>
        {channels.map((channel) => (
          <KanbanColumn
            key={channel}
            status={channel}
            changeTaskStatus={changeTaskStatus}
          >
            <div>
              <div>{channel}</div>
              <div>
                {tasks
                  .filter((item) => item.status === channel)
                  .map((item) => (
                    <KanbanItem key={item._id} id={item._id}>
                      <div>{item.title}</div>
                    </KanbanItem>
                  ))}
              </div>
            </div>
          </KanbanColumn>
        ))}
      </section>
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
  //   const [d, drag] = useDrag({
  //     item: { type: "card", id },
  //     collect: (monitor: any) => ({
  //       isDragging: monitor.isDragging(),
  //     }),
  //   });

  const [collected, drag, dragPreview] = useDrag(() => ({
    type: "card",
    item: { id },
  }));
  const opacity = (collected as any)?.dragging ? 0 : 1;
  drag(ref);
  return (
    <div ref={ref} style={{ opacity }}>
      {children}
    </div>
  );
};

export default Dnd;
