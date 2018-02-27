<template>
    <div class="elevation-2 mr-3 ml-1 pt-4 pb-4 pr-4 pl-4 grey lighten-2" style="width:100%;">
      <v-progress-circular
        :size="200"
        :width="20"
        :rotate="360"
        :value="value"
        color="teal"
    	>
        	<div align="center">{{ value }}<br>CPU Usage</div>
    	</v-progress-circular>
      <v-progress-circular
        :size="150"
        :width="18"
        :rotate="360"
        :value="value"
        color="red"
    	>
        	<div align="center">{{ value }}<br>Temprature</div>
    	</v-progress-circular>
    	<div>
	        <v-list two-line>
	          <template v-for="(item, index) in items">
	            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
	            <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
	            <v-list-tile  v-else :key="item.title" >
	                <span class="mr-4" style="width:70px;">
	                	{{item.tag}}
	                </span>
	              <v-list-tile-content>
	                <v-list-tile-sub-title v-html="item.title">
	                </v-list-tile-sub-title>
	              </v-list-tile-content>
	            </v-list-tile>
	          </template>
	        </v-list>    		
    	</div>
  	</div>
</template>
<script >
  export default {
    data: () => ({
      interval: {},
        items: [
	          { header: 'Today' },
	          { tag: 'Name',
	          	title:'Raswall.domain'
	          },
	          { divider: true, inset: true },
	          { tag: 'System',
	          	title:'Netgate SG-4860 <br> Serial : 1223344567809'
	          },
	          { divider: true, inset: true },
	          { tag: 'Version',
	          	title:'2.3.3-DEVELOPMENT(amd64)'
	          },
	          { divider: true, inset: true },
	          { tag: 'Platform',
	          	title:'Raswall'
	          },
	          { divider: true, inset: true },
	          { tag: 'CPU Type',
	          	title:'Raswall.domain'
	          },
	          { divider: true, inset: true },
	          { tag: 'Hardware crypto',
	          	title:'Raswall.domain'
	          },
	          { divider: true, inset: true },
	          { tag: '',
	          	title:'Raswall.domain'
	          },
	          { divider: true, inset: true },
	          { tag: 'Name',
	          	title:'Raswall.domain'
	          },
	          { divider: true, inset: true },
	          { tag: 'Name',
	          	title:'Raswall.domain'
	          },
	          { divider: true, inset: true },
	          
        ],
      value: 0,
    }),
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 1000)
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
}
</script>
