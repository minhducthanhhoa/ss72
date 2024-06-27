import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default function AddPost() {
    const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (title && thumbnail && content && category) {
      await axios.post('http://localhost:8080/posts', {
        title,
        thumbnail,
        content,
        category,
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
      });

      navigate('/posts');
    }
  };
  return (
    <div>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label>Tiêu đề bài viết:</label>
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Tiêu đề bài viết"
                className="border p-2 w-full"
                />
            </div>
            <div>
                <label>Hình ảnh:</label>
                <input
                type="text"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
                placeholder="Hình ảnh"
                className="border p-2 w-full"
                />
            </div>
            <div>
                <label>Thể loại:</label>
                <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Thể loại"
                className="border p-2 w-full"
                />
            </div>
            <div>
                <label>Nội dung:</label>
                <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Nội dung"
                className="border p-2 w-full"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Xuất bản</button>
        </form>
    </div>
  )
}
