
//create a timer to log out in 10 seconds, store the timer in sessionId
var sessionId = setTimeout(function() {console.log("logged out");}, 10000);

//1. create a timer to prompt the user in 5 seconds if they want to stay logged in or not



/**
 * This function prompts the user whether or not they want to stay logged in.
 * If they answer yes, the logout timer is reset.  If they answer no, then
 * the logout timer is allowed to continue to expire.
 */
function promptUser() {

  var response = confirm("You are about to be logged out, do you want to continue your session?");
  if(response) {
    //2. clear the log out timer
    //3. reset the log out timer to exeucte again in another 10 seconds
    //4. reset the prompt timer to ask the user again in 5 seconds
  }

}
