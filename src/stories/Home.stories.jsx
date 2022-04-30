import React from 'react'

import {Home} from '../components/pages/home/Home'

export default {
  title: 'Pages/Home Page',
  component: Home
}

const Template = (args) => <Home {...args} />

export const BaseHomePage = Template.bind({})
BaseHomePage.args = {

}