<template>
  <div class="okr-tree-root">

<div class="filter">
      <label for="categories">Select category:</label>

<select name="categories"  v-model="selectedCategory">
  <option v-for="category in allAvailableCategories" :value="category" :key="category">
      {{category}}

  </option>
  
</select>
</div>


            <ul class="objective-list">
        
           <li v-for="objective in filteredObjectives" :key="objective.id" class="objective-item">
               <div class="objective-container">
                   <button class="expand-btn" @click="toggleExpansion(objective)">
                       <!-- toggle icon based on expansion state of objective -->
                    <div :class="[objective.expanded ?'down':'up']" class="arrow">
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
    data() {
        return {
            selectedCategory: null
        }
    },
    computed:
    {
        filteredObjectives()
        {
            //if category chosen return only objectives in that category

            if(this.selectedCategory)
            {
                
               return this.objectives.filter(objective=>objective.category==this.selectedCategory)
            }
            else return this.objectives
        },

        //compute list of categories from all okrs
        allAvailableCategories()
        {
            const uniqueCategories=new Set()
            this.objectives.forEach(objective=>{
                uniqueCategories.add(objective.category)

                objective.keyResults.forEach(keyResult=>{
                uniqueCategories.add(keyResult.category)

                })
            })

            return Array.from(uniqueCategories)
        }
    },
    methods:{
        // deepClone(obj)
        // {
        //     return JSON.parse(JSON.stringify(obj))
        // },
        toggleExpansion(objective)
        {
            objective.expanded=!objective.expanded
        }
    },
  props: {
    objectives: {
      type: Array

    }
  },
  
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

.arrow {
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  
  &.up{
      border-bottom: 5px solid black;
  }
   &.down{
      border-top: 5px solid black;
  }
}



.filter{

padding: 5px;
margin-bottom: 20px;

}
</style>
