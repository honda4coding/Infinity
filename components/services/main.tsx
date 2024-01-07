// // MainComponent.tsx
import React from "react";
import styles from "./main.module.scss";

interface MainProps {
  mainData: {
    title: string;
    logo: string;
    contentPara?: string;
    contentList?: string[];
    contentListOne?: string[];
    contentListTwo?: string[];
    contentListThree?: string[];
    img: string;
  }[];
  activeTab: string;
  openService: (
    evt: React.MouseEvent<HTMLButtonElement>,
    Service: string
  ) => void;
}

const MainComponent: React.FC<MainProps> = ({
  mainData,
  activeTab,
  openService,
}) => {
  return (
    <main className={styles.content}>
      {mainData.map((dataObj) => (
        <div
          key={dataObj.title}
          className={
            activeTab === dataObj.title
              ? `${styles.tabContent} ${styles.active}`
              : `${styles.tabContent} ${styles.hidden}`
          }
        >
          <div className={styles.logoDiv}>
            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
              <title>{`Maintenance Icon`}</title>
              <image href={dataObj.logo} width="50" height="50" />
            </svg>
          </div>

          <div className={styles.textDiv}>
            <h2>{dataObj.title}</h2>
            <div className={styles.textDivChild}>
              <div className={styles.textDivChildContent}>
                <p>{dataObj.contentPara}</p>
                {dataObj.contentList && (
                  <ul>
                    {dataObj.contentList.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
                {dataObj.contentListOne && (
                  <>
                    <h4>{`Drawings`}</h4>
                    <ul>
                      {dataObj.contentListOne.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                {dataObj.contentListTwo && (
                  <>
                    <h4>{`Calculations`}</h4>
                    <ul>
                      {dataObj.contentListTwo.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                {dataObj.contentListThree && (
                  <>
                    <h4>{`Manuals`}</h4>
                    <ul>
                      {dataObj.contentListThree.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <svg xmlns="http://www.w3.org/2000/svg">
                <title>{`Maintenance Icon`}</title>
                <image href={dataObj.img} width="300" height="150" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default MainComponent;
