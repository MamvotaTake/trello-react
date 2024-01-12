import {ColumnContainer, ColumnTitle} from "../styles.ts";
import React from "react";
import {AddNewItem} from "./AddNewItem.tsx";
import {useAppState} from "../AppStateContext.tsx";
import {Card} from "./Card.tsx";

interface ColumnProps {
    text?: string;
    children?: React.ReactNode;
    index: number
}

export const Column = ({text,index}: ColumnProps) => {
    const { state } = useAppState()


    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {state.lists[index].tasks.map(task => (
                <Card text={task.text} key={task.id} />
            ))}
            <AddNewItem
                toggleButtonText="+ Add another task"
                onAdd={console.log}
                dark
            />
        </ColumnContainer>
    );
};