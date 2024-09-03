import React from "react";
import { Content } from "../../components/Content";
import { LeftContentWrapper } from "../../components/Content/LeftContentWrapper";
import { AppInstruction } from "../../components/AppInstruction";
import { TaskForm } from "../../components/TaskForm";
import { TaskList } from "../../components/TaskList";
import { TimerContainer } from "../../components/TimerContainer";

export function MainPage() {
  return (
    <Content>
      <LeftContentWrapper>
        <AppInstruction />
        <TaskForm />
        <TaskList />
      </LeftContentWrapper>
      <TimerContainer />
    </Content>
  );
}
