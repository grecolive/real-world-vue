<template>
  <router-link :to="{ name: 'event-details', params: { id: event.id } }">
    <div class="event-card">
      <span>@ {{ event.time }} on {{ event.date }}</span>
      <h3 class="event-card__name">{{ event.title }}</h3>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.event-card {
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: inherit;
}
.event-card__name {
  font-size: 1.2rem;
  font-weight: bold;
}
.event-card__category {
  font-size: 1rem;
  color: #999;
}
.event-card__date {
  font-size: 1rem;
  color: #999;
}
.event-card__description {
  font-size: 1rem;
  color: #666;
}

.event-card__button {
  background-color: #42b983;
  color: #fff;
  border: none;
  border-radius: 2px;
  padding: 5px 10px;
  font-size: 1rem;
  cursor: pointer;
}

.event-card__button:hover {
  background-color: #3da372;
}

.event-card__button:disabled {
  background-color: #999;
  cursor: not-allowed;
}

.event-card__button:disabled:hover {
  background-color: #999;
}

.event-card:hover {
  border-color: #42b983;
}
</style>
