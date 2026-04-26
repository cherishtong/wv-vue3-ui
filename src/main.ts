import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import "./style.css";

import Intro from "./pages/intro.vue";
import Install from "./pages/install.vue";
import Tokens from "./pages/tokens.vue";

import ButtonPage from "./pages/components/button.vue";
import InputPage from "./pages/components/input.vue";
import CardPage from "./pages/components/card.vue";
import GlassCardPage from "./pages/components/glass-card.vue";
import NavbarPage from "./pages/components/navbar.vue";
import BadgePage from "./pages/components/badge.vue";
import TagPage from "./pages/components/tag.vue";
import AlertPage from "./pages/components/alert.vue";
import AvatarPage from "./pages/components/avatar.vue";
import ProgressPage from "./pages/components/progress.vue";
import TabsPage from "./pages/components/tabs.vue";
import BreadcrumbPage from "./pages/components/breadcrumb.vue";
import PaginationPage from "./pages/components/pagination.vue";
import DropdownPage from "./pages/components/dropdown.vue";
import TablePage from "./pages/components/table.vue";
import TimelinePage from "./pages/components/timeline.vue";
import StepsPage from "./pages/components/steps.vue";
import AccordionPage from "./pages/components/accordion.vue";
import SkeletonPage from "./pages/components/skeleton.vue";
import EmptyPage from "./pages/components/empty.vue";
import ChatPage from "./pages/components/chat.vue";
import ReasoningPage from "./pages/components/reasoning.vue";
import SpatialStackPage from "./pages/components/spatial-stack.vue";
import TextGradientPage from "./pages/components/text-gradient.vue";
import DepthLayerPage from "./pages/components/depth-layer.vue";
import MotionPage from "./pages/components/motion.vue";
import ScrollRevealPage from "./pages/components/scroll-reveal.vue";
import StatusPulsePage from "./pages/components/status-pulse.vue";

const routes = [
  { path: "/", redirect: "/intro" },
  { path: "/intro", component: Intro },
  { path: "/install", component: Install },
  { path: "/tokens", component: Tokens },
  { path: "/components/button", component: ButtonPage },
  { path: "/components/input", component: InputPage },
  { path: "/components/card", component: CardPage },
  { path: "/components/glass-card", component: GlassCardPage },
  { path: "/components/navbar", component: NavbarPage },
  { path: "/components/badge", component: BadgePage },
  { path: "/components/tag", component: TagPage },
  { path: "/components/alert", component: AlertPage },
  { path: "/components/avatar", component: AvatarPage },
  { path: "/components/progress", component: ProgressPage },
  { path: "/components/tabs", component: TabsPage },
  { path: "/components/breadcrumb", component: BreadcrumbPage },
  { path: "/components/pagination", component: PaginationPage },
  { path: "/components/dropdown", component: DropdownPage },
  { path: "/components/table", component: TablePage },
  { path: "/components/timeline", component: TimelinePage },
  { path: "/components/steps", component: StepsPage },
  { path: "/components/accordion", component: AccordionPage },
  { path: "/components/skeleton", component: SkeletonPage },
  { path: "/components/empty", component: EmptyPage },
  { path: "/components/chat", component: ChatPage },
  { path: "/components/reasoning", component: ReasoningPage },
  { path: "/components/spatial-stack", component: SpatialStackPage },
  { path: "/components/text-gradient", component: TextGradientPage },
  { path: "/components/depth-layer", component: DepthLayerPage },
  { path: "/components/motion", component: MotionPage },
  { path: "/components/scroll-reveal", component: ScrollRevealPage },
  { path: "/components/status-pulse", component: StatusPulsePage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
