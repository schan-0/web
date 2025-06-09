import { useState } from 'react';
function ParentComponent(props) {
    const [count, setCount] = useState(0);
    //재랜더링 될 때마다 매번 함수가 새로 생성됨
    const handleClick = useCallback((event) => {
        //클릭 이벤트 처리
    }, []);
    return (
        <div>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                {count}
            </button>
            <ChildComponent handleClick={handleClick} />
        </div>
    );
}
