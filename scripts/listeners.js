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

let el = document.getElementsByClassName('post')
for (var i=0; i < el.length; i++) {
    let item = el.item(i)
    //listen for tap on post item
    item.onclick = function(e){
        if(item.className.indexOf('tapped') === -1) {
            item.className += ' tapped'
        }
    }
}

//listen for post actions
const g = document.querySelectorAll('.action-item');
for (let i = 0, len = g.length; i < len; i++)
{
    g[i].onclick = function(e){
        e.stopPropagation()
        let count = document.querySelectorAll('.action-item .count')[i]
        if(count.className.indexOf('dirty') === -1) {
            count.value = parseInt(count.value) + 1
            count.className += ' dirty'
        } else {
            count.value = parseInt(count.value) - 1
            count.classList.remove('dirty')
        }

        //untap the post
        let el = document.getElementsByClassName('tapped')
        for (var j=0; j < el.length; j++) {
            el.item(j).classList.remove('tapped')
        }
    }
}

//every 1m, update timestamps
let timeElements = document.getElementsByClassName('time')
for (let i=0; i < timeElements.length; i++) {
    let el = timeElements[i],
        ts = el.getAttribute('data-timestamp')

    setInterval(function(){
        el.innerHTML = moment.unix(ts).fromNow()
    }, 60 * 1000)
}
