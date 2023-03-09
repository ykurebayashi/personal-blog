/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../../styles/BlogCard.module.css";
import { ReactElement } from "react";

type Props = {
  title: string;
  author: string;
  authorPic: string;
  coverPhoto: string;
  datePublished: string;
  slug: string;
  category: string;
};

export default function BlogCard({
  title,
  author,
  authorPic,
  coverPhoto,
  datePublished,
  slug,
  category,
}: Props): ReactElement {
  return (
    <div className={styles.card}>
      <img src={coverPhoto} alt={slug} className={styles.cover} />

      <div className={styles.postInfo}>
        <h1>{title}</h1>

        <div className={styles.postMetaData}>
          <div className={styles.authorInfo}>
            <img src={authorPic} alt={author} />
            <p>{author}</p>
          </div>
          <p>{datePublished}</p>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          voluptatum esse quis. Tempora impedit nesciunt, ipsa vel illum magni
          sapiente ducimus! Ex aut error enim repudiandae debitis molestiae
          maiores sint?
        </p>

        <Link href={"/posts/" + slug}>
          <p>Read More</p>
        </Link>
      </div>
    </div>
  );
}
