import React from 'react'
import styles from './styles.module.css'

export default () => (
  <div>
    <pre className="prism-code">
      <span data-scope="source.js" className={`${styles.scope} ${styles.scope0}`}>
        <span data-scope="meta.var.expr.js" className={`${styles.scope} ${styles.scope1}`}>
          <span data-scope="storage.type.js" className={`${styles.scope} ${styles.scope2}`}>
            var
          </span>&nbsp;
          <span data-scope="variable.other.readwrite.js" className={`${styles.scope} ${styles.scope3}`}>
            name
          </span>&nbsp;
          <span data-scope="keyword.operator.assignment.js" className={`${styles.scope} ${styles.scope4}`}>
            =
          </span>&nbsp;
          <span data-scope="string.quoted.single.js" className={`${styles.scope} ${styles.scope5}`}>
            <span data-scope="punctuation.definiton.string.begin.js" className={`${styles.scope} ${styles.scope6}`}>'</span>
            Danny
            <span data-scope="punctuation.definiton.string.end.js" className={`${styles.scope} ${styles.scope7}`}>'</span>
          </span>
        </span>
        <span data-scope="punctuation.terminator.statement.js" className={`${styles.scope} ${styles.scope8}`}>;</span>
      </span>
    </pre>
  </div>
)

// var name = 'Danny';