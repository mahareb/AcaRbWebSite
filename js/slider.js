
    var curIndex = 0,
        imgDuration = 5000,
        slider = document.getElementById("slides"),
        slides = slider.childNodes;
        imgArray = [
            'img/slides/slide4.jpg',
            'img/slides/slide1.jpg',
            'img/slides/slide2.jpg',
            'img/slides/slide3.jpg'
            ];
        capArray =[
            'évenements <hr> <div>AcaROBOTICS réunit les enntreprises afin d’échanger les expériences et rapproche les étudiants au domaine de l’industrie. Elle assure des workshops, des conférences, des séminaires et des compétitions robotiques. </div>',
            'AcaROBOTICS <hr> <div>LEADING THE FUTURE </div>',
            'Consulting <hr> <div>Amélioration de la performance de l’entreprise aveec des cadres ayant un niveau Bac+ 5 et même plus.</div>',
            'Fomations <hr> <div>AcaROBOTICS offre aux étudiants et aux professionnnels des formations assurées par un groupe de formateurs qualifiés, afin d’améliorer leurs compétences techniques. </div>',
        ]
    function buildSlideShow(imgArray,capArray) {
        for (i = 0; i < imgArray.length; i++) {
            var img = document.createElement('img');
            img.src = imgArray[i];
            var cap = document.createElement('p');
            cap.innerHTML = capArray[i];
            slider.appendChild(img);
            slider.appendChild(cap);

        }
    }
    function slideShow() {
        
        function fadeIn(e,f) {
            e.className = "fadeIn";
            f.className = "fadeIn";
        };

        function fadeOut(e,f) {
            e.className = "";
            f.className = "";
        };
            fadeOut(slides[curIndex],slides[curIndex+1]);
            curIndex+=2;
            if (curIndex === slides.length) {
                curIndex = 0;
            }
            
            fadeIn(slides[curIndex],slides[curIndex+1]);

            setTimeout(function () {
                slideShow();
            }, imgDuration);
        };
        buildSlideShow(imgArray,capArray);
    slideShow();
