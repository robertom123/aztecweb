import React from 'react';
import Nav from '../../components/Nav'
import Test from "./Test"
import Form from "./Form"
import Submit from "../../components/Forms/Submit"
import Clock from "../../components/Game/Clock/Clock"
import FormResults from './FormResults'




class FormApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        currentStep: 1,
        charNumber: '',
        timer: '',
        problem: '',
        seconds: '00',
        value: '',
        isSubmitted: false,
        inputVal: '',
        corAns: 0,
        probCounter: 0,
        randomNum: Math.floor(Math.random() * 3 + 1),
        isLoaded: false,
        items: '',
        author: '',
        rando: Math.floor(Math.random() * 100),
        emptyField: '',
        isFilledChar: false,
        isFilledTimer: false,
        isFilledNumber: false,
        isPrevDisabled: false,
        isSubDisabled: true,
        isUserName: this.props.isUserName


        
    }
    this.handleChars = this.handleChars.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
    this.handleNum = this.handleNum.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clock = this.clock.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.handleChangeClock = this.handleChangeClock.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.SolutionsChecker = this.SolutionsChecker.bind(this);
    this.Clicker = this.Clicker.bind(this);
    this.onSubmitScore = this.onSubmitScore.bind(this) 
    this.keyPressed = this.keyPressed.bind(this);
  }

  keyPressed(e){
    e.preventDefault();
        if(e.key === 'Enter'){
          this.Clicker();
          console.log('Enter pressed')    
        }
        console.log('Enter pressed')
  }

  SolutionsChecker(){
    let x = this.state.randomNum;
    let y = this.state.problem;
    y = parseInt(y);
    console.log('This is x ', x)
    console.log('This is y ', y)
    let corrA = x * y;
    console.log(x*y);
    
    let temp = parseInt(this.state.inputVal);
    console.log('Answer', corrA);
    console.log('Input',temp);
    //corrA === temp ? console.log('correct') : console.log('wrong');
    if(corrA === temp){
      this.setState(prev => ({
        corAns : prev.corAns + 1
      }))
      console.log('correct')
    }
    else{
      console.log('wrong')
    }

    //problem counter was here 
    this.setState(prev => ({
      randomNum: Math.floor(Math.random()* 10 + 1),
      probCounter: prev.probCounter + 1
    }))
   
    console.log('corrAns', this.state.corAns)
    console.log('problem', this.state.probCounter)
  }

  Clicker(e){ //checks if anser is correct  
    this.SolutionsChecker();
    this.setState({
      inputVal: '',
    })
    
    //put submit func here
    if(this.state.probCounter === 49){
      console.log('it has reached 50')
    }
    
  }
  //submit score to db 
  onSubmitScore(e){
    e.preventDefault();
  

  }

  handleChangeInput(e){
    this.setState({
      inputVal: e.target.value
    })
  
    console.log(this.state.inputVal);
}

  handleChangeClock(e){
    this.setState({
      value: e.target.value 
    })
    console.log(this.state.value)
  }

  clock(){
    let min = parseInt(this.secondsRemaining / 60,10);
    let sec = parseInt(this.secondsRemaining % 60, 10);

    this.setState({
      value: min,
      seconds: sec
    });

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds
      });
    }

    if (min < 10) {
      this.setState({
        value: "0" + min
      });
    }

    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
    }

    if((min === 0) && (sec === 0)){
      clearInterval(this.intervalHandle);
    }
    //here is to end time 
    //console.log('min: ', this.state.value)
    //console.log('sec: ', this.state.seconds);
    this.secondsRemaining--;
  }

  startTimer(){
    this.intervalHandle = setInterval(this.clock, 1000);
    let time = this.state.timer;
    console.log(typeof(time));
    this.secondsRemaining = time * 60;
    this.setState({
      isClicked: true
    });
  }

  handleChars(e){
    console.log("char", e.currentTarget.children[2].value);
    const val =  e.currentTarget.children[2].value;
    this.setState({
      charNumber: val,
      isFilledChar: true
    }, () =>{console.log("state after:", this.state.charNumber)})
    console.log("state: ", this.state.charNumber)
    console.log('state filled after: ', this.state.isFilled)
    

  }

  handleTimer(e){
    console.log("Timer", e.currentTarget.children[0].value);
    const val =  e.currentTarget.children[0].value;
    this.setState({
      timer: val,
      isFilledTimer: true
    }, () =>{console.log("timer state after:", this.state.timer)})
    console.log("timer state: ", this.state.timer)
  }

  handleNum(e){
    console.log("Num", e.currentTarget.children[0].value);
    const val =  e.currentTarget.children[0].value;
    this.setState({
      problem: val,
      isFilledNumber: true
    }, () =>{console.log("problem state after:", this.state.problem)})
    console.log("problem state: ", this.state.problem)
  }


  handleSubmit(e){
    e.preventDefault();
    this.setState({
      isSubmitted: true,
      isPrevDisabled: true,
      isSubDisabled: false
    })
    console.log("Submit CharNum:", this.state.charNumber);
    console.log("submit timer:", this.state.timer);
    console.log("submit problem:", this.state.problem);
    console.log(this.state.isSubmitted);

  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep -1
    this.setState({currentStep: currentStep})
  }

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep > 2 ? 3 : currentStep + 1;
    this.setState({currentStep: currentStep}) 
  }

