import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

const DropDown = props => {
  const [animation, setAnimation] = useState(false);
  const [repeat, setRepeat] = useState(null);

  useEffect(() => {
    if (props.visibility) {
      clearTimeout(repeat);
      setRepeat(null);
      setAnimation(true);
    } else {
      setRepeat(
        setTimeout(() => {
          setAnimation(false);
        }, 400)
      );
    }
  }, [props.visibility]);

  return (
    <St.DropDown
      className={`dropdown ${props.visibility ? 'fade-in-dropdown' : 'fade-out-dropdown'}`}
    >
      {animation && props.children}
    </St.DropDown>
  );
};

export default DropDown;

const St = {
  DropDown: styled.article`
    @keyframes fade-in-dropdown-animation {
      0% {
        transform: translateY(-100%);
      }

      100% {
        transform: translateY(0);
      }
    }

    .fade-in-dropdown {
      overflow: hidden;
    }

    .fade-in-dropdown > ul {
      animation: slide-fade-in-dropdown-animation 0.4s ease;
    }

    @keyframes fade-out-dropdown-animation {
      0% {
        transform: translateY(0);
      }

      100% {
        transform: translateY(-100%);
      }
    }

    .fade-out-dropdown {
      overflow: hidden;
    }

    .fade-out-dropdown > ul {
      animation: slide-fade-out-dropdown-animation 0.4s ease;
      animation-fill-mode: forwards;
    }
  `,
};
