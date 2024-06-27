import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Tabs } from 'antd';
import PostList from './components/PostList';
import AddPost from './components/AddPost';

export default function App() {
    const { TabPane } = Tabs;
  return (
    <div>
      <Router>
      <div className="container mx-auto mt-10">
        <Tabs defaultActiveKey="1">
          <TabPane tab={<Link to="/posts">Danh sách bài viết</Link>} key="1" />
          <TabPane tab={<Link to="/add-post">Thêm mới bài viết</Link>} key="2" />
        </Tabs>
        
        <Routes>
          <Route path="/" element={<Navigate to="/posts" replace />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </div>
    </Router>
    </div>
  )
}
