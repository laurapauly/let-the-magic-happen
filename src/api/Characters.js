export default async function getHPCharacters() {
  const response = await fetch(`https://hp-api.herokuapp.com/api/characters`);
  const data = await response.json();
  console.log(data);
  return data;
}
