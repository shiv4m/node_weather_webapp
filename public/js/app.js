function changeFormAction() {
    var item = document.getElementById("item").value;
    var form = this;
    window.location = "localhost:8080?location="+item;
  }