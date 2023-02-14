import React from "react";
import Instructor, {InstructorType} from "./Header/Instructor";
import DateTime from "./Header/DateTime";
import {FitnessClassMetadata, MetaDataComponent} from "./Footer/MetaData";

export type FitnessClassType = {
    id: string,
    title: string
    duration: number
    instructor: InstructorType
    metadata: FitnessClassMetadata
    scheduledDateTime: string
    joinLink: string
}

type FitnessClassProps = {
    fitnessClass:FitnessClassType
} & React.ComponentProps<any>;
export default function FitnessClass(props:FitnessClassProps){
    const {fitnessClass} = props
    const {title, duration, instructor, joinLink, metadata, scheduledDateTime} : FitnessClassType = fitnessClass;
    return(
        <div
            style={{
                minWidth: '300px'
            }}
        >
            <div
                className={'header'}
                style={{
                    display: "flex"
                }}
            >
                <Instructor instructor={instructor}/>
                <DateTime scheduledDateTime={scheduledDateTime}/>
            </div>
            <div className={'title'}>
                <h1>{title}</h1>
            </div>
            <div className={"footer"}>
                <MetaDataComponent data={metadata}/>
            </div>
        </div>
    )
}