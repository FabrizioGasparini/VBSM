export async function GET() {
    const response = await fetch("https://www.volleyballsanmartino.it/api/news.php");
    return Response.json(await response.json());
}
