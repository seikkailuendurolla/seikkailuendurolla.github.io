$(document).ready(function() {
    var original;
    var preview = document.getElementById('preview')

    document.getElementById("image").addEventListener("change", function (e) {

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
        var position = b.target.value;

        updatePreview(position);
    });

    function updatePreview(position) {
        var img = preview.querySelector('img');

        if (! original) {
            original = img;
        }

        watermark([original, "/assets/big-logo.png"])
            .image(watermark.image[position](0.5))
            .then(function(marked) {
                preview.replaceChild(marked, img);
            })
            .then(function () {
                preview.style.width = "100%";
                preview.style.display = "block";
            });

    }
});
