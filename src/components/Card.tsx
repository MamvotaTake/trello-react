import {CardContainer} from "../styles.ts";

interface CardProps {
    text?: string;
}
export const Card =({text}: CardProps) =>{
    return (
        <CardContainer>
            {text}
        </CardContainer>
    );
}