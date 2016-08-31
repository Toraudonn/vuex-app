<template>
  <div id="headbar">
    <div class="btn-group btn-group-justified" role="group">
      <!-- 1st button -->
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default"
          @click="show = 'all'"
          :class="{active: show == 'all'}">
          All Shops
        </button>
      </div>
      <!-- 2nd button -->
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default"
          @click="show = 'something'"
          :class="{active: show == 'something'}">
          Some button
        </button>
      </div>
    </div>
  </div>
</template>

<script>

</script>