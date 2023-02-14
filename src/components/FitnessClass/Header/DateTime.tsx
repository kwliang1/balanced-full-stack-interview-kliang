import React from "react";

export type DateTimeProps = {
    scheduledDateTime: string;
} & React.ComponentProps<any>;
export default function DateTime(props:DateTimeProps){
    const {scheduledDateTime} = props;
    return(
        <p>{scheduledDateTime}</p>
    )
}