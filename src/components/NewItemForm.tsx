import {useState} from "react";
import {NewItemButton, NewItemFormContainer, NewItemInput} from "../styles.ts";
import {useFocus} from "./utils/useFocus.ts";

interface NewItemFormProps {
    onAdd(text: string): void
}
export const NewItemForm = (props: NewItemFormProps) => {
    const [text, setText] = useState("")
    const {onAdd} = props
    const inputRef = useFocus()

    return (
        <NewItemFormContainer>
            <NewItemInput
                ref={inputRef}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <NewItemButton onClick={() => onAdd(text)}>
                Create
            </NewItemButton>
        </NewItemFormContainer>
    );
};