


const myScroller = document.getElementById('moving');

// console.log(myScroller);


window.addEventListener('wheel', function (event) {

    const leftPosition = getPosition('left');

    const step = 200;

    if (event.deltaY < 0) {

        const newPosition = leftPosition + step;
        myScroller.style.left = newPosition + 'px';
        // console.log(getPosition('left'));

    }

    else if (event.deltaY > 0) {

        const newPosition = leftPosition - step;
        myScroller.style.left = newPosition + 'px';

        // console.log(getPosition('left'));
    }

})



function getPosition(type) {
    const styles = window.getComputedStyle(myScroller, null)
    const value = styles[type]
    if (value) {
        return parseInt(value.substring(0, value.length - 2))
    }
    return 0
}

// console.log(getPosition('left'));