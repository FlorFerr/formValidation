import useInput from '../Hooks/useInput';

const SimpleInput = (props) => {

  const { 
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError, 
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '')

  const { 
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError, 
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'))


  let formIsValid = false

  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true
  }


  const formSubmissionHandler = (e) => {
    e.preventDefault()


    if(!enteredNameIsValid && !enteredEmailIsValid){
      return
    }
    resetNameInput()
    resetEmailInput()

  }

  

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input  type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName}/>
        {nameInputHasError && <p className='error-text'>Name must not be empty</p>}
      </div>

      <div className='form-control'>
        <label htmlFor='email'>Your Email</label>
        <input  type='email' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail}/>
        {emailInputHasError && <p className='error-text'>Please enter a valid email</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
