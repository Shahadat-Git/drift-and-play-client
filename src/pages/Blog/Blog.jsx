import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>Drift & Play | Blog</title>
            </Helmet>
            <div className='container mx-auto my-10'>
                <h2 className='text-4xl font-semibold text-gray-400 my-7 text-center'>Question and Answer</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 text-gray-400 text-start font-medium mx-3'>
                    <div className='p-3 rounded-lg border-2 hover:border-success transition-colors duration-1000 hover:text-gray-500'>
                        <p>1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                        <p>Ans: Access Token:
                            An access token is a credential issued to a client after successful authentication. It authorizes the client to access specific resources or perform actions on behalf of the authenticated user.

                            Refresh Token:
                            A refresh token is a long-lived credential issued during authentication. It allows the client to obtain a new access token without requiring the user to re-authenticate.</p>
                    </div>
                    <div className='p-3 rounded-lg border-2 hover:border-success transition-colors duration-1000 hover:text-gray-500'>
                        <p>2: Compare SQL and NoSQL databases?</p>
                        <p>Ans: SQL databases are based on a structured data model with predefined schemas, use SQL for querying, are vertically scalable, enforce rigid schemas, and are suitable for structured and relational data scenarios. NoSQL databases support flexible data models, use various querying mechanisms, are horizontally scalable, provide schema flexibility, and are suitable for handling unstructured or semi-structured data, rapid development, and scalability.
                        </p>
                    </div>
                    <div className='p-3 rounded-lg border-2 hover:border-success transition-colors duration-1000 hover:text-gray-500'>
                        <p>3: What is express js? What is Nest JS ?</p>
                        <p>Ans: Express.js is a minimalistic and flexible web application framework for Node.js, while NestJS is a TypeScript-based framework inspired by Angular for building scalable server-side applications. Express.js provides a simpler approach, while NestJS adds structure and additional features on top of Express.js.</p>
                    </div>
                    <div className='p-3 rounded-lg border-2 hover:border-success transition-colors duration-1000 hover:text-gray-500'>
                        <p>4: What is MongoDB aggregate and how does it work ?</p>
                        <p>Ans: The MongoDB aggregate function is used for advanced data analysis and transformations. It operates on pipelines consisting of stages that process and transform data. Each stage takes input from the previous stage and passes the transformed data to the next stage. It enables tasks like filtering, grouping, sorting, and aggregating data within a collection, providing powerful data analysis capabilities.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;