<template>
  <div class="container">
    <h2>Team</h2>
    <div class="cards">
      <a class="card" :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }">
        <img class="card-header" src="@/assets/slack.png" alt />
        <h3>Slack</h3>
        <p
          :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
        >Messaging app for all team communication</p>
      </a>
      <a class="card" :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }">
        <img class="card-header" src="@/assets/notion.png" alt />
        <h3>Notion</h3>
        <p
          :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
        >Messaging app for all team communication</p>
      </a>
      <a class="card" :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }">
        <img class="card-header" src="@/assets/figma.png" alt />
        <h3>Figma</h3>
        <p
          :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
        >Messaging app for all team communication</p>
      </a>
      <a class="card" :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }">
        <img class="card-header" src="@/assets/contentful.png" alt />
        <h3>Contentful</h3>
        <p
          :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
        >Messaging app for all team communication</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-left: 25px;
}
h2 {
  @include heading-2;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
}

.card {
  height: 400px;
  width: 100%;
  max-width: 300px;
  border-radius: 16px;
  background: red;
  margin: 20px;
  padding: 20px;
  box-sizing: border-box;
}

.light-card {
  background: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.dark-card {
  background: $super-dark-blue;
  box-shadow: 0 20px 40px rgba(255, 255, 255, 0.15);
}

.card-header {
  width: 100%;
  border-radius: 10px 20px 0 0;
}

h3 {
  color: white;
  @include heading-3;
  text-align: center;
}

p {
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  opacity: 0.6;
}
</style>
