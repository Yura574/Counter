import React from "react";

type ButtonType = {
    className?: string
    onClick: () => void
    inc?: number
    disabled?: boolean
    title: string
}

export function Button(props: ButtonType) {
    return (
        <button className={props.className} onClick={props.onClick} disabled={props.disabled}>{props.title}</button>
    )
}