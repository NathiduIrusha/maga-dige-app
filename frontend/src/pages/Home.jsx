import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

export default function Home() {
    const navigate = useNavigate();
    const { t } = useContext(AppContext);

    return (
        <main className="view-content home-bg">
            {/* පසුබිමේ ඇති Liquid shapes (Realism සඳහා) */}
            <div className="liquid-blob blob-1"></div>
            <div className="liquid-blob blob-2"></div>

            {/* Hero Section - ප්‍රධාන පින්තූරය සහිත කොටස */}
            <section className="hero-section glass-card">
                <div className="hero-content">
                    {/* t function එක හරහා භාෂාව අනුව මාතෘකාව මාරු වේ */}
                    <h1>{t('hero_title')}</h1>
                    <p>{t('hero_sub')}</p>
                    
                    {/* Modern Open Map Button (CSS වලින් ලස්සන කරමු) */}
                    <button className="glass-btn primary" onClick={() => navigate('/map')}>
                        📍 <span>{t('find_btn')}</span>
                    </button>
                </div>
            </section>

            {/* Categories Section - "එක ගොඩේ" තිබුණ ඒවා ලස්සන කාඩ්ස් වලට හැදුවා */}
            <div className="category-grid">
                <div className="glass-item">
                    <span className="cat-icon">🍲</span>
                    <span>{t('budget_eats')}</span>
                </div>
                <div className="glass-item">
                    <span className="cat-icon">🔧</span>
                    <span>{t('garage')}</span>
                </div>
                <div className="glass-item">
                    <span className="cat-icon">🏨</span>
                    <span>{t('budget_stays')}</span>
                </div>
                <div className="glass-item">
                    <span className="cat-icon">🛒</span>
                    <span>{t('grocery')}</span>
                </div>
            </div>
        </main>
    );
}