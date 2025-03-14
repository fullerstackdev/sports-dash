/* eslint-disable */
import { lazy } from 'react';
// import { USER_ROLE } from 'constants.js';
import { DEFAULT_PATHS } from './config.js';

const dashboards = {
  elearning: lazy(() => import('./views/dashboards/ElearningDashboard.jsx')),
  school: lazy(() => import('./views/dashboards/SchoolDashboard.jsx')),
};
const courses = {
  explore: lazy(() => import('./views/courses/CoursesExplore.jsx')),
  list: lazy(() => import('./views/courses/CoursesList.jsx')),
  detail: lazy(() => import('./views/courses/CoursesDetail.jsx')),
};
const quiz = {
  list: lazy(() => import('./views/quiz/QuizList.jsx')),
  detail: lazy(() => import('./views/quiz/QuizDetail.jsx')),
  result: lazy(() => import('./views/quiz/QuizResult.jsx')),
};
const paths = {
  list: lazy(() => import('./views/paths/PathsList.jsx')),
  detail: lazy(() => import('./views/paths/PathsDetail.jsx')),
};

const instructor = {
  list: lazy(() => import('./views/instructor/InstructorList.jsx')),
  detail: lazy(() => import('./views/instructor/InstructorDetail.jsx')),
};
const misc = {
  player: lazy(() => import('./views/misc/Player.jsx')),
  material: lazy(() => import('./views/misc/Material.jsx')),
  syllabus: lazy(() => import('./views/misc/Syllabus.jsx')),
};

const appRoot = DEFAULT_PATHS.APP.endsWith('/') ? DEFAULT_PATHS.APP.slice(1, DEFAULT_PATHS.APP.length) : DEFAULT_PATHS.APP;

const routesAndMenuItems = {
  mainMenuItems: [
    {
      path: DEFAULT_PATHS.APP,
      exact: true,
      redirect: true,
      to: `${appRoot}/dashboards/elearning`,
    },
    {
      path: `${appRoot}/dashboards`,
      icon: 'home-garage',
      label: 'menu.dashboards',
      exact: true,
      redirect: true,
      to: `${appRoot}/dashboards/elearning`,
      subs: [
        { path: '/elearning', label: 'menu.elearning', component: dashboards.elearning },
        { path: '/school', label: 'menu.school', component: dashboards.school },
      ],
    },
    {
      path: `${appRoot}/courses`,
      label: 'menu.courses',
      icon: 'online-class',
      exact: true,
      redirect: true,
      to: `${appRoot}/courses/explore`,
      subs: [
        { path: '/explore', label: 'menu.explore', component: courses.explore },
        { path: '/list', label: 'menu.list', component: courses.list },
        { path: '/detail', label: 'menu.detail', component: courses.detail },
      ],
    },
    {
      path: `${appRoot}/quiz`,
      label: 'menu.quiz',
      icon: 'quiz',
      exact: true,
      redirect: true,
      to: `${appRoot}/quiz/list`,
      subs: [
        { path: '/list', label: 'menu.list', component: quiz.list },
        { path: '/detail', label: 'menu.detail', component: quiz.detail },
        { path: '/result', label: 'menu.result', component: quiz.result },
      ],
    },
    {
      path: `${appRoot}/paths`,
      label: 'menu.paths',
      icon: 'destination',
      exact: true,
      redirect: true,
      to: `${appRoot}/paths/list`,
      subs: [
        { path: '/list', label: 'menu.list', component: paths.list },
        { path: '/detail', label: 'menu.detail', component: paths.detail },
      ],
    },
    {
      path: `${appRoot}/instructor`,
      label: 'menu.instructor',
      icon: 'lecture',
      exact: true,
      redirect: true,
      to: `${appRoot}/instructor/list`,
      subs: [
        { path: '/list', label: 'menu.list', component: instructor.list },
        { path: '/detail', label: 'menu.detail', component: instructor.detail },
      ],
    },
    {
      path: `${appRoot}/misc`,
      label: 'menu.misc',
      icon: 'layout-5',
      exact: true,
      redirect: true,
      to: `${appRoot}/misc/player`,
      subs: [
        { path: '/player', label: 'menu.player', component: misc.player },
        { path: '/material', label: 'menu.material', component: misc.material },
        { path: '/syllabus', label: 'menu.syllabus', component: misc.syllabus },
      ],
    },
  ],
  sidebarItems: [],
};
export default routesAndMenuItems;
