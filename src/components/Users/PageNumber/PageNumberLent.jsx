import React, {useState} from 'react'
import styles from "./PageNumberLent.module.scss";

const PageNumberLent = props => {
    const {PageNumber, postPageNumber, PageNumberURL, NumberPage} = props

    const RedirectPage = (number) => {
        if (number !== PageNumberURL)
            postPageNumber(number)
    }

    const portionCount = Math.ceil(NumberPage / 10)
    let [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * 10 + 1
    const rightPortionPageNumber = portionNumber * 10

    return (
        <div className={styles.PageNumber}>
            <div className={styles.PageNumber__body}>
                {portionNumber > 1 && <button className={'buttonDefault'}
                                              onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
                {
                    PageNumber
                        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map(el => {
                            return <span
                                key={el}
                                onClick={() => RedirectPage(el)}
                                className={`buttonDefault 
                                    ${styles.pageButton} 
                                    ${el === PageNumberURL && styles.active}    `
                                }
                            >{el}</span>
                        })
                }
                {portionCount > portionNumber && <button className={'buttonDefault'}
                                                         onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
            </div>
        </div>
    )
}

export default PageNumberLent;