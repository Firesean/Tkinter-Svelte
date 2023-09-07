import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
  const { cookiesEnabled } = await request.json();
  let result = json({ "isCookieMonster" : false });
  if (cookiesEnabled){
    console.log(cookies.getAll());
  }
  cookies.getAll().forEach(cookie => {
    if (cookie.name.toLowerCase() == "cookie monster"){
        console.log("Cookie Monster Found");
        result = json({ "isCookieMonster" : true });
    }
  }); 
  return result;
}