const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="bg-blue-400 p-5 flex justify-center font-semibold">
        <h5>
          Designed and Crafted by Sanjeev || {currentYear} &copy; Sanjeev
        </h5>
      </footer>
    );
  };
  
  export default Footer;
  