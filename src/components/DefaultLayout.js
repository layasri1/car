import React from 'react'

function DefaultLayout(props) {
  return (
    <div>
        <div className="header bs1">
            <div classNmae="d-flex justify-content-between">
                <h1>Share cars</h1>
                <buttton>User</buttton>
            </div>
        </div>
        <div className="content">
            {props.children}
        </div>
    </div>
  )
}

export default DefaultLayout