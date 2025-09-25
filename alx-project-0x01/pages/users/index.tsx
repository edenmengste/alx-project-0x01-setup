
import React from 'react';
import Header from "@/components/layout/Header";
import { UserProps, UserData } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import { useState } from "react";
import UserModal from '@/components/common/UserModal';


const Users: React.FC<UserProps[]> = ({ posts }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);
    const handleAddPost = (newUser: UserData) => {
        setUser({ ...newUser, id: posts.length + 1 }); // Simulating ID assignment 
    };
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div className="flex justify-between">
                    <h1 className=" text-2xl font-semibold">Users List</h1>
                    <button onClick={()=>setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
                </div>
                <div className="grid grid-cols-3 gap-2 ">
                    {
                        posts.map(({ id, name, username, email, address, phone, website, company }: UserProps, key: number) => (
                            <UserCard id={id} name={name} username={username} email={email} address={address} phone={phone} website={website} company={company} key={key} />
                        ))
                    }
                </div>
            </main>
            {isModalOpen && (
                <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
            )}
        </div>
    );
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()

    return {
        props: {
            posts
        }
    }
}

export default Users;
