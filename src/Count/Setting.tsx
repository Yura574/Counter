import {Button} from "./Button";
import React, {ChangeEvent} from "react";
import {DisplaySetting} from "./DisplaySetting";


type SettingType = {
    maxValue: string
    minValue: string
    setLocalStorage: () => void
    onChangeHandlerMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    errorSettingMax: boolean | undefined
    div: boolean | undefined
    errorSettingStart: boolean | undefined

}

export function Setting(props: SettingType) {

    return (
        <div>
            <div className='Counter'>
                <div className={'count'}>
                    <DisplaySetting
                        maxValue={props.maxValue}
                        minValue={props.minValue}
                        onChangeHandlerMaxValue={props.onChangeHandlerMaxValue}
                        onChangeHandlerMinValue={props.onChangeHandlerMinValue}
                        errorSettingMax={props.errorSettingMax}
                        errorSettingStart={props.errorSettingStart}

                    />
                </div>
                <div>
                    <div className={'buttons'}>
                        <Button
                            className={'buttonSetting'}
                            onClick={props.setLocalStorage}
                            title={'Set'}
                            disabled={ props.errorSettingMax || props.div}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}