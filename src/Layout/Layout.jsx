import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;

// আপনার যতগুলা আর্টিক্যাল থাকবে সেগুলার মধ্যে সবচেয়ে বেশি ভিউ হয়েছে এরকম ৬ টা আর্টিক্যাল দেখাবেন এখানে। আর নরমাল ইউজার এবং প্রিমিয়াম ইউজার এর সং্খ্যার উপর ভিত্তি করে স্ট্যাটিসটিকস দেখাবেন
