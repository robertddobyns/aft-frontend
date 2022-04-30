import React from 'react'

import {SearchItem} from "../components/pages/search/SearchItem";

export default {
  title: 'Search Item',
  component: SearchItem,
  argTypes: {

  }
}

const Template = args => <SearchItem {...args} />

export const WithAllData = Template.bind({})
WithAllData.args = {
  id: 1,
  name: 'Test Recipe',
  time: '8-10',
  temp: 400,
  url: 'test-recipe',
  description: 'test'
}

export const WithIntTime = Template.bind({})
WithIntTime.args = {
  id: 1,
  name: 'Test Recipe',
  time: 4,
  temp: 400,
  url: 'test-recipe',
  description: 'test'
}

export const MissingTemp = Template.bind({})
MissingTemp.args = {
  id: 1,
  name: 'Test Recipe',
  time: '8-10',
  temp: null,
  url: 'test-recipe',
  description: 'test'
}

export const MissingDescription = Template.bind({})
MissingDescription.args = {
  id: 1,
  name: 'Test Recipe',
  time: '8-10',
  temp: 400,
  url: 'test-recipe',
  description: null
}