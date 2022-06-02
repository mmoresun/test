


const myScroller = document.getElementById('moving');
const containerWidth = myScroller.offsetWidth;

console.log(containerWidth);

// console.log(myScroller);


window.addEventListener('wheel', function (event) {

    const leftPosition = getPosition('left');

    // const leftPosition = 0;

    const step = containerWidth;

    if (event.deltaY < 0) {

        let newPosition = leftPosition + step;
        myScroller.style.left = Math.round(newPosition / 100) * 100 + 'px';
        
        console.log(myScroller.style.left);

    }

    else if (event.deltaY > 0) {

        let newPosition = leftPosition - step;
        myScroller.style.left = Math.round(newPosition / 100) * 100 + 'px';

        console.log(myScroller.style.left);


    }


    
});





function getPosition(type) {
    const styles = window.getComputedStyle(myScroller, null);
    const value = styles[type];
    if (value) {
        return parseInt(value.substring(0, value.length - 2));
    }
    return 0;
}



console.log(myScroller.style.left);

// console.log(getPosition('left'));