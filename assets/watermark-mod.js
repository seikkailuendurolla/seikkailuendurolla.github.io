
$(document).ready(function() {
    var original;
    var preview = document.getElementById('preview')
    var opacity = document.getElementById('opacity')
    var watermarkImage = document.getElementById('watermark')
    var scale;
    var body = $('body');
    var spinner;

    watermarkImage.value = document.cookie;

    if (watermarkImage.value === "") {
        watermarkImage.value = "http://seikkailuendurol.la/assets/big-logo.png";
    }

    var options = {
        init: function (img) {
            img.crossOrigin = 'anonymous';
        }
    };

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

    $('button.position').on("click", function(b) {
        setSpinner();
        var position = b.target.value;

        updatePreview(position);
    });

    $('button.scale').on("click", function(b) {
        var scale_html = parseInt($('#scale').html())

        if (b.target.value == "increase") {
            scale_html += 10;
        } else {
            scale_html -= 10;
        }

        $('#scale').html(scale_html)
        scale = scale_html / 100

        console.log("scale");
        console.log(scale);
    });

    function setSpinner() {
        spinner = new Spinner({scale: 4, top: '50%', left: '50%', position: 'fixed'}).spin();
        body.append(spinner.el);
        body.css('opacity', 0.5);
    }

    function updatePreview(position) {
        document.cookie = watermarkImage.value;
        var img = preview.querySelector('img');

        if (! original) {
            original = img;
        }
        watermark([original, watermarkImage.value], options)
            .image(watermark.image[position](opacity.value, scale))
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
