import PostCard from "@/components/PostCard";
import styles from "@/styles/home.module.css";
import usePostListContext from "@/hooks/usePostListContext";
import NavBar from "@/components/NavBar";
import PostSkeleton from "@/components/PostSkeleton";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function HomePage() {
  const postContext = usePostListContext();

  return (
    <>
      <NavBar />
      <Banner />
      <main className={styles.home_container}>
        {postContext?.loading
          ? Array(10)
              .fill(0)
              .map((_, index) => <PostSkeleton key={index} />)
          : postContext?.postList.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
      </main>
      <Footer />
    </>
  );
}
