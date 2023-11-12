import { createRouter, createWebHistory } from "vue-router";
import EventListView from "@/views/EventListView.vue";
import EventDetailsView from "@/views/EventDetailsView.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventListView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/event/:id",
    name: "event-details",
    component: EventDetailsView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
