import React, { useState } from 'react';
import './Submissions.css';
import { useNavigate } from 'react-router-dom';

const Submissions = ({ submissions }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredSubmissions = submissions.filter(submission =>
        submission.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        submission.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="head">
                <div className="left">
                    <div className="title">
                    <h2>Aromatic Bar</h2>
                    </div>
                    <div className="table-detail">
                <p>{`${submissions.length} records found`}</p>
            </div>
                </div>

                <div className="right">
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="search-input"
                        />
                    </div>
                    <div className="btn">
                        <button onClick={() => navigate('/')} className="back-button">
                            Add New
                        </button>
                    </div>
                </div>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Service Quality</th>
                        <th>Beverage Quality</th>
                        <th>Cleanliness</th>
                        <th>Overall Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSubmissions.map((submission, index) => (
                        <tr key={index}>
                            <td>{submission.customerName}</td>
                            <td>{submission.email}</td>
                            <td>{submission.phone}</td>
                            <td>{submission.serviceQuality}</td>
                            <td>{submission.beverageQuality}</td>
                            <td>{submission.cleanliness}</td>
                            <td>{submission.overallExperience}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Submissions;
