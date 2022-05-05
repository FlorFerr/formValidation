import { useState } from 'react'

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false) 

    const valueIsValid = validateValue(enteredValue)
    const hasError = !valueIsValid && isTouched
  
    const valueChangeHandler = (e) => {
      setEnteredValue(e.target.value)
    }
  
    const inputBlurHandler = () =>{
      setIsTouched(true)
  
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }


  return { value: enteredValue, hasError, validateValue, valueChangeHandler, inputBlurHandler, isValid: valueIsValid, reset}
}

export default useInput