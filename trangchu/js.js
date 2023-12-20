let detailTimLines = document.querySelectorAll('.detailTimeLine');
let duongThang = document.querySelectorAll('.duongThangTimeLine2');

for (let i = 0; i < detailTimLines.length; i++) {
    detailTimLines[i].addEventListener('mouseover', function() {
        for (let j = 0; j <= i; j++) {
            if(i==j){
                duongThang[j].classList.add('animationTimeLine');
            }
            else{
                duongThang[j].classList.add('animationTimeLine1');
            }
        }
    });

    detailTimLines[i].addEventListener('mouseout', function() {
        for (let j = 0; j <= i; j++) {
            duongThang[j].classList.remove('animationTimeLine');
            duongThang[j].classList.remove('animationTimeLine1');
        }
    });
}