lastSubmit = ()  => {
    if(this.state.currentStep === 3){
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <input className="f6 dim br2 ph3 pv2 mb2 dib white bg-dark-green " type = "submit" value = "Submit" onClick = {this.startTimer} disabled = {!(this.state.isFilledChar && this.state.isFilledTimer && this.state.isFilledNumber && this.state.isSubDisabled)}/>
          </form>
        </div>
      )
    }
}

  //changes what page the prev appears
  //to show page 3  if(currentStep !== 1 && currentStep !==3){
  previousButton(){
    let currentStep = this.state.currentStep;
    if(currentStep !== 1){
      return(
        <button
         className = "f6 dim br2 ph3 pv2 mb2 dib white bg-dark-blue"
         type = "button"
         onClick = {this._prev}
         disabled = {this.state.isPrevDisabled} >
         Previous   
        </button>
      )
    }
    return null;
  }

  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
        <button 
          className="f6 dim br2 ph3 pv2 mb2 dib white bg-dark-green" 
          type="button" onClick={this._next}>
        Next
        </button>        
      )
    }
    return null;
  }



  render(){
    if(this.state.probCounter === 50){
      return <FormResults CorrectAns = {this.state.corAns} isUserName = {this.state.isUserName} />
    }
    if((this.state.value === '00') && (this.state.seconds === '00')){
      return <FormResults CorrectAns = {this.state.corAns} isUserName = {this.state.isUserName}  />   
    }

    return(
      <div>
        {!this.state.isUserName ? <Nav/> : null}
        <Form handleChars = {this.handleChars} handleChange = {this.handleChange} currentStep = {this.state.currentStep}/>
        <Test handleNum = {this.handleNum} handleTimer = {this.handleTimer} handleChange = {this.handleChange} currentStep = {this.state.currentStep}/>    
        <div className = "flex items-center justify-center pa4">
          {this.previousButton()}
          {this.nextButton()}
          {this.lastSubmit()}
        </div>
        {this.state.isSubmitted && <Submit keyPressed = {this.keyPressed} empty = {this.state.inputVal} Clicker = {this.Clicker} inputVal = {this.state.inputVal} randomProb = {this.state.randomNum} userChoice = {this.state.problem} handleChangeInput = {this.handleChangeInput} mins = {this.state.value} secs = {this.state.seconds} timerState = {this.state.timer} multiState = {this.state.problem} handleChange = {this.handleChange} currentStep = {this.state.currentStep}/> }
        <Clock test = {this.handleChangeClock} value = {this.state.value} seconds = {this.state.seconds} startTimer = {this.startTimer}  />         
      </div>
    )
  }
}

export default FormApp;
