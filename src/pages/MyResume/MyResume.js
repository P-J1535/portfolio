import React, { useState } from 'react';
import styles from './MyResume.module.css';

const Card = ({ title, institution, duration, description }) => (
    <div className={styles.card}>
        <h3>{title}</h3>
        <p className={styles.institution}>{institution} ({duration})</p>
        <p className={styles.description}>{description}</p>
    </div>
);

const Skill = ({ name, level }) => (
    <div className={styles.skill}>
        <span className={styles.skillName}>{name}</span>
        <div className={styles.skillBar}>
            <div className={styles.skillLevel} style={{ width: `${level}%` }}></div>
        </div>
    </div>
);

const Achievement = ({ title, institution, duration, description }) => (
    <div className={styles.card}>
        <h3>{title}</h3>
        <p className={styles.institution}>{institution} ({duration})</p>
        <p className={styles.description}>{description}</p>
    </div>
);

const MyResume = () => {
    const [activeTab, setActiveTab] = useState('Experience');

    const renderContent = () => {
        switch (activeTab) {
            case 'Education':
                return (
                    <section className={styles.section} >
                        <h2 className={styles.sectionTitle}>Education Quality</h2>
                        <div className={styles.cards}>
                            <Card
                                title="MERN Stack Development Course"
                                institution="SPRK Technologes Kharghar"
                                duration="2022 - 2023"
                                description="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                            />
                            <Card
                                title="BSC in Information Technology"
                                institution="Ramsheth Thakur College, Kharghar,Mumbai University"
                                duration="2018 - 2021"
                                description="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                            />
                            <Card
                                title="Higher Secondary Certificate (HSC)"
                                institution="AD Mhatre Jr College, Nawade"
                                duration="2016 - 2018"
                                description="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                            />
                            <Card
                                title="Secondary School Certificate (SSC)"
                                institution="TVM, Dahisar Mori"
                                duration="2014 - 2016"
                                description="Higher education is tertiary education leading to the award of an academic degree. Higher education, also called post-secondary education."
                            />
                        </div>
                    </section>
                );
            case 'Professional Skills':
                return (
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Professional Skills</h2>
                        <div className={styles.skills}>
                            <Skill name="React" level={90} />
                            <Skill name="JavaScript" level={85} />
                            <Skill name="HTML 5" level={100} />
                            <Skill name="CSS 3" level={90} />
                            <Skill name="Bootstrap" level={90} />
                        </div>
                    </section>
                );
            case 'Experience':
                return (
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Job Experience</h2>
                        <div className={styles.cards}>
                            <Card
                                title="Frontend Developer"
                                institution="KJSS COSMOS PVT. LTD."
                                duration="2023 - Present"
                                description="KJSSCoSMOS PVT LTD is a steel development company in Kharghar, Navi Mumbai. We specialize in high-quality steel production and innovative solutions for industrial applications, committed to meeting the diverse needs of our clients."
                            />
                            <Card
                                title="Internship Opportunity"
                                institution="KJSS COSMOS PVT. LTD."
                                duration="3-Month"
                                description="During my three-month internship at KJSSCOSMOS PVT LTD, I developed web applications using React.js and Material-UI, collaborated on feature implementation and bug fixes, participated in code reviews, and assisted in testing and debugging to ensure optimal performance. I also gained experience with Git for version control."
                            />
                        </div>
                    </section>
                );
            case 'Achievements':
                return (
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Achievements</h2>
                        <div className={styles.cards}>
                            <Achievement
                                title="First Place in SPRK Coding Hackathon"
                                institution="SPRK Technologes"
                                duration="2023"
                                description="First Place in SPRK Coding Hackathon 2021. PERSONAL PROJECTS Attendance Portal"
                            />
                            <Achievement
                                title="Certification in Full Stack Development"
                                institution="SPRK Technologes"
                                duration="2023"
                                description="Recognized as Employee of the Month at KJSS COSMOS PVT. LTD. for outstanding performance and dedication."
                            />
                        </div>
                    </section>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.resumeContainer} id="about">
            <p className={styles.underline}></p>
            <div className={styles.data}>
                <p>2+ YEARS OF EXPERIENCE</p>
                <h1 className={styles.title}>My Resume</h1>
            </div>
            <div className={styles.tabs}>
                <button
                    className={`${styles.tabButton} ${activeTab === 'Experience' ? styles.active : ''}`}
                    onClick={() => setActiveTab('Experience')}
                >
                    Experience
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'Professional Skills' ? styles.active : ''}`}
                    onClick={() => setActiveTab('Professional Skills')}
                >
                    Professional Skills
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'Education' ? styles.active : ''}`}
                    onClick={() => setActiveTab('Education')}
                >
                    Education
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'Achievements' ? styles.active : ''}`}
                    onClick={() => setActiveTab('Achievements')}
                >
                    Achievements
                </button>
            </div>
            <div className={styles.content}>{renderContent()}</div>
            <p className={styles.underline}></p>
        </div>
    );
};

export default MyResume;
