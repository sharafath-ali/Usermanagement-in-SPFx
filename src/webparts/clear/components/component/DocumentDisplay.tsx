import * as React from 'react'
import styles from '../Clear.module.scss'

type Props = {}

export default function DocumentDisplay({}: Props) {
  return (
    <>
      <div className={styles.tablecontainer}>
              <table>
                  <thead>
                      <tr>
                          <th>name</th>
                          <th>hh</th>
                          <th>Description</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>list</td>
                          <td>g</td>
                          <td>This is a description o</td>
                      </tr>
                      <tr>
                          <td>list</td>
                          <td>h</td>
                          <td>This is a description </td>
                      </tr>
                      <tr>
                          <td>list</td>
                          <td>g</td>
                          <td>This is a des</td>
                      </tr>
                  </tbody>
              </table>
          </div></>
  )
}