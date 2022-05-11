import React from 'react'

import {SearchBar} from "../components/header/SearchBar";

export default {
  title: 'Search Bar',
  component: SearchBar,
  argTypes: {}
}

const Template = args => <SearchBar {...args} />

export const SearchBarDemo = Template.bind({})
SearchBarDemo.args = {

}