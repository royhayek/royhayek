const Footer = () => {
  return (
    <>
      <hr />
      <div className="flex items-center py-8">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Roy&rsquo;s Portfolio</p>
      </div>
    </>
  );
};

// display: flex;
// justify-content: space-around;
// align-items: center;
// padding: 2rem 0;

export default Footer;
