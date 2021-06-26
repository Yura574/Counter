import React from "react";
import '../App.css';
import {Display} from "./Display";
import {Button} from "./Button";


type CounterType = {
    onClickInc: () => void
    onClickReset: () => void
    inc: number
    maxValue: string
    minValue: string
    div: boolean
    setErrorSettingMax: boolean | undefined
    errorSettingStart: boolean | undefined

}


export function Counter(props: CounterType) {

    return (
        <div>
            <div className='Counter'>
                <div className={'count'}>
                    <Display inc={props.inc}
                             maxValue={props.maxValue}
                             div={props.div}
                             setErrorSettingMax={props.setErrorSettingMax}
                             // errorSettingStart={props.errorSettingStart}
                    />
                </div>
                <div>
                    <div className={'buttons'}>
                        <Button
                            className={ 'button1'}
                            inc={props.inc}
                            onClick={props.onClickInc}
                            disabled={props.inc >= JSON.parse(props.maxValue) || props.setErrorSettingMax || props.errorSettingStart || !props.div}
                            title={'Inc'}/>
                        <Button
                            className={'button2'}
                            onClick={props.onClickReset}
                            disabled={props.inc <= JSON.parse(props.minValue) || props.setErrorSettingMax || props.errorSettingStart || !props.div}
                            title={'Reset'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}