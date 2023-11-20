import React, { useState, MouseEvent } from "react";
import "./SpinButton.css";

const SpinButton: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [countMessage, setCountMessage] = useState<string>("");
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  const increment = () => {
    if (count === 3) return;

    setCount((prevCount) => prevCount + 1);
    setCountMessage(() => `성인 승객 추가 ${count + 1}`);
  };

  const decrement = () => {
    if (count === 0) return;

    setCount((prevCount) => prevCount - 1);
    setCountMessage(() => `성인 승객 감소 ${count - 1}`);
  };

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <section className='spinButtonContainer'>
      <div>
        <h1>승객 선택</h1>
        <div className='spinButtonLabel'>
          <label>성인</label>
          <div
            className='helpIcon'
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
          >
            ?
            {isTooltipVisible && (
              <span className='tooltip'>최대 인원수는 3명까지 가능합니다</span>
            )}
          </div>
        </div>
        <button
          onClick={decrement}
          className='spinButton'
          aria-label='성인 탑승자 한명 줄이기 버튼'
        >
          -
        </button>
        <input
          type='number'
          readOnly
          className='spinButtonInput'
          aria-label={`성인 ${count} 텍스트 숫자만 수정`}
          value={count}
        />
        <button
          onClick={increment}
          className='spinButton'
          aria-label='성인 탑승자 한명 늘리기 버튼'
        >
          +
        </button>
        <div aria-atomic='true' aria-live='polite' className='visuallyHidden'>
          {countMessage}
        </div>
      </div>
    </section>
  );
};

export default SpinButton;
