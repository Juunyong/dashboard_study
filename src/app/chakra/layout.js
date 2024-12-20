// src/app/layout.js
import localFont from 'next/font/local';

import { Providers } from '../../components/providers';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
