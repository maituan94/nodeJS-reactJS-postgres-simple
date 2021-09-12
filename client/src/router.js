import React from 'react'
import { Route, Switch } from 'react-router-dom'

import StoreList from './containers/StoreList'
import UnderDevelopment from './containers/UnderDevelopment'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={StoreList} />
      <Route path='/orders' component={UnderDevelopment} />
      <Route path='/suppliers' component={UnderDevelopment} />
      <Route path='/statistic' component={UnderDevelopment} />
      <Route path='/market' component={UnderDevelopment} />
      <Route path='/company-info' component={UnderDevelopment} />
      <Route path='/store-info' component={UnderDevelopment} />
      <Route path='/user-management' component={UnderDevelopment} />
    </Switch>
  )
}
