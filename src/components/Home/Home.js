import * as React from 'react'
import { view } from 'react-easy-state'
import todoStore from 'stores/todoStore'
import classNames from 'classnames'

import * as css from './Home.scss'

export default view(() => {
  const { items, create, remove, fetchItems } = todoStore
  return (
    <div className={css.container} >
      <div className={css.title}>Home Page</div>
      <div className={classNames(css.mozColumns)}>
        <div className={classNames(css.column, css.isOneFifth)} >
          <button className={classNames(css.button, css.isFullwidth)} data-fetch onClick={fetchItems}>
            Fetch API
      </button>
        </div>
        <div className={classNames(css.column, css.isOneFifth)} >
          <button className={classNames(css.button, css.isFullwidth)} data-add onClick={create}>
            ＋ Add Item
      </button>
        </div>
      </div>
      <div className={classNames(css.mozColumns)}>
        <ul className={classNames(css.column, css.isTwoFifths)} >
          {items &&
            items.map((item, idx) => (
              <li className={css.media} key={idx}>
                <span className={css.mediaContent}>{item.title}{' '}</span>
                <button 
                    className={classNames(css.delete, css.mediaRight)} 
                    data-remove onClick={() => remove(idx)}>
              </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
})
