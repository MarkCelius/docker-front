// Páginas públicas
export { default as ErrorPage } from './Home/ErrorPage';
export { default as HomePage } from './Home/HomePage';
export { default as ExplorePage } from './Home/ExplorePage';
export { default as PublicArticlesPage } from './Home/PublicArticlesPage';
export { default as PublicCoursesPage } from './Home/PublicCoursesPage';
export { default as SupportPage } from './Home/SupportPage'

// Formularios

export { default as SignUpPage } from './Forms/SignUpPage';
export { default as LoginPage } from './Forms/LoginPage';
export { default as SelectRolePage } from './Forms/SelectRolePage';
export { default as RecoveryPage } from './Forms/RecoveryPage';

// Rutas Dashboard
export { default as RouteProtected } from '../auth/RouteProtected';
export { default as StudentPage } from './Dashboard/StudentPage';
export { default as TeacherPage } from './Dashboard/TeacherPage';
export { default as AdminPage } from './Dashboard/AdminPage';
export { default as SettingsPage } from './Dashboard/views/SettingsPage';
export { default as SettingsAdmin } from './Dashboard/views/SettingsAdmin';
export { default as SearchPage } from './Dashboard/views/SearchPage';
export { default as ThemesPage } from './Dashboard/views/ThemesPage';
export { default as CoursePage } from './Dashboard/CoursePage';
export { default as UserPage } from './Dashboard/UserPage';
export { default as ArticlesPage } from './Dashboard/views/ArticlesPage';
export { default as CreateArticle } from './Dashboard/views/CreateArticle';
export { default as PersonalArticlesPage } from './Dashboard/views/PersonalArticlesPage';

// Rutas de documentación

export { default as DocsPage } from './Docs/DocsPage';