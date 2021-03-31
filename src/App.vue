<template>
  <div id="app">
    <OKRTree :objectives="objectives"/>
  </div>
</template>

<script>
import OKRTree from "./components/OKRTree.vue";

export default {
  name: "App",
  components: {
    OKRTree
  },
  data() {
    return {
      objectives: []
    };
  },
  created() {
    let url = "https://okrcentral.github.io/sample-okrs/db.json";

    this.fetchData(url).then(data => {
      console.log('okr data fetched',data)

      let objectives=data.filter(e=>!e.parent_objective_id)
      objectives.forEach(objective => {
        
        objective.expanded=true
        objective.keyResults=[]
        objective.keyResults=data.filter(keyResult=>objective.id==keyResult.parent_objective_id)        
      });
    this.objectives=objectives

    });
  },
  methods: {
    async fetchData(url) {
      let resp = await fetch(url);

      if (resp.ok) {
        let jsonResp = await resp.json();
        return jsonResp.data;
      } else {
        throw Error("error loading OKRs from api");
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  margin: 50px;
}
</style>
