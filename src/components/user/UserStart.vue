<template>
  <div>
    <div class="container">
      <p>Please select a User</p>
      <hr>

      <ul class="list-style">
        <router-link to="/user/1" tag="li" class="list-group-item">User 1</router-link>
        <router-link to="/user/2" tag="li" class="list-group-item">User 2</router-link>
        <router-link to="/user/3" tag="li" class="list-group-item">User 3</router-link>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.list-group-item:hover {
  cursor: pointer;
  text-transform: uppercase;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: darkblue;
  font-size: 18px;
  letter-spacing: 3px;
}
</style>
