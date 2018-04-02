$(document).ready(function() {
    var original;
    var preview = document.getElementById('preview')

    document.getElementById("image").addEventListener("change", function (e) {

        watermark([e.target.files[0]])
            .image(function(target) { return target;  })
            .then(function (img) {
                preview.appendChild(img);
            })
            .then(function () {
                updatePreview("upperLeft");
            });
    });

    $('button').on("click", function(b) {
        console.log("BUTTON");
        var position = b.target.value;
        console.log(position);

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
            });

    }
});
