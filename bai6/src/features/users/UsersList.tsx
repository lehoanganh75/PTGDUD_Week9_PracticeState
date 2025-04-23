import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './usersSlice';
import { RootState, AppDispatch } from '../../app/store';

const UsersList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, status, error } = useSelector((state: RootState) => state.users);

  // Gọi fetchUsers khi lần đầu load
  useEffect(() => {
    if (status === 'idle') {
      console.log('[UsersList] Dispatching fetchUsers...');
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  // In ra khi dữ liệu thay đổi
  useEffect(() => {
    console.log('[UsersList] Status:', status);
    console.log('[UsersList] Users:', users);
    console.log('[UsersList] Error:', error);
  }, [status, users, error]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>📋 Danh sách người dùng</h2>
      {status === 'loading' && <p>⏳ Đang tải...</p>}
      {status === 'failed' && <p style={{ color: 'red' }}>❌ {error}</p>}
      {status === 'succeeded' && (
        <ul style={{ textAlign: 'left' }}>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersList;
