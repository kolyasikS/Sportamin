export const scrollToUp = (animationTime, framesCount, to, e) => {

    e?.preventDefault();

    let scroller = setInterval(function() {
        let scrollBy = document.body.scrollHeight / framesCount;
        if(document.documentElement.scrollTop > to) {
            window.scrollBy(0, -scrollBy);
        } else {
            window.scrollTo(0, to);
            clearInterval(scroller);
        }
    }, animationTime / framesCount);
};