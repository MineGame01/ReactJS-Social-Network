import React from 'react'
import styles from './SearchInput.module.scss'

const SearchInput = props => {
    const {PageNumber, updatePageNumber, SearchText, updateSearchText} = props
    return <div className={styles.body}>
        <div>
            <span>Сторінки: </span>
            <input
                className={'textareaDefault'}
                type="number"
                value={PageNumber}
                onChange={updatePageNumber}
            />
        </div>
        <div>
            <span>Найти по імя: </span>
            <input
                className={'textareaDefault'}
                type="text"
                value={SearchText}
                onChange={updateSearchText}
            />
        </div>
    </div>
}

export default SearchInput