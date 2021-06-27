import React from "react";

type DisplayType = {
    inc: number
    maxValue: string
    div: boolean
    setErrorSettingMax: boolean | undefined
    errorSettingStart: boolean | undefined

}

export function Display(props: DisplayType) {
    function text() {
        debugger
        if(props.setErrorSettingMax || props.errorSettingStart){
            return <div className={'incorrectValue'}>Incorrect value</div>
        }
        if (props.div) {
            return (
                <div className={props.inc >= JSON.parse(props.maxValue) ? 'incorrectValue' : ''}>{props.inc}</div>
            )
        }
        if (!props.div) {
            return (
                <div>Enter values end press 'set'</div>
            )
        }

    }

    return (
        <div>
            {text()}
        </div>
    )
}