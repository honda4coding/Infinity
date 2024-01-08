// // // MainComponent.tsx
// import React from "react";
// import styles from "./main.module.scss";

// interface MainProps {
//   mainData: {
//     title: string;
//     logo: string;
//     contentPara?: string;
//     contentList?: string[];
//     contentListOne?: string[];
//     contentListTwo?: string[];
//     contentListThree?: string[];
//     img: string;
//   }[];
//   activeTab: string;
//   openService: (
//     evt: React.MouseEvent<HTMLButtonElement>,
//     Service: string
//   ) => void;
// }

// const MainComponent: React.FC<MainProps> = ({
//   mainData,
//   activeTab,
//   openService,
// }) => {
//   return (
//     <main className={styles.content}>
//       {mainData.map((dataObj) => (
//         <div
//           key={dataObj.title}
//           className={
//             activeTab === dataObj.title
//               ? `${styles.tabContent} ${styles.active}`
//               : `${styles.tabContent} ${styles.hidden}`
//           }
//         >
//           <div className={styles.logoDiv}>
//             <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
//               <title>{`Maintenance Icon`}</title>
//               <image href={dataObj.logo} width="50" height="50" />
//             </svg>
//           </div>

//           <div className={styles.textDiv}>
//             <h2>{dataObj.title}</h2>
//             <div className={styles.textDivChild}>
//               <div className={styles.textDivChildContent}>
//                 <p>{dataObj.contentPara}</p>
//                 {dataObj.contentList && (
//                   <ul>
//                     {dataObj.contentList.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))}
//                   </ul>
//                 )}
//                 {dataObj.contentListOne && (
//                   <>
//                     <h4>{`Drawings`}</h4>
//                     <ul>
//                       {dataObj.contentListOne.map((item, index) => (
//                         <li key={index}>{item}</li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//                 {dataObj.contentListTwo && (
//                   <>
//                     <h4>{`Calculations`}</h4>
//                     <ul>
//                       {dataObj.contentListTwo.map((item, index) => (
//                         <li key={index}>{item}</li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//                 {dataObj.contentListThree && (
//                   <>
//                     <h4>{`Manuals`}</h4>
//                     <ul>
//                       {dataObj.contentListThree.map((item, index) => (
//                         <li key={index}>{item}</li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//               </div>
//               <svg xmlns="http://www.w3.org/2000/svg">
//                 <title>{`Maintenance Icon`}</title>
//                 <image href={dataObj.img} width="300" height="150" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       ))}
//     </main>
//   );
// };

// export default MainComponent;

// AsideComponent.tsx
import React from "react";
import styles from "../../src/styles/pages/services.module.scss";

interface MainProps {
  mainData: {
    titile: string;
    logo: string;
    contantPara?: string;
    contantList?: string[];
    contantListOne?: string[];
    contantListTwo?: string[];
    contantListThree?: string[];
    img: string;
  }[];
  activeTab: string;
  openServ: (evt: React.MouseEvent<HTMLButtonElement>, Serv: string) => void;
}

const MainComponent: React.FC<MainProps> = ({
  mainData,
  activeTab,
  openServ,
}) => {
  return (
    <main className={styles.concnt}>
      {mainData.map((dataOpj) => (
        <>
          <div
            className={
              activeTab === dataOpj.titile
                ? `${styles.tabcontent} ${styles.logoDiv}`
                : `${styles.tabcontent} ${styles.hidden}`
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
              activeTab === dataOpj.titile
                ? `${styles.tabcontent} ${styles.textDiv}`
                : `${styles.tabcontent} ${styles.hidden}`
            }
            key={dataOpj.titile}
          >
            <h2
              key={dataOpj.titile}
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontWeight: 600,
                fontSize: 22,
              }}
            >
              {dataOpj.titile}
            </h2>
            <div className={styles.textDivChild}>
              <div className={styles.textDivChildContant}>
                <p key={dataOpj.titile}>{dataOpj.contantPara}</p>
                {dataOpj.contantList &&
                Array.isArray(dataOpj.contantList) &&
                dataOpj.contantList.length > 0 ? (
                  <ul>
                    {dataOpj.contantList.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ul>
                ) : (
                  ""
                )}
                {dataOpj.contantListOne &&
                Array.isArray(dataOpj.contantListOne) &&
                dataOpj.contantListOne.length > 0 ? (
                  <>
                    <h4>Drawings</h4>
                    <ul>
                      {dataOpj.contantListOne.map((list, index) => (
                        <li key={index}>{list}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  ""
                )}
                {dataOpj.contantListTwo &&
                Array.isArray(dataOpj.contantListTwo) &&
                dataOpj.contantListTwo.length > 0 ? (
                  <>
                    <h4>Calculations</h4>
                    <ul>
                      {dataOpj.contantListTwo.map((list, index) => (
                        <li key={index}>{list}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  ""
                )}
                {dataOpj.contantListThree &&
                Array.isArray(dataOpj.contantListThree) &&
                dataOpj.contantListThree.length > 0 ? (
                  <>
                    <h4>Manuals</h4>
                    <ul>
                      {dataOpj.contantListThree.map((list, index) => (
                        <li key={index}>{list}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  ""
                )}
              </div>
              <svg xmlns="http://www.w3.org/2000/svg">
                <title>Maintenance Icon</title>
                <image href={dataOpj.img} width="300" height="150" />
              </svg>
            </div>
          </div>
        </>
      ))}
    </main>
  );
};

export default MainComponent;
