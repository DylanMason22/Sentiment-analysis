import React from 'react';


function App() {
  return(
    <div>
      <h1><center>VYPR</center></h1>
      <div class="container">
        <div class="center">
          <textarea id="myText" rows="1" cols="50"></textarea>
        <br/>
      <button onClick={sentiment}>Submit</button>
        <br/>
        <label id = "label"></label>      
      </div>
      <br/>
      </div>
      <a href="http://localhost:3000/"><center>Refresh Page</center></a>
    </div>
  );
}
function sentiment(){
  var status;
  var Sentiment = require('sentiment');
  var sentiment = new Sentiment();
  var response = document.getElementById("myText").value;
  var result = sentiment.analyze(response);
  console.log(result);
        if (result.score < 0) {
          status = ("This Is A Negative Statement")
        }
        else if (result.score > 0) {
          status = ("This Is A Positive Statement")
        }
        else {
          status = ("This Is A Neutral Statement  ")
        }
    var label = document.getElementById("label");
    label.innerHTML = status;
}

export default App;    
