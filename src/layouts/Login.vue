<template>
  <div class="layout">
    <header class="header">
        <g-link to="/">#100daysofCode</g-link>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  data: () => ({
    bottomNav: "recent",
    active: "Home"
  })
};
</script>


<style <style lang="scss">
> * {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}

#app {
  box-sizing: border-box;
  padding: 0;
}

.bottomnav {
  height: 60px;
  background: white;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  -webkit-box-shadow: 0px 0px 12px 0px rgba(179, 179, 179, 1);
  -moz-box-shadow: 0px 0px 12px 0px rgba(179, 179, 179, 1);
  box-shadow: 0px 0px 12px 0px rgba(179, 179, 179, 1);
}
.navbutton {
  position: relative;
  transition: all 0.6s linear;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  color: black;
  cursor: pointer;
  padding: 7px 0px;
  ::after {
    content: "";
    height: 40px;
    left: 0;
    top: 0;
    width: 10vw;
    opacity: 0;
    border-radius: 20px;
    position: absolute;
    background: #2fb1d91f;
    transition: all 0.2s linear;
  }
  .nav-text {
    width: 0%;
    transition: all 0.2s linear;
    color: black;
    opacity: 0;
    margin-bottom: 3px;
  }
}

.active {
  padding: 5px 10px;
  ::after {
    content: "";
    opacity: 1;
    height: 40px;
    width: 25vw;
    left: 0;
    top: 0;
    border-radius: 20px;
    position: absolute;
    background: #2fb1d91f;
  }
  .nav-text {
    padding-left: 5px;
    width: 100%;
    transition: all 0.2s linear;
    opacity: 1;
  }
}

a {
  color: black;
  text-decoration: none;
  padding-bottom: 5px;
  border-bottom: 3px solid #2fb1d9;
}

.header {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
