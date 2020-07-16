/*
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
*/

import adminSidebarItem from '@/views/security/adminSidebarItem.js'
import geradorHorarioSidebarItem from '@/views/security/geradorHorarioSidebarItem.js'

const user = JSON.parse(localStorage.getItem('user'))
let itemSidebar = []

if (user.roles.find(rol => rol === 'admin')) {
  itemSidebar = adminSidebarItem
}

if (user.roles.find(rol => rol === 'role1')) {
  itemSidebar = geradorHorarioSidebarItem
}

export default itemSidebar
