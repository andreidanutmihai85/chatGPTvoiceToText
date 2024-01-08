

            
            
            /* JS comes here */
		    function runSpeechRecognition() {
		        // get output div reference
		        var output = document.getElementById("output");
		        // get action element reference
		        var action = document.getElementById("action");
                // new speech recognition object
                var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
                var recognition = new SpeechRecognition();
            
                // This runs when the speech recognition service starts
                recognition.onstart = function() {
                    action.innerHTML = "<small>listening, please speak...</small>";
                
                };
                
                // recognition.onspeechend = function() {
                //     action.innerHTML = "<small>stopped listening, hope you are done...</small>";
                //     recognition.stop();
                // }

                // let prop = "caise";

   
                  

                //======================================
              
                // This runs when the speech recognition service returns result
                recognition.onresult = function(event) {
                    var transcript = event.results[0][0].transcript;
                    // var confidence = event.results[0][0].confidence;

                    output.innerHTML = "<b>Text:</b> "  + transcript /* + "<br/> <b>Confidence:</b> " + confidence*100+"%";*/
                    output.classList.remove("hide");

                    console.log(transcript); //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Aici afiseaza textul in consola

                    voice = transcript;
                };
              
                 // start recognition
                 
	

                 recognition.start();

            }

       

            function compareResult(){
                function caisa(a, b){
                 if(a==b){
                    return true;
                    }else{
                    return false
                }
                
            
                        }
                        
                        let z = caisa(voice,"I love my wife")
                        console.log(z);
                     
                    }

           
              
            
           