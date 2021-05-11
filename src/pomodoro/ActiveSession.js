import React from "react";

function ActiveSession({session, secondsToDuration, focusDuration, breakDuration}){
    //console.log(session);
    
    if (session){
        
        let focusOrBreak = null;
         if (session.label.includes("Focusing")){
        focusOrBreak = focusDuration;
        } else { 
        focusOrBreak = breakDuration;
        }

        let currentValue = 0;
        currentValue = 100 - ((session.timeRemaining/ focusOrBreak) * 100);
         return (<div>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
            {session.label} for {secondsToDuration(focusOrBreak)} minutes
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
             {secondsToDuration(session.timeRemaining)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={currentValue.toString()} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: currentValue.toString() + "%" }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>);
    } else {
        return null;
    }
   
}

export default ActiveSession;