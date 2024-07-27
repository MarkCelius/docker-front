// src/routes.js
import {
  ErrorPage,
  HomePage,
  ExplorePage,
  PublicArticlesPage,
  PublicCoursesPage,
  SignUpPage,
  LoginPage,
  RecoveryPage,
  SelectRolePage,
  DocsPage,
  StudentPage,
  TeacherPage,
  AdminPage,
  SettingsPage,
  SearchPage,
  ThemesPage,
  CoursePage,
  SupportPage,
  UserPage,
  SettingsAdmin,
  ArticlesPage,
  CreateArticle,
  PersonalArticlesPage
} from "./views";
import RouteProtected from "./auth/RouteProtected";

const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/explore", component: ExplorePage },
  { path: "/articles", component: PublicArticlesPage },
  { path: "/signup", component: SignUpPage },
  { path: "/login", component: LoginPage },
  { path: "/support", component: SupportPage },
  { path: "/recovery", component: RecoveryPage },
  { path: "/docs", component: DocsPage },
  { path: "/all-courses", component: PublicCoursesPage },
];

const protectedRoutes = [
  { path: "/student", component: StudentPage },
  { path: "/select-rol", component: SelectRolePage },
  { path: "/teacher", component: TeacherPage },
  { path: "/admin", component: AdminPage },
];

const dashboardRoutes = [
  { path: "/search", component: SearchPage },
  { path: "/settings", component: SettingsPage },
  { path: "/settings-admin", component: SettingsAdmin },
  { path: "/create-theme", component: ThemesPage },
  { path: "/search/:id", component: CoursePage },
  { path: "/search/user/:id", component: UserPage },
  { path: "/articles-page", component: ArticlesPage },
  { path: "/create-article", component: CreateArticle },
  { path: "/my-articles", component: PersonalArticlesPage },
];

export { publicRoutes, protectedRoutes, dashboardRoutes, RouteProtected, ErrorPage };
