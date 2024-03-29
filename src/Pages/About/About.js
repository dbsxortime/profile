import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getMenuObject } from "util/nav";

function About({ wheelBlock, setWheelBlock, goNextPage, goPrevPage }) {
  const location = useLocation();
  const aboutChild = getMenuObject()[location.pathname].child;
  const [obj, setObj] = useState(aboutChild[0]);
  const [touchPosition, setTouchPosition] = useState();

  const touchEnd = (e) => {
    if (wheelBlock === true) return;
    if (touchPosition.y - e.changedTouches[0].pageY > 20) {
      // next event
      checkNextPage();
    } else if (touchPosition.y - e.changedTouches[0].pageY < -20) {
      // prev event
      checkPrevPage();
    }
  };

  const checkPrevPage = () => {
    // prev event
    if (obj.url !== "profile") {
      setObj(aboutChild[aboutChild.indexOf(obj) - 1]);
    } else {
      goPrevPage();
    }
  };

  const checkNextPage = () => {
    // next event
    if (obj.url !== "iam") {
      setObj(aboutChild[aboutChild.indexOf(obj) + 1]);
    } else {
      goNextPage();
    }
  };

  const handleOnWheel = (e) => {
    e.stopPropagation();
    if (wheelBlock === true) {
      return;
    }

    setWheelBlock(true);
    if (e.nativeEvent.wheelDelta < 0) {
      // next event
      checkNextPage();
    }
    if (e.nativeEvent.wheelDelta > 0) {
      // prev event
      checkPrevPage();
    }
  };

  return (
    <>
      <h2>About Me</h2>
      <SubMenu onWheel={handleOnWheel}>
        {aboutChild.map((menu) => {
          return (
            <button key={menu.url} onClick={() => setObj(menu)}>
              <h3 className={obj.table === menu.table ? "active" : null}>
                {menu.name}
              </h3>
            </button>
          );
        })}
      </SubMenu>
      <TableWapper
        onWheel={handleOnWheel}
        onTouchStart={(e) =>
          setTouchPosition({
            x: e.changedTouches[0].pageX,
            y: e.changedTouches[0].pageY,
          })
        }
        onTouchEnd={touchEnd}
      >
        {obj.table}
      </TableWapper>
    </>
  );
}

export default About;

const SubMenu = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-around;
  margin: 3rem 0;
`;

const TableWapper = styled.div`
  width: 50%;
  height: 38rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
