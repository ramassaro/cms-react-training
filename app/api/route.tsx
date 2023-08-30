import axios from "axios";
import { createHash } from "node:crypto";
import { NextResponse } from 'next/server';

export async function GET(request: Request ) {
    const limit = 20;
    let queryString = [];
    const offset = request.nextUrl.searchParams.get("offset");
    if(offset) queryString.push(`offset=${offset}`);
    const characters = request.nextUrl.searchParams.get("characters");
    if(characters) queryString.push(`characters=${characters}`);
    const creators = request.nextUrl.searchParams.get("creators");
    if(creators) queryString.push(`creators=${creators}`);



    const APIURL = "https://gateway.marvel.com:443/v1/public/comics"
    const APIPUBKEY = "c9e260c5ee096dd2d5d1e315dc3931d7";
    const APIPRIKEY = "2211dd34ccccd608b8c87138872a67825a07ef93";
    const ts = Date.now();
    const HASH = createHash('md5').update(ts+APIPRIKEY+APIPUBKEY).digest('hex');
    const URL = `${APIURL}?ts=${ts}&apikey=${APIPUBKEY}&hash=${HASH}&format=comic&formatType=comic&limit=${limit}&orderBy=title&${queryString.join('&')}`;
    const response = await axios.get(URL);
    return NextResponse.json(response.data.data);
}

