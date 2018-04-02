$(document).ready(function() {
    var original;

    document.getElementById("image").addEventListener("change", function (e) {
        var preview = document.getElementById('preview')

        watermark([e.target.files[0]])
            .image(function(target) { return target;  })
            .then(function (img) {
                preview.appendChild(img);
            })
            .then(function () {
                var img = preview.querySelector('img');
                var original = img;
                var watermarkImage = document.getElementById('watermark').files[0];;
                watermark([original, watermarkImage])
                    .image(watermark.image["upperLeft"](0.5))
                    .then(function(marked) {
                        preview.replaceChild(marked, img);
                });
            });
    });
});
