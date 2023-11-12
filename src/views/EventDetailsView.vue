<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <h3>{{ event.category }}</h3>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
    <router-link to="/">Back to Events</router-link>
  </div>
</template>

<script>
import EventServices from "@/services/EventServices";
export default {
  name: "EventDetailsView",
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  created() {
    EventServices.getEvent(this.id).then((response) => {
      this.event = response.data;
    });
  },
};
</script>

<style></style>
