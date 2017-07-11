
    var curIndex = 0,
        imgDuration = 3000,
        slider = document.getElementById("slides"),
        slides = slider.childNodes;
        imgArray = [
            'img/slides/slide1.jpg',
            'img/slides/slide2.jpg',
            'img/slides/slide3.jpg',
            'img/slides/slide4.jpg'
            ];
    function buildSlideShow(arr) {
        for (i = 0; i < arr.length; i++) {
            var img = document.createElement('img');
            img.src = arr[i];
            slider.appendChild(img);
            
        }
    }
    function slideShow() {
        
        function fadeIn(e) {
            e.className = "fadeIn";
        };

        function fadeOut(e) {
            e.className = "";
        };

            debugger;

            fadeOut(slides[curIndex]);
            curIndex++;
            if (curIndex === slides.length) {
                curIndex = 0;
            }
            
            fadeIn(slides[curIndex]);

            setTimeout(function () {
                slideShow();
            }, imgDuration);
        };
        buildSlideShow(imgArray);
    slideShow();
