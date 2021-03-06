const MAX_CHAR_COUNT = 140

var users = {
  '1': {
    username: 'marymeeker',
    real_name: 'Mary Meeker',
    verified: true
  },
  '2': {
    username: 'ConanOBrien',
    real_name: 'Conan O\' Brien',
    verified: true
  },
  '3': {
    username: 'baratunde',
    real_name: 'Baratunde',
    verified: false
  }
};

var posts = [
  {
    id: 2374237842,
    user: 1,
    message: 'Spotify has grown to more than 60 million monthly active users, 15 million of whom are paying subscribers.',
    ts: 1337774582
  },
  {
    id: 2374272076,
    user: 2,
    message: 'If I were in prison, I wouldn\'t ruin my spoon trying to tunnel out, because going without morning yogurt is its own prison.',
    ts: 1337968739
  },
  {
    id: 4545435344,
    user: 3,
    message: 'Something beautiful for you from Cornwall. https://media.better.com/microblog/cornwall.jpg',
    ts: 1461607139
  },
  {
    id: 4629293242,
    user: 2,
    reply_to: 4545435344,
    message: 'Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.',
    ts: 1478942943
},
{
    id: 1234455667,
    user: 4,
    message: 'This is the type of message that the person logged in would see whenever they posted it.',
    ts: 1478942945
}
];

let getUser = function(id) {
    return users[id] || {
        name: 'me',
        real_name: 'me',
        verified: false
    }
}

// adds a new post to the posts object, then refreshes the post data
//
//@param int user, user ID for the posts
//@param string message, text of the message we want to add
let insertPost = function() {
    let message = document.getElementById("new-post-text").value

    if(!message) {
        return false;
    }

    //get last post ID
    let id = posts[posts.length - 1].id

    posts.push({
        id: id + 1,
        user: 42,
        message: message,
        ts: new Date().getTime() / 1000
    })

    refreshPosts()

    //reset the textbox value
    document.getElementById("new-post-text").value = ''

    //clear character counter
    document.getElementById("char-count").value = MAX_CHAR_COUNT

    return true
}

// builds the HTML for a post
//
//@param post, post object
//@return string HTML for a post
let buildHTMLForPost = function(post) {
    let checkedPost = checkForAttachment(post.message),
        user = getUser(post.user),
        time = moment.unix(post.ts).fromNow(),
        verified = user.verified ? '<i class="material-icons verified-icon">verified_user</i>': '',
        isAReply = post.reply_to !== undefined,
        hasAttachment = checkedPost.url !== false,
        isMine = user.name == 'me'

    let html = `<div class="inner ${isAReply ? 'reply': ''} ${isMine ? 'mine': ''}">` +
                    `<div class="image-container">` +
                        `<img class="image" src="${isMine ? `images/better-icon.svg` : `images/${user.username}.jpg` }" alt="${user.real_name}"/>` +
                    `</div>` +
                    `<div class="text">` +
                        `<div class="name" user="${post.user}">` +
                            verified +
                            `<span class="real">${user.real_name}</span>` +
                            `<span class="user">@${user.username}</span>` +
                            `<span class="time" data-timestamp=${post.ts}>${time}</span>` +
                        `</div>` +
                        `<q>` +
                            `<ul class="actions">` +
                                `<li class="action-item"><i class="material-icons reply-icon">reply</i><input class="count" value=${Math.round(Math.random(100) * 100)} disabled /></li>` +
                                `<li class="action-item"><i class="material-icons repeat-icon">repeat</i><input class="count" value=${Math.round(Math.random(100) * 100)} disabled /></li>` +
                                `<li class="action-item"><i class="material-icons favorite-icon">favorite</i><input class="count" value=${Math.round(Math.random(100) * 100)} disabled /></li>` +
                            `</ul>` +
                            `<span class="textContent">${checkedPost.message} ${hasAttachment ? '<i class="material-icons link-icon">link</i>': ''}</span>` +
                        `</q>` +
                        `<img class="attachment" src="${checkedPost.url || ''}" />` +
                    `</div>` +
               '</div>'

    return html
}

// checks a message for a url inside a post
//
//@param message, string
//@return {message: stripped message, url: url}
let checkForAttachment = function(message) {
    let url = false,
        newMessage = message

    if(message.indexOf('https://') > -1) {
        let index = message.indexOf('https://'),
            stop = message.indexOf(' ', index)

        if(stop === -1) {
            url = message.substring(index)
        } else {
            url = message.substring(index, stop)
        }

        newMessage = message.substring(0, index)
    }

    return {
        message: newMessage,
        url: url
    }
}

let refreshPosts = function() {
    document.getElementById("timeline").innerHTML = ''

    //chronological order
    posts.sort(function(a,b) {
        return a.ts > b.ts
    })

    posts.map(function(post) {
        var frag = document.createDocumentFragment();
        var el = document.createElement('div');
        el.classList.add('post');
        el.innerHTML = buildHTMLForPost(post);
        frag.appendChild(el);
        timeline.appendChild(frag);
    })

    //scroll down for new posts
    window.scrollTo(0,document.body.scrollHeight)
}

//checks the length of a new post
//updates the char count input
let checkLength = function() {
    let charCountElement = document.getElementById("char-count")

    textLength = document.getElementById("new-post-text").value.length

    charCountElement.value = MAX_CHAR_COUNT - textLength

    if(textLength > MAX_CHAR_COUNT) {
        charCountElement.className = 'error'
        return true
    }
    charCountElement.className = ''
    return false
}

//initialize
refreshPosts()

//listen for submit button
document.getElementById("submit-post").onclick = function(e){
    insertPost()
    return false
}

//listen for enter keypress
function checkEnter(e) {
    if (e.keyCode == 13) {
        insertPost()
        return false
    }
}

//update character counter for a new post
document.getElementById("new-post-text").onkeyup = checkLength;
document.getElementById("new-post-text").onblur = checkLength;

document.getElementById("chart-count")
