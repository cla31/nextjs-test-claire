export default async function getUser(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    console.log("res",res);
    if (!res.ok) throw new Error('failed to fetch user')
    console.log("fetch se fait ?????");
    return res.json()
}