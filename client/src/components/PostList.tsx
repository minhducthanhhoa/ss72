import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/reducers/postSlice';
import { RootState, AppDispatch } from '../redux/store';
import { useEffect } from 'react';

export default function PostList() {
    const dispatch = useDispatch<AppDispatch>();
    const posts = useSelector((state: RootState) => state.posts.posts);
    const postStatus = useSelector((state: RootState) => state.posts.status);
    const error = useSelector((state: RootState) => state.posts.error);

    useEffect(() => {
        if (postStatus === 'idle') {
        dispatch(fetchPosts());
        }
    }, [postStatus, dispatch]);

  return (
    <div>
        {postStatus === 'loading' && <div>Loading...</div>}
        {postStatus === 'succeeded' && (
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        )}
        {postStatus === 'failed' && <div>{error}</div>}
    </div>
  )
}
