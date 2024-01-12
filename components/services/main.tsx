import React from "react";
// import styles from "./main.module.scss";
import styles from "../../src/styles/pages/services.module.scss";

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
      {mainData.map((dataOpj) => (
        <>
          <div
            className={
              activeTab === dataOpj.title
                ? `${styles.tabContent} ${styles.logoDiv}`
                : `${styles.tabContent} ${styles.hidden}`
            }
            key={dataOpj.logo}
            style={{ paddingTop: "10px" }}
          >
            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
              <title>Maintenance Icon</title>
              <image href={dataOpj.logo} width="50" height="50" />
            </svg>
          </div>

          <div
            className={
              activeTab === dataOpj.title
                ? `${styles.tabContent} ${styles.textDiv}`
                : `${styles.tabContent} ${styles.hidden}`
            }
            key={dataOpj.title}
          >
            <h2
              key={dataOpj.title}
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontWeight: 600,
                fontSize: 22,
              }}
            >
              {dataOpj.title}
            </h2>
            <div className={styles.textDivChild}>
              <div className={styles.textDivChildContent}>
                <p key={dataOpj.title}>{dataOpj.contentPara}</p>
                {/* ... Other text content rendering */}
                {dataOpj.contentList &&
                Array.isArray(dataOpj.contentList) &&
                dataOpj.contentList.length > 0 ? (
                  <ul>
                    {dataOpj.contentList.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ul>
                ) : (
                  ""
                )}
                {dataOpj.contentListOne &&
                Array.isArray(dataOpj.contentListOne) &&
                dataOpj.contentListOne.length > 0 ? (
                  <>
                    <h3>Drawings</h3>
                    <ul>
                      {dataOpj.contentListOne.map((list, index) => (
                        <li key={index}>{list}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  ""
                )}
                {dataOpj.contentListTwo &&
                Array.isArray(dataOpj.contentListTwo) &&
                dataOpj.contentListTwo.length > 0 ? (
                  <>
                    <h3>Calculations</h3>
                    <ul>
                      {dataOpj.contentListTwo.map((list, index) => (
                        <li key={index}>{list}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  ""
                )}
                {dataOpj.contentListThree &&
                Array.isArray(dataOpj.contentListThree) &&
                dataOpj.contentListThree.length > 0 ? (
                  <>
                    <h3>Manuals</h3>
                    <ul>
                      {dataOpj.contentListThree.map((list, index) => (
                        <li key={index}>{list}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  ""
                )}
              </div>
              <img
                src={dataOpj.img}
                alt="Service Image"
                className={styles.serviceImage}
                width={500}
                height={250}
              />
            </div>
          </div>
        </>
      ))}
    </main>
  );
};

export default MainComponent;
