import React, { useEffect, useState } from "react";

const Introduce = () => {
  let imgArr = [];
  const skillArr = ["90%", "85%", "80%", "60%", "75%", "80%"];
  const [skillList, setSkillList] = useState([]);

  useEffect(() => {
    for (let i = 0; i <= 5; i++) {
      // imgArr[i] = `../assets/image/icon/0${i + 1}.png`;

      let img = new Image();
      img.src = `/assets/image/icon/0${i + 1}.png`;
      img.alt = `0${i + 1}.png`;

      imgArr[i] = img;

      console.log(imgArr[i]);
    }

    console.log("imgArr", imgArr);

    for (const key in skillArr) {
      // console.log("key", key);

      const skill = skillArr[key];
      const img = imgArr[key];

      const skillObj = {
        skill,
        img,
      };

      setSkillList((prev) => [...prev, skillObj]);
    }

    console.log("skillList", skillList);
  }, []);

  return (
    <div className="Introduce">
      <img src="../assets/image/01.png" width="50px" height="50px" alt="" />
      <div id="introDiv">
        {/*  */}
        <div className="profile">
          <p>홍성욱을 소개합니다</p>
          <p>
            <span>홍성욱</span>SeongWook Hong
          </p>
          <p>hsu0407@naver.com</p>
          <p>woogi.dothome.co.kr</p>
        </div>

        <div className="profile">
          <ul>
            <li>
              <p className="category">학력사항</p>
              <p className="explain">
                2017 호서대학교 컴퓨터공학 졸업
                <br />
                2009 분당고등학교 졸업
              </p>
            </li>

            <li>
              <p className="category">경력사항</p>
              <p className="explain">2017.03 - 2020.02 한화손해보험</p>
            </li>

            <li>
              <p className="category">
                보유기술 <span>(NCS 국가 직무 능력 기관 기준)</span>
              </p>
              <div className="explain">
                {skillList.map((item, index) => {
                  console.log("item", item);
                  const { skill, img } = item;

                  return (
                    <div key={index}>
                      <img src={`${img}`} alt="skill" />
                      &nbsp;
                      <span>{skill}</span>
                    </div>
                  );
                })}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
