import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import ApiContext from '../ApiContext'

export default function PublicOnlyRoute({ component, ...props }) {

  const { loggedIn } = useContext(ApiContext)
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        loggedIn
          ? <Redirect to={'/NotePage'} />
          : <Component {...componentProps} />
      )}
    />
  )
}