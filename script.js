// Clients Date
var today = new Date();
document.getElementById("year").innerHTML = today.getFullYear()

// AutoExpander Class by https://codepen.io/vsync/
$(document).one('focus.autoExpand', 'textarea.autoExpand', function(){
	var savedValue = this.value;
	this.value = '';
	this.baseScrollHeight = this.scrollHeight;
	this.value = savedValue;
}).on('input.autoExpand', 'textarea.autoExpand', function(){
	var minRows = this.getAttribute('data-min-rows') | 0, rows;
	this.rows = minRows;
	rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
	this.rows = minRows + rows;
});

// Information Modal
var modal = document.getElementById("about");
var btn = document.getElementById("info");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() { modal.style.display = "block" }
span.onclick = function() { modal.style.display = "none" }
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

// Settings Modal
var conf = document.getElementById("settings");
var menu = document.getElementById("conf");
var close = document.getElementsByClassName("close")[1];

menu.onclick = function() { conf.style.display = "block" }
close.onclick = function() { conf.style.display = "none" }
window.onclick = function(event) {
	if (event.target == conf) {
		conf.style.display = "none";
	}
}

// Dropper

function dropHandler(ev) {
  console.log('File(s) dropped');

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      // If dropped items aren't files, reject them
      if (ev.dataTransfer.items[i].kind === 'file') {
        var file = ev.dataTransfer.items[i].getAsFile();
        console.log('... file[' + i + '].name = ' + file.name);
      }
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
      console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
    }
  } 
  
  // Pass event to removeDragData for cleanup
  removeDragData(ev)
}

function dragOverHandler(ev) {
  console.log('File(s) in drop zone'); 

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}

function removeDragData(ev) {
  console.log('Removing drag data');

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to remove the drag data
    ev.dataTransfer.items.clear();
  } else {
    // Use DataTransfer interface to remove the drag data
    ev.dataTransfer.clearData();
  }
}