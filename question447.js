/**
 * @param {number[][]} points
 * @return {number}
 */
let numberOfBoomerangs = function(points) {
    const getDistance = ( p1, p2 ) => {
        let x = p1[0] - p2[0];
        let y = p1[1] - p2[1];
        return x * x + y * y;
    };
    
    let res = 0, 
        len = points.length;
    for (let i = 0; i < len; i++) {
        let map = new Map();
        for( let j = 0; j < len; j++ ){
            if( i === j ) continue;
            let d = getDistance(points[i], points[j]);
            let v = map.get(d) || 0;
            // two times (left or right)
            if( v > 0 ) res += (v) * 2;
            map.set(d, ++v);
        }
    }
    return res;
};

numberOfBoomerangs([[0,0],[1,0],[2,0]]);