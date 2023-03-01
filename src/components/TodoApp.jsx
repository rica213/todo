import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout.jsx';

import Home from '@/routes/Home.jsx';
import About from '@/routes/About.jsx';
import Login from '@/routes/Login.jsx';
import Profile from '@/routes/Profile.jsx';
import NotMatch from '@/routes/NotMatch.jsx';
import SinglePage from '@/routes/SinglePage.jsx';

const TodoApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path=":slug" element={<SinglePage />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);
export default TodoApp;
