
$(document).ready(function() {
    var original;
    var preview = document.getElementById('preview')
    var opacity = document.getElementById('opacity')
    var body = $('body');
    var spinner;

    document.getElementById("image").addEventListener("change", function (e) {
        setSpinner();

        var oldImage = preview.querySelector('img');
        if (oldImage != null) {
            preview.removeChild(oldImage);
            original = null;
        }

        watermark([e.target.files[0]])
            .image(function(target) { return target;  })
            .then(function (img) {
                preview.style.display = "none";
                preview.style.width = img.width;
                preview.appendChild(img);
            })
            .then(function () {
                updatePreview("lowerRight");
            });
    });

    $('button').on("click", function(b) {
        setSpinner();
        var position = b.target.value;

        updatePreview(position);
    });

    function setSpinner() {
        spinner = new Spinner({scale: 4, top: '50%', left: '50%', position: 'fixed'}).spin();
        body.append(spinner.el);
        body.css('opacity', 0.5);
    }

    function updatePreview(position) {
        var img = preview.querySelector('img');

        if (! original) {
            original = img;
        }
        watermark([original, "/assets/big-logo.png"])
            .image(watermark.image[position](opacity.value))
            .then(function(marked) {
                preview.replaceChild(marked, img);
            })
            .then(function () {
                preview.style.width = "100%";
                preview.style.display = "block";
                spinner.stop();
                $('body').css('opacity', 1);
            });

    }
});
