import React, {ChangeEvent, useEffect, useState} from 'react';

import './App.css';
import {Counter} from "./Count/Counter";
import {Setting} from "./Count/Setting";


function App() {
    let [maxValue, setMaxValue] = useState('5')
    let [startValue, setStartValue] = useState('0')
    let [inc, setInc] = useState<number>(0)
    let [errorSettingMax, setErrorSettingMax] = useState<boolean | undefined>(false)
    let [errorSettingStart, setErrorSettingStart] = useState<boolean | undefined>(false)
    let [div, setDiv] = useState<boolean>(false)

    let onChangeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
        setDiv(false)
        setErrorSettingMax(false)
    }

    const onChangeHandlerMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.value)
        setDiv(false)
        setErrorSettingMax(false)
        setErrorSettingStart(false)
    }

    useEffect(() => {
        const maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            const newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }

        const minValueAsString = localStorage.getItem('startValue')
        if (minValueAsString) {
            const newMinValue = JSON.parse(minValueAsString)
            setStartValue(newMinValue)
        }
        const setIncLocalStorage = localStorage.getItem('inc')
        if (setIncLocalStorage) {
            const newInc = JSON.parse(setIncLocalStorage)
            setInc(newInc)
        }
    }, [])

    useEffect(() => {
            if (JSON.parse(maxValue) <= JSON.parse(startValue)  ){
                setErrorSettingMax(true)
            }
            if(JSON.parse(startValue) < 0) {
                setErrorSettingStart(true)
            }
    }, [maxValue, startValue])

    function setLocalStorage() {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('inc', JSON.stringify(startValue))
        setInc(JSON.parse(startValue))
        setDiv(true)
    }

    function onClickInc() {
        setInc(++inc)
    }

    function onClickReset() {
        const reset = inc = JSON.parse(startValue)
        setInc(reset)
    }

    return (
        <div>
        <div className={'App'}>
            <Setting
                maxValue={maxValue}
                minValue={startValue}
                setLocalStorage={setLocalStorage}
                onChangeHandlerMaxValue={onChangeHandlerMaxValue}
                onChangeHandlerMinValue={onChangeHandlerMinValue}
                errorSettingMax={errorSettingMax}
                errorSettingStart={errorSettingStart}
                div={div}
            />
            <Counter
                onClickInc={onClickInc}
                onClickReset={onClickReset}
                inc={inc}
                maxValue={maxValue}
                minValue={startValue}
                div={div}
                setErrorSettingMax={errorSettingMax}
                errorSettingStart={errorSettingStart}

            />
           </div>
        </div>
    );
}


export default App;
