import React, {ChangeEvent} from "react";
import {Input} from "./Input";

type DisplaySettingType = {
    maxValue: string
    minValue: string
    onChangeHandlerMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    errorSettingMax: boolean | undefined
    errorSettingStart: boolean | undefined
}

export function DisplaySetting(props: DisplaySettingType) {
    return (
        <div className={'displaySetting'}>
            <Input
                className={props.errorSettingMax
                    ? 'inputSettingMaxError' : 'inputSettingMax'}
                valueTitle={'max value'}
                value={props.maxValue}
                onChangeHandler={props.onChangeHandlerMaxValue}
                type={'number'}/>
            <Input
                className={props.errorSettingMax || props.errorSettingStart
                    ? 'inputSettingMinError' : 'inputSettingStart'}
                valueTitle={'start value'} value={props.minValue}
                onChangeHandler={props.onChangeHandlerMinValue}
                type={'number'}/>
        </div>
    )
}