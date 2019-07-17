<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">#100daysofCode</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">{{active}}</g-link>
      </nav>
    </header>
    <slot />
    <div class="bottomnav">
      <div
        @click="active='Instagram'"
        color="blue"
        :class="['navbutton', {active: active ==='Instagram'}]"
        flat
        value="recent"
      >
        <div>
          <g-image alt="Example image" src="~/images/instagram.png" />
        </div>
        <div class="nav-text">Insta</div>
      </div>
      <div
        @click="active='Home'"
        color="blue"
        :class="['navbutton', {active: active ==='Home'}]"
        flat
        value="recent"
      >
        <div>
          <g-image alt="Example image" src="~/images/home.png" />
        </div>
        <div class="nav-text">Home</div>
      </div>
      <div
        @click="active='Repos'"
        color="blue"
        :class="['navbutton', {active: active ==='Repos'}]"
        flat
        value="favorites"
      >
        <div>
          <g-image alt="Example image" src="~/images/folder.png" />
        </div>
        <div class="nav-text">Repos</div>
      </div>

      <div
        @click="active='Todos'"
        color="blue"
        :class="['navbutton', {active: active ==='Todos'}]"
        flat
        value="nearby"
      >
        <div>
          <g-image alt="Example image" src="~/images/todo.png" />
        </div>
        <div class="nav-text">Todos</div>
      </div>
    </div>
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
  font-weight: light;
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

h1,
h2,
h3,
h4 {
  font-weight: 300;
}

h2 {
  font-size: 18px;
}

input[type="text"] {
  transform: scale(0.75);
  transform-origin: left top;

  /* remove extra white space */
  margin-bottom: -10px;
  margin-right: -33.333333333%;
}

.primary-button {
  padding: 20px;
  background: linear-gradient(to right, #96eee6, #0597d4);
  background:-webkit-linear-gradient(to right, #96eee6, #0597d4);
  border-radius: 10px;
  transition: all 0.2s linear;
  color: white;
  width: 100%;
  -webkit-box-shadow: 5px 5px 19px -1px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 5px 5px 19px -1px rgba(0, 0, 0, 0.12);
  box-shadow: 5px 5px 19px -1px rgba(0, 0, 0, 0.12);
}

.primary-button:hover {
  -webkit-box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.12);
  box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.12);
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
