import React, {ChangeEvent} from "react";

type InputType = {
    valueTitle: string
    type: string
    value: string
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>)=> void
    className?: string
}


export function Input(props: InputType) {
    return (
        <span>
        {props.valueTitle}
            <input
                className={props.className}
                type={props.type }
                value={props.value}
                onChange={props.onChangeHandler}
            />
        </span>
    )
}