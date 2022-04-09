export const getCoordsOnClick = e => {
    const target = e.target;
    const x = Math.floor((e.pageX - target.offsetLeft) / target.width * 10000)/100;
    const y = Math.floor((e.pageY - target.offsetTop) / target.width * 10000)/100;
    console.log(x, y);
    return { x, y };
    }