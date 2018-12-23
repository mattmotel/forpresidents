let WaterCooler = {
  init(socket) {
    let channel = socket.channel('water_cooler:lobby', {})
    channel.join()
    this.listenForChats(channel)
  },

  listenForChats(channel) {
    document.getElementById('chat-form').addEventListener('submit', function(e){
      e.preventDefault()

      let userName = document.getElementById('user-name').value
      let userMsg = document.getElementById('user-msg').value

      channel.push('shout', {name: userName, body: userMsg})


      document.getElementById('user-msg').value = ''
    })

    channel.on('shout', payload => {
      let chatBox = document.querySelector('#recent-tweet')
      let msgBlock = document.createElement('div')

      msgBlock.insertAdjacentHTML('afterbegin', `<div class="tweet"><b>${payload.name}</b>: ${payload.body}</div>`)
      chatBox.appendChild(msgBlock)
    })
  }
}

var coll = document.getElementsByClassName("collapsible");
var i;




for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");


    var content =  document.getElementById("replies");


    var elems = document.getElementsByClassName('replies'),
        size = elems.length;

    for (var i = 0; i < size; i++) {

    var box = elems[i];

    if (box.style.display === "block") {
      box.style.display = "none";
      document.getElementById("show").style.display = "inline";
      document.getElementById("hide").style.display = "none";
    } else {
      box.style.display = "block";
      document.getElementById("show").style.display = "none";
      document.getElementById("hide").style.display = "inline";
    }
    }


  });
}

export default WaterCooler
