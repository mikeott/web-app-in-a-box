// Save options to localStorage.
function save_options() {
  localStorage["url"] = document.getElementById("url").value;

  // Let the user know the options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "<span>The URL was saved</span>";
  setTimeout( function() { status.innerHTML = ""; }, 5000 );
}

// Populate options from from localStorage.
function load_options() {
  var url = localStorage["url"];
  if (url == null) {
      url = "";
  }
  document.getElementById("url").value = url;
}

// call load_options top populate the GUI when the DOM has loaded
document.addEventListener('DOMContentLoaded', load_options);

// call save_options when the user clicks the save button
document.getElementById("save").addEventListener('click', save_options);