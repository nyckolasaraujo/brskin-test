type Post = { id: number; userId: number; title: string; body: string };

async function buscarPosts(userId: number): Promise<Post[]> {
    const url = "https://jsonplaceholder.typicode.com/posts?userId=" + userId;
    const resposta = await fetch(url);
    console.log("Status:", resposta.status);
    if (!resposta.ok) {
        throw new Error("Falha ao buscar posts: " + resposta.status);
    }
    return (await resposta.json()) as Post[];
}

async function criarPost(): Promise<void> {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "AWP | Asiimov", body: "teste", userId: 1 }),
    });
    console.log("Status do POST:", resposta.status);
    console.log("Corpo:", await resposta.json());
}

async function main() {
    const posts = await buscarPosts(1);
    console.log("Quantidade:", posts.length);
    console.log("Primeiro titulo:", posts[0].title);
    await criarPost();

    const postsVazios = await buscarPosts(9999);

    if (postsVazios.length === 0) {
        console.log("Nenhum post encontrado para o usuário com ID 9999.");
    } else {
        console.log("encontrado:", postsVazios.length); 
    }

}

main().catch((erro) => {
    console.error("Erro:", (erro as Error).message);
});