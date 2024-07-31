"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { FaHouse, FaServer, FaUserCheck, FaUserGroup, FaUsersRectangle } from "react-icons/fa6";

const Aside = () => {
    const router = usePathname();
    // console.log(router);
    return (
        <div className='border bg-primary text-secondary min-h-screen'>
            <div className='text-center'>
                <h2 className='text-2xl font-bold pb-2'><Link href="/dashboard">Dashboard sidebar!</Link></h2>
            </div>
            <ul>
                <Link className={`${router === '/dashboard' ? 'db-active' : 'default'}`} href="/dashboard"><FaHouse className='inline pb-1' /> Dashboard</Link>
                <Link className={`${router === '/dashboard/products' ? 'db-active' : 'default'}`} href="/dashboard/products"><FaServer className='inline pb-1' /> Manage Products</Link>
                <Link className={`${router === '/dashboard/users' ? 'db-active' : 'default'}`} href="/dashboard/users"><FaUsersRectangle className='inline pb-1' /> Manage Users</Link>
                <Link className={`${router === '/dashboard/customers' ? 'db-active' : 'default'}`} href="/dashboard/customers"><FaUserGroup className='inline pb-1' /> Manage Customer</Link>
                <Link className={`${router === '/dashboard/profile' ? 'db-active' : 'default'}`} href="/dashboard/profile"><FaUserCheck className='inline pb-1' /> Profile</Link>
            </ul>
        </div>
    );
};

export default Aside;