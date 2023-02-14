import React from "react";
import FitnessClass, {FitnessClassType} from "./FitnessClass/FitnessClass";

type FitnessClassCarouselProps = {
    classes: FitnessClassType[]
} & React.ComponentProps<any>
export default function FitnessClassCarousel(props: FitnessClassCarouselProps){
    const {classes} = props;
    return(
        <div
            style={{
                display: "flex",
                maxWidth: '100vw',
                overflowX: 'scroll',
            }}
        >
            {
                classes.map((classObj:FitnessClassType) => {
                    console.info('class', classObj)
                    const {id} = classObj;
                    return (
                        <FitnessClass
                            key={id}
                            fitnessClass={classObj}
                        />
                    )
                })
            }
        </div>
    )
}