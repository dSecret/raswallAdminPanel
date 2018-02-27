<template>
    <div class="elevation-1 pt-4 pb-4 pr-4 pl-4">
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
  	</div>
</template>
<script >
  export default {
    data: () => ({
      interval: {},
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