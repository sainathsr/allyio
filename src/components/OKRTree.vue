<template>
  <div class="okr-tree-root">

            <ul class="objective-list">
        
           <li v-for="objective in objectives" :key="objective.id" class="objective-item">
                {{objective.title}}

                    <ul class="key-result-list">
                            <li v-for="keyResult in objective.keyResults" :key="keyResult.id" class="key-result-item">
                                    {{keyResult.title}}
                                </li>
                    </ul>

                </li>

        
        </ul>
  </div>
</template>

<script>
export default {
  props: {
    objectives: {
      type: Array

    }
  }
};
</script>

<style lang="scss" scoped>

// .objective-container{
//     display: flex;
//     align-items: center;

// }

.objective-list li{
      list-style-type: decimal;

}
.key-result-list li{
  list-style-type: lower-alpha;
}

.objective-item{
    padding-bottom: 25px;
}
.key-result-item{
    margin-left: 25px;
    padding:10px 0px  10px 2px;
}
</style>
