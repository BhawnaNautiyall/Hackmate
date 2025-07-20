import React from 'react';

const Posts = ({ postArr }) => {
    
    if (!postArr || postArr.length === 0) {
    return <div>No posts available or loading...</div>;
  }
  return (
    <div className="posts-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>

      {postArr.map((post, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            width: '200px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          <h3 style={{ margin: '0 0 0.5rem 0' }}>{post.name}</h3>
          <p><strong>Branch:</strong> {post.branch}</p>
          <p><strong>Year:</strong> {post.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
