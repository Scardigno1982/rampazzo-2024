// pages/google.tsx
import { Google } from "../app/api/google";

export async function getServerSideProps() {
    try {
        const req = await fetch('http://localhost:3000/api/google');
        const data = await req.json();

        return {
            props: {
                sheetdata: data,
            },
        };
    } catch (e) {
        console.error("Error fetching data:", e);
        return {
            props: {
                sheetdata: null, // O algún valor predeterminado en caso de error
            },
        };
    }
}

export default function GooglePage({ sheetdata }) {
    return <Google sheetdata={sheetdata} />;
}
