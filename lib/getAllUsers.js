
export default async function getAllUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    // const res = await fetch('datas/allUsers.json')
    console.log("fetch ok");
    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}
