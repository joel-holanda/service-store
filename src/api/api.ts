'use client'

const HOST_BACKEND = process.env.NEXT_PUBLIC_HOST ?? ''

export default async function getProduts() {
    const res = await fetch(`${HOST_BACKEND}/products?storeId=1`)
    const data = await res.json()
    return data
}