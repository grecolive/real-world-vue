<template>
  <div class="event-list-view">
    <h1>Events</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventServices from "@/services/EventServices.js";

export default {
  name: "EventListView",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    EventServices.getEvents().then((response) => {
      this.events = response.data;
    });
  },
};
</script>
<style scoped>
.event-list-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
