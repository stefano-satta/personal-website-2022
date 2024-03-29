import useCurrentDate from "../../../hooks/useCurrentDate";

const Footer = () => {
    const {getCurrentYear} = useCurrentDate();
    
    return (
        <footer className="footer text-center py-4 mt-auto bg-dark text-white">
            <p className="mb-0">&copy; {getCurrentYear()} Stefano Satta</p>
        </footer>
    )
}

export default Footer;