$("#photo").change(function (e) {

    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {

        var file = e.originalEvent.srcElement.files[i];

        var img = document.createElement("img");
        img.style.width="100px";
        var reader = new FileReader();
        reader.onloadend = function() {
             img.src = reader.result;
        }
        reader.readAsDataURL(file);
        $("#pp").before(img);
    }
});

$("#photo1").change(function (e) {

    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {

        var file = e.originalEvent.srcElement.files[i];

        var img = document.createElement("img");
        img.style.width="100px";
        var reader = new FileReader();
        reader.onloadend = function() {
             img.src = reader.result;
        }
        reader.readAsDataURL(file);
        $("#pp-front").before(img);
    }
});

$("#visa-photo").change(function (e) {

    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {

        var file = e.originalEvent.srcElement.files[i];

        var img = document.createElement("img");
        img.style.width="100px";
        var reader = new FileReader();
        reader.onloadend = function() {
             img.src = reader.result;
        }
        reader.readAsDataURL(file);
        $("#visa").before(img);
    }
});

$("#citizen-photo").change(function (e) {

    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {

        var file = e.originalEvent.srcElement.files[i];

        var img = document.createElement("img");
        img.style.width="100px";
        var reader = new FileReader();
        reader.onloadend = function() {
             img.src = reader.result;
        }
        reader.readAsDataURL(file);
        $("#citizen").before(img);
    }
});

$("#sign-photo").change(function (e) {

    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {

        var file = e.originalEvent.srcElement.files[i];

        var img = document.createElement("img");
        img.style.width="100px";
        var reader = new FileReader();
        reader.onloadend = function() {
             img.src = reader.result;
        }
        reader.readAsDataURL(file);
        $("#signature").before(img);
    }
});

$("#utility-photo").change(function (e) {

    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {

        var file = e.originalEvent.srcElement.files[i];

        var img = document.createElement("img");
        img.style.width="100px";
        var reader = new FileReader();
        reader.onloadend = function() {
             img.src = reader.result;
        }
        reader.readAsDataURL(file);
        $("#utility").before(img);
    }
});

$("#address-photo").change(function (e) {

    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {

        var file = e.originalEvent.srcElement.files[i];

        var img = document.createElement("img");
        img.style.width="100px";
        var reader = new FileReader();
        reader.onloadend = function() {
             img.src = reader.result;
        }
        reader.readAsDataURL(file);
        $("#address").before(img);
    }
});

        $(function () {
            $('#btnUpload').on("click", function () {
                var sizeInKb = parseFloat($('#photo').prop("files")['0'].size / 1024).toFixed(2);
                var fileName = $('#photo').prop("files")['0'].name;
                uploadProgress = $('#dvProgress').progressbarManager({
                    totalValue: sizeInKb,
                    initValue: '0kb',
                    animate: true,
                    stripe: true,
                    style: 'primary'
                });
                var chunk = 0;
                var uploading = setInterval(function () {
                    uploadProgress.setValue(chunk);
                    if (uploadProgress.isComplete()) {
                        clearInterval(uploading);
                        uploadProgress.style('success');
                    }
                    chunk += 500;
                }, 500);
            });
        });


