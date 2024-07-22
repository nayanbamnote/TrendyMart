import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
        const { id } = params;
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const resJson = await res.json();
        return NextResponse.json(resJson);
    }