import styles from "./page.module.css";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://pocketbase.funkysundays.com");

async function getData() {
    return await pb.collection("events").getList(1, 15, {
        filter: "hidden != true",
    });
}

export default async function Home() {
    const data = await getData();
    return (
        <main className={styles.main}>
            <h1>Index page</h1>
            {data.items.map((i) => (
                <article key={i.id}>
                    <p>{i.name}</p>
                </article>
            ))}
        </main>
    );
}
