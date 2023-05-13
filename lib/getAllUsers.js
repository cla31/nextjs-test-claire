
export default async function getAllUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    // const res = await fetch('datas/allUsers.json')
    console.log("fetch ok");
    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}
//Module lib non reconnu avec @ ds le fichier users/page.js et le chemin vers le dossier datas/allUsers.json indique une erreur "TypeError: Failed to parse URL from datas/allUsers.json" 
