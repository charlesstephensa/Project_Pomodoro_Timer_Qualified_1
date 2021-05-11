import React from "react"

function TimerAdjust({focusDuration, minutesToDuration, session, setFocus, setBreak, breakDuration, setSession})
{
    const increaseFocus = () =>{
        if (!(focusDuration >= 60 * 60)){
          setFocus(focusDuration + 60 * 5);
        }
          
      }
    
      const increaseBreak = () =>{
        if (!(breakDuration > 15 * 60 )){
          setBreak(breakDuration + 60);
        }
        
      }
    
      const decreaseBreak = () =>{
        if (!(breakDuration <= 60)){
          setBreak(breakDuration - 60);
        }
        
      }
      const decreaseFocus = () =>{
        if(!(focusDuration <= 60 * 5)){
          setFocus(focusDuration - 60 * 5);
        }
        
      }

    return (<div className="row">
    <div className="col">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          {/* TODO: Update this text to display the current focus session duration */}
          Focus Duration: {minutesToDuration(focusDuration/60)}
        </span>
        <div className="input-group-append">
          {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
            disabled = {session}
            onClick = {decreaseFocus}
          >
            <span className="oi oi-minus" />
          </button>
          {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
            disabled = {session}
            onClick = {increaseFocus}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-break">
            {/* TODO: Update this text to display the current break session duration */}
            Break Duration: {minutesToDuration(breakDuration/60)}
          </span>
          <div className="input-group-append">
            {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
              disabled = {session}
              onClick = {decreaseBreak}
            >
              <span className="oi oi-minus" />
            </button>
            {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-break"
              disabled = {session}
              onClick = {increaseBreak}

            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>);
}

export default TimerAdjust;