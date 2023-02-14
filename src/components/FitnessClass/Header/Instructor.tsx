import React from "react";

export type InstructorType = {
    name: string
}

type InstructorComponentProps = {
    instructor: InstructorType
} & React.ComponentProps<any>
export default function Instructor(props:InstructorComponentProps){
    const {instructor} = props;
    const {name} = instructor;
    return(
        <p>{name}</p>
    )
}