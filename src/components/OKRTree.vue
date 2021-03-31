<template>
  <div class="okr-tree-root">

            <ul class="objective-list">
        
           <li v-for="objective in objectives" :key="objective.id" class="objective-item">
               <div class="objective-container">
                   <button class="expand-btn" @click="toggleExpansion(objective)">
                       <!-- toggle icon based on expansion state of objective -->
                    <div :class="[objective.expanded ?'arrow-down':'arrow-up']">
                     </div>
                    

                   </button>
                   {{objective.title}}

               </div>

                
    
                    <ul class="key-result-list" v-if="objective.expanded">
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
    methods:{
        toggleExpansion(objective)
        {
            objective.expanded=!objective.expanded
        }
    },
  props: {
    objectives: {
      type: Array

    }
  }
};
</script>

<style lang="scss" scoped>

.objective-container{
    display: flex;
    align-items: center;

}

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

.arrow-up {
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  
  border-bottom: 5px solid black;
}

.arrow-down {
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  
  border-top: 5px solid black;
}
</style>
