import { useState } from "react";
const Area = () => {
    const [size, setSize] = useState({ width: 100, height: 100 });
    return (
        <div>
            <h1>너비 : {size.width}, 높이 : {size.height}</h1>
            <button onClick={() => {
                const copy = { ...size };
                copy.width < 150 ? copy.width+=10 : copy.width;
                setSize(copy);
            }}
            >너비 +</button>
            <button onClick={() => {
                const copy = { ...size };
                copy.width > 0 ? copy.width-=10 : copy.width;
                setSize(copy);
            }}
            >너비 -</button>
            <button onClick={() => {
                const copy = { ...size };
                copy.height < 150 ? copy.height+=10 : copy.height;
                setSize(copy);
            }}>
            높이 +</button>
            <button onClick={() => {
                const copy = { ...size };
                copy.height > 0 ? copy.height-=10 : copy.height;
                setSize(copy);
            }}>
            높이 -</button>
        </div>
    );
};
export default Area