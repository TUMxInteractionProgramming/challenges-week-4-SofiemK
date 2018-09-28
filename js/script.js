/* #6 start the #external #action and say hello */
console.log("App is alive");

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */

function Message(text){
    this.createdBy = currentLocation.what3words;
    this.latitude = currentLocation.latitude;
    this.longitude = currentLocation.longitude;
    this.createdOn = Date.now();
    this.expiresOn = Date.now() + 60*60000;
    this.text=text;
    this.own=true;
}



//global variable currentChannel
 var currentChannel;
 var currentLocation = {
    longitude: "48.145916",
    latitude:"11.562916",
    what3words: "schneien.prüfen.sauber"
 };

function switchChannel(channelName) {

    currentChannel = channelName;

    //Log the channel switch
    console.log("Tuning in to channel", channelName);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelName.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/'+channelName.createdBy+'" target="_blank"><strong>'+channelName.createdBy+'</strong></a>';

    //change star #channel #starred
    starred_value= (channelName.starred == true)? 'fas' : 'far';
    document.getElementById('channel-star').className =   starred_value + " fa-star";

    /* #6 #liking channels on #click */
    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
    
    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName.name + ')').addClass('selected');
}

/* #6 #liking a channel on #click */
function star() {
    $('#channel-star').toggleClass('fas fa-star far fa-star');
    currentChannel.starred = !currentChannel.starred;
}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}

function sendMessage(){
    messageObject = new Message("Hello Chatter");
    console.log (messageObject);
    
}

function createMessageElement(messageObject){
    
}


