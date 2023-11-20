"use client";
import React from 'react';
import { useUserAuth } from "./_utils/auth-context"; 
import Link from 'next/link';

const Page = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    return (
        <main>
            <div className="page-container">
                {!user ? (
                    <>
            <div className="login-container">
                  <p className="text-4xl font-mono mb-4 font-bold mt-8 ml-14">Please log in to access your shopping list.</p>
                      <button onClick={gitHubSignIn} className="text-xl font-mono mb-4 font-bold mt-8 ml-14">Login with GitHub</button>
            </div>
                    </>
                ) : (
                    <>
            <div className="welcome-container">
                            <p>Welcome, {user.displayName} ({user.email})</p>
                            <button onClick={firebaseSignOut}>
                                Log Out
                            </button>
            </div>
            <div className="shopping-list-link">
                    <Link href="/week8/shopping-list">
                                <a>Shopping List</a>
                    </Link>
            </div>
                    </>
                )}
            </div>
        </main>
    );
}

export default Page;
