export const getCoordsOnClick = e => {
    const target = e.target;
    console.log(e.pageX)
    const x = Math.floor((e.pageX - target.offsetLeft) / target.width * 10000)/100;
    const y = Math.floor((e.pageY - target.offsetTop) / target.width * 10000)/100;
    return [ x, y ];
    }