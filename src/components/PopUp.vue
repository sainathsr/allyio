<template>
  <div class="model-bg" @click="$emit('close')">
    <div class="model-body" @click.prevent>
      <div class="objective-row">
        <div class="objective-field-label">
          Metric Name
        </div>
        <div class="objective-field-value">
          {{ objective.metric_name }}
        </div>
      </div>
      <div class="objective-row">
        <div class="objective-field-label">
          Metric Start
        </div>
        <div class="objective-field-value">
          {{ objective.metric_start }}
        </div>
      </div>
      <div class="objective-row">
        <div class="objective-field-label">
          Metric target
        </div>
        <div class="objective-field-value">
          {{ objective.metric_target }}
        </div>
      </div>
      <div class="objective-row" v-if="parentObjective">
        <div class="objective-field-label">
          Parent Objective
        </div>
        <div class="objective-field-value">
          {{ parentObjective.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// writting a simple model comp as external UI comps aren't permitted
export default {
  props: {
    objective: {
      type: Object
    },
    parentObjective: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.model-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top:0;
  left:0;
  background: rgba($color: #000000, $alpha: 0.5);

  .model-body {
    background: white;
    width: 500px;
    height: 300px;
    padding: 25px;
  }
  .objective-row {
    padding: 5px;
    display: flex;
  }
  .objective-field-label {
    padding: 5px;
  }
  .objective-field-value {
    padding: 5px;
  }
}
</style>
