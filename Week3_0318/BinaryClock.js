function BinaryClock() {
    return(
        <div>
            {update()}
        </div>
    );
}
function update() {
    const now = new Date();
    const hh = z2(now.getHours())           // 00
    const mm = z2(now.getMinutes())         // 12
    const ss = z2(now.getSeconds())         // 30
    const binStr = hh + mm + ss             // 00:12:30 -> 001230
    const style0 = { color: 'brown' }
    const style1 = { color: 'red' }
    const lines = []
    for (let i = 0; i < binStr.length; i++) {
        const v = parseInt(binStr.substr(i, 1))
        const bin = "0000" + v.toString(2)
        const bin8 = bin.substr(bin.length - 4, 4)
        // 이진 숫자를 구성하는 리액트 객체를 lines 배열에 추가합니다. --- (※2)
        for (let j = 0; j < bin8.length; j++) {
            if (bin8.substr(j, 1) === '0') {
                lines.push(<span style={style0}>○</span>)
            } else {
                lines.push(<span style={style1}>●</span>)
            }
        }
        lines.push(<br />)
    }
    return lines;
}
function z2(v) {
    v = String("00" + v)
    return v.substr(v.length - 2, 2)
}
export default BinaryClock;