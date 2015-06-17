$(document).ready(function(){
(function(){

  var uploadAjax = document.getElementById("upload_data");
  var progressBar = $("#progress");
  var uploadProgress = $("#upload_progress");
  var percentage = $("#upload_percentage");
  var success = false;
  var uploading = false;

  var xhr = new XMLHttpRequest();
  xhr.upload.addEventListener("progress", updateProgress, false);
  xhr.open('POST', uploadAjax.action, true);
  xhr.onload = function(){
    if ((xhr.status === 200) || (xhr.status === 302)){
      success = true;
      uploading = false;
    } else {
      success = false;
      uploading = false;
    }
  }

  function updateProgress(event){
    var percentComplete = parseInt((event.loaded / event.total) * 100);
    uploadProgress.attr("aria-valuenow", percentComplete);
    uploadProgress.css("width", percentComplete + "%");
    if (percentComplete == 100){
      percentage.html("Completed");
    } else {
      percentage.html(percentComplete + "%");
    }
  }

  function disableForm(formId){
    $("#" + formId).find(":input").attr("disabled", true);
    $("#" + formId).css({
      "background-color": "#f5f5f5",
      "border-radius": "8px",
    });
  }

  uploadAjax.onsubmit = function(event){
    uploading = true;
    disableForm("upload_data");
    event.preventDefault();
    progressBar.attr("hidden", false);
    var zipfile = uploadAjax.uploaded_data.files[0];
    var indexName = uploadAjax.name.value;
    var csrf_token = uploadAjax.csrfmiddlewaretoken.value;

    var formData = new FormData();
    formData.append("csrfmiddlewaretoken", csrf_token);
    formData.append("name", indexName);
    formData.append("uploaded_data", zipfile, zipfile.name);

    xhr.send(formData);
  }

  window.onbeforeunload = function(event){
    if (uploading == true){
      return "Reloading or navgating away from this page will cause the upload to fail.";
    }
  }

})();
});
