export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer absolute mb-3 bottom-0.5 w-full text-center">
            <div
                className="text-slate-400 flex items-center justify-center space-x-2">
                <p>&copy; yoshi.fit {year}</p>
            </div>
        </footer>
    );
};

export default Footer;

// path: src/app/container/footer/Footer.tsx