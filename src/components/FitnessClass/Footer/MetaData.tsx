import React from "react";

type MetaDataBaseType = {
    name: string
}

export type FitnessClassMetadata = {
    pace: MetaDataBaseType
    standingPreference: MetaDataBaseType
    type: MetaDataBaseType
}
export type MetaDataComponentProps = {
    data: FitnessClassMetadata
} & React.ComponentProps<any>
export function MetaDataComponent(props:MetaDataComponentProps){
    const{data} = props;
    const{pace, standingPreference, type} = data;
    return (
        <>
            <p>{standingPreference.name}</p>
            -
            <p>{pace.name}</p>
        </>
    )
}