function Footer() {
  const estilo = {
    textAlign: 'center',
    padding: '24px',
    backgroundColor: '#faf8f4',
    borderTop: '1px solid #d1d1d1',
    color: '#6b7280',
    fontSize: '15px',
    fontFamily: 'Montserrat, sans-serif'
  };

  return (
    <footer style={estilo}>
      <p style={{ margin: 0 }}>Lenguajes 4 - Universidad Católica de Salta - 2026</p>
    </footer>
  );
}

export default Footer;