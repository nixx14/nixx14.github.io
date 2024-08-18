import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Writings = () => {
    const [activeTab, setActiveTab] = useState('Blogs');
    const [searchTerm, setSearchTerm] = useState('');

    const tags = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty'];

    const blogPosts = [
        {
            title: 'Pushing New Rows to BigQuery Table in GCP using Go',
            excerpt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sequi ipsum soluta accusamus asperiores, sunt velit, eos minus animi, cumque aperiam incidunt? Accusamus beatae itaque dolores numquam magnam nostrum autem.',
            date: '12th June, 2024',
            tags: ['One', 'Two', 'Three', 'Four'],
            slug: 'bigquery-rows-go',
            id: 1,
        },
        // Add more blog posts here...
    ];

    return (
        <section className="section">
            <div className="container">
                <nav className="panel">
                    <p className="panel-heading">Writings: ML, LLM's, MLOP's, Engineering</p>
                    <div className="panel-block">
                        <p className="control has-icons-left">
                            <input 
                                className="input" 
                                type="text" 
                                placeholder="Search" 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <span className="icon is-left">
                                <i className="fas fa-search" aria-hidden="true"></i>
                            </span>
                        </p>
                    </div>
                    <p className="panel-tabs">
                        <a 
                            className={activeTab === 'Blogs' ? 'is-active' : ''}
                            onClick={() => setActiveTab('Blogs')}
                        >
                            Blogs
                        </a>
                        <a 
                            className={activeTab === 'Short articles' ? 'is-active' : ''}
                            onClick={() => setActiveTab('Short articles')}
                        >
                            Short articles
                        </a>
                    </p>
                    <div className="pb-4"></div>
                    <div className="tags px-5 py-5">
                        {tags.map((tag, index) => (
                            <a key={index} className="tag is-medium">{tag}</a>
                        ))}
                    </div>
                    {blogPosts.map((post, index) => (
                        <div key={index} className="px-6 py-5">
                            <Link to={`/writings/blogs/${post.slug}`} className="title is-3 has-text-weight-medium">{post.title}</Link>
                            <h2 className="subtitle is-6">{post.excerpt}</h2>
                            <span className="is-size-6 pr-5">{post.date}</span>
                            {post.tags.map((tag, tagIndex) => (
                                <a key={tagIndex} className="tag is-normal is-link is-light">{tag}</a>
                            ))}
                        </div>
                    ))}
                </nav>
            </div>
            <Outlet />
        </section>
    );
};

export default Writings;