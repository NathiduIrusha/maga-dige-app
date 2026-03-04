import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; // Context එක Import කරගත්තා

export default function Contact() {
    const { t } = useContext(AppContext); // t function එක ගත්තා

    return (
        <main className="view-content">
            <section className="contact-page">
                <div className="contact-card">
                    <div className="dev-img">SP</div>
                    {/* මෙන්න වචන වෙනස් වෙන තැන් */}
                    <h2>{t('contact_title')}</h2>
                    <p>{t('dev_desc')}</p>
                    <div className="contact-links">
                        <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="contact-item whatsapp">
                            WhatsApp
                        </a>
                        <a href="mailto:info@sptechnology.com" className="contact-item email">
                            Email Us
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}