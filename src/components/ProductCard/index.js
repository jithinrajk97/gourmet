"use client";
import Image from "next/image";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
    const { name, description, price, image } = product;

    return (
        <div className={styles.productCard}>
            <div className={styles.imageContainer}>
                <figure className="ratio mb-0">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className={styles.productImage}
                    />
                </figure>

            </div>
            <div className={styles.productInfo}>
                <h3 className={`text-white ${styles.productName}`}>{name}</h3>
                <p className={styles.productDescription}>{description}</p>
                
            </div>
        </div>
    );
};

export default ProductCard; 