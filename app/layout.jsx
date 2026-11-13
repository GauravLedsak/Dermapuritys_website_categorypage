import '../style.css';
export const viewport = {width:'device-width',initialScale:1,viewportFit:'cover'};
export const metadata = { title: 'Dermapuritys Skin Care', description: 'Skin treatments and facials at Dermapuritys.' };
export default function RootLayout({ children }) { return <html lang="en"><body>{children}</body></html>; }
