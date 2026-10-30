function Contacto() {
  return (
    <div>
      <h1>Contacto</h1>
      <div className="formulario">
        <input type="text" placeholder="Tu nombre" />
        <input type="email" placeholder="Tu correo" />
        <textarea rows="4" placeholder="Tu mensaje"></textarea>
        <button>Enviar</button>
      </div>
    </div>
  );
}

export default Contacto;