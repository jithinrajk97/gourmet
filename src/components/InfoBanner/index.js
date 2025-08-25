"use client";
import styles from "./InfoBanner.module.scss";

const InfoBanner = ({ title, subtitle, children }) => {
    return (
        <section className={styles.infoBanner}>
            {(title || subtitle) && (
                <header className={styles.header}>
                    {title && <h2 className="h3 fw-700 mb-1">{title}</h2>}
                    {subtitle && <p className="text-grey mb-0">{subtitle}</p>}
                </header>
            )}
            {children && (
                <div className={styles.content}>
                    {children}
                </div>
            )}
        </section>
    );
};

export default InfoBanner;

