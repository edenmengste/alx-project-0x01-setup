import React from 'react';
import Header from '@/components/layout/Header'; 

const UsersPage: React.FC = () => {
  return (
    <div>
      <Header />
      {/* Rest of your users page content */}
      <h1>Users</h1>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default UsersPage;