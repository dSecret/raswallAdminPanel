<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="drawer"
    >
      <v-list dense>
        <template v-for="(item, i) in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="i"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group v-else-if="item.children" v-model="item.model">
            <v-list-tile slot="item" >
              <v-list-tile-action >
                <v-icon>{{ item.model ? item.icon : item['icon_alt'] }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              :to='child.to'
              exact
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content to="/users">
                <v-list-tile-title >
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :to='item.to' exact>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title >
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue darken-5"
      dark
      app
      clipped-left
      fixed
    >
      <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-xs-only">Raswall</span>
      </v-toolbar-title>
      <div class="d-flex align-center" style="margin-left: auto">
        <v-btn icon large>
          <v-avatar size="32px" tile>
            <img
              :src="require('../../../public/raswall.png')"
              alt="Vuetify"
              style="border-radius:50%;"
            />
          </v-avatar>
        </v-btn>
      </div>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    interval: {},
    value: 0,
    drawer: null,
    items: [
      { 
        icon: 'home', 
        text: 'Home', 
        to: '/' 
      },
      {
        icon: 'keyboard_arrow_up',
        icon_alt: 'keyboard_arrow_down',
        text: 'User Management',
        model: false,
        children: [
          { text: 'Users' ,to:'/users' }, 
          { text: 'AuthSessions',to:'/auth-sessions' }, 
          { text: 'UserType',to:'/user-type' },
          { text: 'Weblist' ,to:'/weblist'}
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        icon_alt: 'keyboard_arrow_down',
        text: 'System',
        model: false,
        children: [
          { text: 'AdminProfile', to: '/admin-profile' },
          { text: 'LogOut',to:'/logout' },
          { text: 'Package Manager',to:'/pkg-manager' },
          { text: 'Update' ,to:'/update'}
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        icon_alt: 'keyboard_arrow_down',
        text: 'Interfaces',
        model: false,
        children: [
          { text: 'WAN' ,to:'/wan' },
          { text: 'LAN' , to:'/lan'}
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        icon_alt: 'keyboard_arrow_down',
        text: 'Services',
        model: false,
        children: [
          { text: 'Captive Portal',to:'/captive-portal' },
          { text: 'DHCP Server', to:'/dhcp-server' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        icon_alt: 'keyboard_arrow_down',
        text: 'Firewall',
        model: false,
        children: [
          { text: 'Rules',to:'/rules' }
        ]
      }
    ]
  }),
  props: {
    source: String
  }
}
</script>
