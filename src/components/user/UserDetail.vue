<template>
  <div>
    <h3>Some User Details</h3>
    <p>User Id: {{$route.params.id}}</p>
    <router-link
      :to="{ name:'userEdit' , params:{id: $route.params.id}  }"
      tag="button"
      class="btn btn-outline-success"
    >Edit User</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