$(function () {
        $('#btnUpload1').on("click", function () {
            var sizeInKb = parseFloat($('#photo1').prop("files")['0'].size / 1024).toFixed(2);
            var fileName = $('#photo1').prop("files")['0'].name;
            uploadProgress = $('#dvProgress1').progressbarManager({
                totalValue: sizeInKb,
                initValue: '0kb',
                animate: true,
                stripe: true,
                style: 'success'
            });
            var chunk = 0;
            var uploading = setInterval(function () {
                uploadProgress.setValue(chunk);
                if (uploadProgress.isComplete()) {
                    clearInterval(uploading);
                    uploadProgress.style('success');
                }
                chunk += 500;
            }, 500);
        });
    });

    $(function () {
        $('#btnUpload2').on("click", function () {
            var sizeInKb = parseFloat($('#visa-photo').prop("files")['0'].size / 1024).toFixed(2);
            var fileName = $('#visa-photo').prop("files")['0'].name;
            uploadProgress = $('#dvProgress2').progressbarManager({
                totalValue: sizeInKb,
                initValue: '0kb',
                animate: true,
                stripe: true,
                style: 'primary'
            });
            var chunk = 0;
            var uploading = setInterval(function () {
                uploadProgress.setValue(chunk);
                if (uploadProgress.isComplete()) {
                    clearInterval(uploading);
                    uploadProgress.style('success');
                }
                chunk += 500;
            }, 500);
        });
    });

    $(function () {
        $('#btnUpload3').on("click", function () {
            var sizeInKb = parseFloat($('#citizen-photo').prop("files")['0'].size / 1024).toFixed(2);
            var fileName = $('#citizen-photo').prop("files")['0'].name;
            uploadProgress = $('#dvProgress3').progressbarManager({
                totalValue: sizeInKb,
                initValue: '0kb',
                animate: true,
                stripe: true,
                style: 'primary'
            });
            var chunk = 0;
            var uploading = setInterval(function () {
                uploadProgress.setValue(chunk);
                if (uploadProgress.isComplete()) {
                    clearInterval(uploading);
                    uploadProgress.style('success');
                }
                chunk += 500;
            }, 500);
        });
    });

    $(function () {
        $('#btnUpload4').on("click", function () {
            var sizeInKb = parseFloat($('#sign-photo').prop("files")['0'].size / 1024).toFixed(2);
            var fileName = $('#sign-photo').prop("files")['0'].name;
            uploadProgress = $('#dvProgress4').progressbarManager({
                totalValue: sizeInKb,
                initValue: '0kb',
                animate: true,
                stripe: true,
                style: 'primary'
            });
            var chunk = 0;
            var uploading = setInterval(function () {
                uploadProgress.setValue(chunk);
                if (uploadProgress.isComplete()) {
                    clearInterval(uploading);
                    uploadProgress.style('success');
                }
                chunk += 500;
            }, 500);
        });
    });

    $(function () {
        $('#btnUpload5').on("click", function () {
            var sizeInKb = parseFloat($('#utility-photo').prop("files")['0'].size / 1024).toFixed(2);
            var fileName = $('#utility-photo').prop("files")['0'].name;
            uploadProgress = $('#dvProgress5').progressbarManager({
                totalValue: sizeInKb,
                initValue: '0kb',
                animate: true,
                stripe: true,
                style: 'primary'
            });
            var chunk = 0;
            var uploading = setInterval(function () {
                uploadProgress.setValue(chunk);
                if (uploadProgress.isComplete()) {
                    clearInterval(uploading);
                    uploadProgress.style('success');
                }
                chunk += 500;
            }, 500);
        });
    });

    $(function () {
        $('#btnUpload6').on("click", function () {
            var sizeInKb = parseFloat($('#address-photo').prop("files")['0'].size / 1024).toFixed(2);
            var fileName = $('#address-photo').prop("files")['0'].name;
            uploadProgress = $('#dvProgress6').progressbarManager({
                totalValue: sizeInKb,
                initValue: '0kb',
                animate: true,
                stripe: true,
                style: 'primary'
            });
            var chunk = 0;
            var uploading = setInterval(function () {
                uploadProgress.setValue(chunk);
                if (uploadProgress.isComplete()) {
                    clearInterval(uploading);
                    uploadProgress.style('success');
                }
                chunk += 500;
            }, 500);
        });
    });


function upload(){
    console.log("Hit");
    var btn = document.getElementById("btnUpload");
    btn.classList.add("show");
}
function upload1(){
var btn = document.getElementById("btnUpload1");
    btn.classList.add("show");
}
function upload2(){
var btn = document.getElementById("btnUpload2");
    btn.classList.add("show");
}
function upload3(){
var btn = document.getElementById("btnUpload3");
    btn.classList.add("show");
}
function upload4(){
var btn = document.getElementById("btnUpload4");
    btn.classList.add("show");
}
function upload5(){
var btn = document.getElementById("btnUpload5");
    btn.classList.add("show");
}
function upload6(){
var btn = document.getElementById("btnUpload6");
    btn.classList.add("show");
}