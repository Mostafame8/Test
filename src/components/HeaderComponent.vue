<template>
  <div id="header-component">
    <div class="d-flex">
      <div class="title-wrapper">
        <div class="title">commerzbank</div>
      </div>
      <div class="logo-wrapper">
        <img src="../assets/logo/logo.svg" alt="Logo" height="40" />
      </div>
    </div>
    <div class="trainer-wrapper">
      <div class="profile-photo-wrapper trainer">
        <img
          src="../assets/defaults/default-avatar-female.svg"
          alt="male avatar"
        />
      </div>
      <div class="name-wrapper">
        <div class="trainer-title">trainer</div>
        <div class="trainer-name">jana pfragner</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style scoped>
#header-component {
  position: fixed;
  background-color: white;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  flex-direction: row;
  -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  z-index: 100;
  font-family: 'Arial Narrow', serif;
  justify-content: space-between;
}
.d-flex {
  display: flex;
}

.title-wrapper {
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  color: black;
  letter-spacing: 1.5px;
}
.title-wrapper .title {
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bolder;
}

.logo-wrapper {
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.trainer-wrapper {
  min-width: 350px;
  display: flex;
  height: 100%;
  padding: 10px 10px;
  border-inline-end: 1px solid #e9e9e9;
  border-inline-start: 1px solid #e9e9e9;
  align-items: center;
}

.profile-photo-wrapper.trainer {
  width: 60px;
  height: 60px;
  overflow: hidden;
  background-color: #e9e9e9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-photo-wrapper.trainer img {
  width: 60px;
  height: 60px;
  object-fit: cover;
}

.name-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-inline-start: 10px;
}

.trainer-title {
  color: #526975;
  font-style: italic;
  font-size: 16px;
  text-transform: capitalize;
  text-align: left;
}

.trainer-name {
  color: #526975;
  font-weight: bold;
  font-size: 20px;
  font-family: arial, serif;
  font-style: normal;
  text-transform: capitalize;
}

img {
  -webkit-user-drag: none;
}
</style>
