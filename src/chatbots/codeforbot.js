
/** This is a sample code for the bot **/
function MessageHandler(context, event) {
    // var nlpToken = "xxxxxxxxxxxxxxxxxxxxxxx";// API.ai token
    // context.sendResponse(JSON.stringify(event));
    sendMessageToApiAi({
        message : event.message,
        sessionId : new Date().getTime() +'api',
        nlpToken : nlpToken,
        callback : function(res){
            //Sample response from apiai here.
            context.sendResponse(JSON.parse(res).result.fulfillment.speech);
        }
    },context)
}
function sendMessageToApiAi(options,botcontext) {
    var message = options.message; // Mandatory
    var sessionId = options.sessionId || ""; // optional
    var callback = options.callback;
    if (!(callback && typeof callback == 'function')) {
       return botcontext.sendResponse("ERROR : type of options.callback should be function and its Mandatory");
    }
    var nlpToken = options.nlpToken;
    
    if (!nlpToken) {
       if (!botcontext.simpledb.botleveldata.config || !botcontext.simpledb.botleveldata.config.nlpToken) {
           return botcontext.sendResponse("ERROR : token not set. Please set Api.ai Token to options.nlpToken or context.simpledb.botleveldata.config.nlpToken");
       } else {
           nlpToken = botcontext.simpledb.botleveldata.config.nlpToken;
       }
    }
    var query = '?v=20150910&query='+ encodeURIComponent(message) +'&sessionId='+sessionId+'&timezone=Asia/Calcutta&lang=en    '
    var apiurl = "https://api.api.ai/api/query"+query;
    var headers = { "Authorization": "Bearer " + nlpToken};
    botcontext.simplehttp.makeGet(apiurl, headers, function(context, event) {
       if (event.getresp) {
           callback(event.getresp);
       } else {
           callback({})
       }
    });
}
/** Functions declared below are required **/
function EventHandler(context, event) {
    if (!context.simpledb.botleveldata.numinstance)
        context.simpledb.botleveldata.numinstance = 0;
    numinstances = parseInt(context.simpledb.botleveldata.numinstance) + 1;
    context.simpledb.botleveldata.numinstance = numinstances;
    context.sendResponse("Thanks for adding me. You are:" + numinstances);
}
/** Greeting with Gordon **/
function MessageHandler(context, event) {
    context.console.log("mr-smith")
    
    if(event.message== "Emergency from Mr. Smith"){
        context.sendResponse("Mr Smith is in Room 18. He has a history of heart related illness. Is the patient in urgent need of emergency care?");
    }
    
    else if(event.message== "Yes") {
        context.sendResponse("I am calling an Ambulance now.");
    }
    
    else if(event.message== "No") {
        context.sendResponse("Please log all information relating to the patients condition and submit the report.");
    }
    
    else if(event.message== "Low level of CO2 detected"){
        context.sendResponse("Our sensors indicate that CO2 levels in Mr Smith's room are critically low. He is still present in the room, so this indicates that Mr Smith may have lost consciousness.");
    }
    
    else if(event.message== "Security") {
        context.sendResponse("Security Notified.");
    }
    
    
    else if(event.message== "smith 7pm"){
        context.sendResponse("Mr Smith requires 1 dose of Sulfasalazine.");
    }
    
    else if(event.message== "bye"){
    context.sendResponse("Goodbye Tom, I hope you have a nice day.");
    }
    
    else if(event.message== "faint"){
        context.sendResponse("Please ask Mr Smith to take a seat and rest for a moment. If his symptoms persist, we can alert the emergency services.");
    } 
    
    else{
        context.sendResponse("What is it I can help you with today?");
    }
}


function HttpResponseHandler(context, event) {
    // if(event.geturl === "http://ip-api.com/json")
    context.sendResponse(event.getresp);
}

function DbGetHandler(context, event) {
    context.sendResponse("testdbput keyword was last get by:" + event.dbval);
}

function DbPutHandler(context, event) {
    context.sendResponse("testdbput keyword was last put by:" + event.dbval);
}

